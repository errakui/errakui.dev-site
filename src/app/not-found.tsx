export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-swiss-black text-white pt-32 pb-20 px-6">
      <div className="text-center">
        <div className="relative mb-12">
          <span className="text-[20rem] font-mono font-bold opacity-10 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-4 border-swiss-red" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold mb-6">
          PAGINA NON
          <br />
          <span className="text-swiss-red">TROVATA</span>
        </h1>
        
        <p className="text-xl text-swiss-gray-400 mb-12 max-w-md mx-auto">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-12 py-4 bg-swiss-red text-white font-bold hover:bg-white hover:text-swiss-red transition-colors"
          >
            TORNA ALLA HOME
          </a>
          <a
            href="/contatti"
            className="px-12 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-swiss-black transition-colors"
          >
            CONTATTACI
          </a>
        </div>
      </div>
    </div>
  )
}

