'use client'

import { useState, useEffect } from 'react'
import { Wallet } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { type PhantomProvider, type PhantomWindow, type WalletError } from '../types/wallet'

export function WalletConnect() {
  const [provider, setProvider] = useState<PhantomProvider | null>(null)
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(false)
  const [publicKey, setPublicKey] = useState<string>('')

  useEffect(() => {
    if ("phantom" in window) {
      const phantomWindow = window as PhantomWindow
      const provider = phantomWindow.phantom?.solana
      if (provider?.isPhantom) {
        setProvider(provider)
        // Attempt to eagerly connect
        provider.connect({ onlyIfTrusted: true }).catch(() => {
          // Handle connection failure silently for eager connect
        })
      }
    }
  }, [])

  useEffect(() => {
    if (provider) {
      provider.on('connect', (publicKey: { toString: () => string }) => {
        setConnected(true)
        setPublicKey(publicKey.toString())
      })

      provider.on('disconnect', () => {
        setConnected(false)
        setPublicKey('')
      })

      provider.on('accountChanged', (publicKey: { toString: () => string } | null) => {
        if (publicKey) {
          setConnected(true)
          setPublicKey(publicKey.toString())
        } else {
          setConnected(false)
          setPublicKey('')
        }
      })
    }
  }, [provider])

  const connectWallet = async () => {
    try {
      setLoading(true)
      if (!provider) {
        window.open('https://phantom.app/', '_blank')
        return
      }
      await provider.connect()
    } catch (error) {
      const walletError = error as WalletError
      console.error('Error connecting to wallet:', walletError.message)
    } finally {
      setLoading(false)
    }
  }

  const disconnectWallet = async () => {
    try {
      setLoading(true)
      if (provider) {
        await provider.disconnect()
      }
    } catch (error) {
      const walletError = error as WalletError
      console.error('Error disconnecting wallet:', walletError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button 
      onClick={connected ? disconnectWallet : connectWallet}
      className="bg-purple-600 hover:bg-purple-700 transition-colors"
      disabled={loading}
    >
      <Wallet className="w-5 h-5 mr-2" />
      {loading ? 'Loading...' : connected ? `Connected: ${publicKey.slice(0, 4)}...${publicKey.slice(-4)}` : 'Connect Wallet'}
    </Button>
  )
}

