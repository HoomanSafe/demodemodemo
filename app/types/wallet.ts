export interface PhantomWindow extends Window {
    phantom?: {
      solana?: PhantomProvider
    }
  }
  
  export type PhantomEvent = "disconnect" | "connect" | "accountChanged"
  
  export interface PhantomProvider {
    connect: () => Promise<{ publicKey: { toString: () => string } }>
    disconnect: () => Promise<void>
    on: (event: PhantomEvent, callback: (args: unknown) => void) => void
    isPhantom: boolean
    isConnected: boolean
  }
  
  export interface WalletError extends Error {
    code?: number
    message: string
  }
  
  