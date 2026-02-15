import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface IOccasionButtonProps {
  icon: LucideIcon
  children: ReactNode
  isSelected: boolean
  onClick: () => void
}

export const OccasionButton = ({ icon: Icon, children, isSelected, onClick }: IOccasionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full h-32 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-200
        ${
        isSelected
          ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
          : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-blue-200 hover:bg-blue-50/50'
      }`}
    >
      <div className={`p-3 rounded-full ${isSelected ? 'bg-blue-200' : 'bg-white'}`}>
        <Icon className={`w-6 h-6 ${isSelected ? 'text-blue-700' : 'text-gray-400'}`} />
      </div>
      <span className="font-semibold text-sm sm:text-base">{children}</span>
    </button>
  )
}
