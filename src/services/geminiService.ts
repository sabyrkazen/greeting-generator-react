import { GoogleGenAI } from '@google/genai'
import { ToneType } from '../types'

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })

export const generateGreeting = async (tone: ToneType): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: 'Explain how AI works in a few words',
      config: {
        temperature: tone === ToneType.ADULT ? 0.9 : 0.8,
      },
    })

    console.log(response.text)
    return ''
  } catch (error) {
    console.error('Greeting generation error:', error)
    return 'Something went wrong. Please try again.'
  }
}
