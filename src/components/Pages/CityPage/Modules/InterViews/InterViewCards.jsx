import React from 'react'

export default function InterViewCards({card}) {
  return (
    <div >
      {card.name} - {card.transcript} - {card.date}
    </div>
  )
}
