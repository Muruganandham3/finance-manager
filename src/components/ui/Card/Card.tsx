import type { CardProps } from './CardTypes'

export default function Card({children,className=""}:CardProps) {
  return (
    <div className={`card ${className}`}>
        {children}
    </div>
    
  )
}
