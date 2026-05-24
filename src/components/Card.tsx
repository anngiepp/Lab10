import { useState } from 'react'

type CardProps = {
  title: string
  description: string
}

const Card = ({ title, description }: CardProps) => {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>

      <button onClick={handleLike}>
        {liked ? '🍨 Te gusta' : 'Me gusta'}
      </button>
    </div>
  )
}

export default Card
