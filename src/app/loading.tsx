'use client'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-swiss-black z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Swiss Cross */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-4 bg-swiss-red animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-32 bg-swiss-red animate-pulse" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-2xl font-bold tracking-[0.3em] animate-pulse">
          LOADING...
        </div>

        {/* Swiss Grid Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
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

