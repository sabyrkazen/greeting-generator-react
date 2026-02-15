import { useState } from 'react'
import { type LanguageType, OccasionType, ToneType } from './types'
import { LANGUAGES } from './constants'
import { generateGreeting } from './services/geminiService'
import { Header, OccasionButton, PageHero } from './components'
import { Cake, Snowflake } from 'lucide-react'

export const App = () => {
  const [occasion, setOccasion] = useState<OccasionType>(OccasionType.BIRTHDAY)
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [interests, setInterests] = useState<string>('')
  const [tone, setTone] = useState<ToneType>(ToneType.OFFICIAL)
  const [language, setLanguage] = useState<LanguageType>('English')
  const [generatedText, setGeneratedText] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async (): Promise<void> => {
    if (!name.trim()) {
      setError('Please enter a name.')
      return
    }

    setError(null)
    setLoading(true)
    setGeneratedText('')

    try {
      const response = await generateGreeting(occasion, name, age, interests, tone, language)
      setGeneratedText(response)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF5FF]">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <PageHero />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 sm:space-y-10 space-y-8">
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-900 text-white text-xs">
                      1
                    </span>
                  Choose an occasion
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <OccasionButton
                  icon={Cake}
                  isSelected={occasion === OccasionType.BIRTHDAY}
                  onClick={() => setOccasion(OccasionType.BIRTHDAY)}
                >
                  Birthday
                </OccasionButton>

                <OccasionButton
                  icon={Snowflake}
                  isSelected={occasion === OccasionType.NEW_YEAR}
                  onClick={() => setOccasion(OccasionType.NEW_YEAR)}
                >
                  New Year
                </OccasionButton>
              </div>
            </section>
          </div>

          <div className="lg:col-span-7 h-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <p>{occasion}</p>
          <p>{name}</p>
          <p>{age}</p>
          <p>{interests}</p>
          <p>{tone}</p>
          <p>{language}</p>
          <p>{generatedText}</p>
          <p>{error}</p>
        </div>

        <div>
          <div>
            <input type="text" placeholder="Sabyrka" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <input type="number" placeholder="18" value={age} onChange={(event) => setAge(event.target.value)} />
            <br />
            <textarea
              cols={30}
              rows={10}
              placeholder="Coding, music, traveling..."
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
          <div>
            <select value={language} onChange={(event) => setLanguage(event.target.value as LanguageType)}>
              {LANGUAGES.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={handleGenerate} disabled={loading}>Generate</button>
          </div>
        </div>
      </main>
    </div>
  )
}
