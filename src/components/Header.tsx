import { PartyPopper } from 'lucide-react'

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-2 text-gray-800">
        <div className="bg-blue-100 p-2 rounded-lg">
          <PartyPopper className="w-6 h-6 text-blue-600" />
        </div>
        <h1 className="text-xl font-bold">Greeting Generator</h1>
      </div>
    </header>
  )
}
