export interface PhantomWindow extends Window {
  phantom?: {
    solana?: PhantomProvider
  }
}

export interface PublicKey {
  toString: () => string
}

export interface PhantomProvider {
  isPhantom?: boolean
  publicKey?: PublicKey | null
  isConnected?: boolean
  signTransaction?: (transaction: unknown) => Promise<unknown>
  signAllTransactions?: (transactions: unknown[]) => Promise<unknown[]>
  signMessage?: (message: unknown) => Promise<unknown>
  connect: (opts?: { onlyIfTrusted?: boolean }) => Promise<{ publicKey: PublicKey }>
  disconnect: () => Promise<void>
  on: (event: string, handler: (args: unknown) => void) => void
  removeListener: (event: string, handler: (args: unknown) => void) => void
}

export interface WalletError extends Error {
  code?: number
  message: string
}

