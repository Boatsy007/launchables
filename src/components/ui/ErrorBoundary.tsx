import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('[ErrorBoundary] Caught error:', error, info.componentStack)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div
          style={{
            minHeight: '100vh',
            background: '#F8F7F4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(255,92,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF5C00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <p
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: '#111111',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em',
            }}
          >
            Something went wrong
          </p>
          <p
            style={{
              color: '#666',
              fontSize: '0.9375rem',
              lineHeight: '1.6',
              maxWidth: '380px',
              marginBottom: '2rem',
            }}
          >
            An unexpected error occurred. Please refresh the page or try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: '#FF5C00',
              color: '#fff',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.875rem 2rem',
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 600,
              fontSize: '0.9375rem',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(255,92,0,0.3)',
            }}
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
export { ErrorBoundary }
