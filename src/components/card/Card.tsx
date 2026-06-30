import type { CardProps } from './CardTypes'

export default function Card({children,className=""}:CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-200 ${className}`}>
        {children}
    </div>
    
  )
}
