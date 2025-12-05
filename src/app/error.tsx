'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-swiss-red text-white pt-32 pb-20 px-6">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-mono font-bold mb-8 opacity-50">
          ERROR
        </div>
        
        <h1 className="text-5xl font-bold mb-6">
          QUALCOSA È ANDATO
          <br />
          STORTO
        </h1>
        
        <p className="text-xl opacity-90 mb-12">
          Si è verificato un errore imprevisto. I nostri tecnici svizzeri 
          sono già al lavoro per risolvere il problema.
        </p>

        {error.message && (
          <div className="bg-white/10 p-6 mb-8 font-mono text-sm text-left">
            {error.message}
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-12 py-4 bg-white text-swiss-red font-bold hover:bg-swiss-black hover:text-white transition-colors"
          >
            RIPROVA
          </button>
          <a
            href="/"
            className="px-12 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-swiss-red transition-colors"
          >
            TORNA ALLA HOME
          </a>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>
    </div>
  )
}

