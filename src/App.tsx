import { useState } from 'react'
import { OccasionType } from './types'

export const App = () => {
  const [occasion, setOccasion] = useState<OccasionType>(OccasionType.BIRTHDAY)

  return (
    <div className="min-h-screen bg-[#FAF5FF]">
      <header></header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {occasion}
        </div>
        <div>
          <button onClick={() => setOccasion(OccasionType.BIRTHDAY)}>День Рождения</button>
          <button onClick={() => setOccasion(OccasionType.NEW_YEAR)}>Новый Год</button>
        </div>
      </main>
    </div>
  )
}
