import React from "react"

type Props = {
  children: React.ReactNode
  twClasses?: string
}

const Card = ({ children, twClasses }: Props) => {
  return (
    <div
      className={`p-2 rounded-lg shadow-lg bg-main text-secondary ${twClasses}`}
    >
      {children}
    </div>
  )
}

export default Card
