import { GoogleGenAI } from '@google/genai'
import { type LanguageType, OccasionType, ToneType } from '../types'

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })

export const generateGreeting = async (
  occasion: OccasionType,
  name: string,
  age: string,
  interests: string,
  tone: ToneType,
  language: LanguageType,
): Promise<string> => {
  try {
    const prompt = `
      Write a unique greeting in the following language: ${language}.

      Occasion: ${occasion},
      For: ${name},
      Age: ${age ? age : 'Not specified'},
      Interests/Hobbies: ${interests ? interests : 'Not specified'},
      Tone: ${tone}

      Style instructions (adapt to the cultural context of the ${language} language):
      - Formal: Reserved and respectful.
      - Friendly: Warm and informal.
      - Humorous: Fun, playful, with a light-hearted joke.
      - Romantic: Tender, loving, and sensual.
      - Touching: Heartfelt and emotional.
      - 18+: Bold, spicy, with sarcasm or adult jokes (only if appropriate for an 18+ context).

      General requirements:
      - Be sure to take the person's age and interests into account.
      - Length: 2 to 5 sentences.
      - Use 2–3 emojis that match the meaning.
      - Formatting: Plain text only, no markdown headings.
      - The response language MUST be: ${language}.
    `

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: tone === ToneType.ADULT ? 0.9 : 0.8,
      },
    })

    const text = response?.text?.trim()

    if (!text) {
      throw new Error('AI model returned empty text response')
    }

    return text
  } catch (error) {
    console.error('Greeting generation error:', error)
    return 'Something went wrong. Please try again.'
  }
}
