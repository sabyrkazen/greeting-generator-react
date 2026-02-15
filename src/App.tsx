import { useState } from 'react'
import { OccasionType, ToneType } from './types'

export const App = () => {
  const [occasion, setOccasion] = useState<OccasionType>(OccasionType.BIRTHDAY)
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [interests, setInterests] = useState<string>('')
  const [tone, setTone] = useState<ToneType>(ToneType.OFFICIAL)

  return (
    <div className="min-h-screen bg-[#FAF5FF]">
      <header></header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <p>{occasion}</p>
          <p>{name}</p>
          <p>{age}</p>
          <p>{interests}</p>
          <p>{tone}</p>
        </div>
        <div>
          <div>
            <button onClick={() => setOccasion(OccasionType.BIRTHDAY)}>День Рождения</button>
            <button onClick={() => setOccasion(OccasionType.NEW_YEAR)}>Новый Год</button>
          </div>
          <div>
            <input type="text" placeholder="Sabyrka" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <input type="number" placeholder="18" value={age} onChange={(event) => setAge(event.target.value)} />
            <br />
            <textarea
              cols={30}
              rows={10}
              placeholder='Например: "Любит футбол, путешествия и готовить"'
              value={interests}
              onChange={(event) => setInterests(event.target.value)}
            ></textarea>
          </div>
          <div>
            {Object.values(ToneType).map((item: ToneType) => (
              <button key={item} onClick={() => setTone(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
