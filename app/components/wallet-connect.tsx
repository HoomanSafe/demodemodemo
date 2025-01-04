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
    if (typeof window !== 'undefined' && "phantom" in window) {
      const phantomWindow = window as PhantomWindow
      const phantomProvider = phantomWindow.phantom?.solana
      
      if (phantomProvider?.isPhantom) {
        setProvider(phantomProvider)

        // Attempt to eagerly connect (no arguments for connect method)
        phantomProvider.connect().catch(() => {
          // Handle silent failure on eager connection
        })
      }
    }
  }, [])

  useEffect(() => {
    if (provider) {
      const handleConnect = (key: unknown) => {
        const publicKey = key as { toString: () => string }
        setConnected(true)
        setPublicKey(publicKey.toString())
      }

      const handleDisconnect = () => {
        setConnected(false)
        setPublicKey('')
      }

      const handleAccountChanged = (key: unknown) => {
        const publicKey = key as { toString: () => string } | null
        if (publicKey) {
          setConnected(true)
          setPublicKey(publicKey.toString())
        } else {
          setConnected(false)
          setPublicKey('')
        }
      }

      provider.on('connect', handleConnect)
      provider.on('disconnect', handleDisconnect)
      provider.on('accountChanged', handleAccountChanged)

      // Cleanup listeners on unmount (if 'off' is supported)
      return () => {
        if (provider.off) {
          provider.off('connect', handleConnect)
          provider.off('disconnect', handleDisconnect)
          provider.off('accountChanged', handleAccountChanged)
        }
      }
    }
  }, [provider])

  const connectWallet = async () => {
    try {
      setLoading(true)
      if (!provider) {
        window.open('https://phantom.app/', '_blank', 'noopener noreferrer')
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
      {loading 
        ? 'Loading...' 
        : connected 
          ? `Connected: ${publicKey.slice(0, 4)}...${publicKey.slice(-4)}` 
          : 'Connect Wallet'
      }
    </Button>
  )
}
