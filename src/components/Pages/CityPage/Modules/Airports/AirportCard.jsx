import React from 'react'

export default function AirportCard({card}) {
  return (
    <div>
        {card.city} - {card.full_name}
    </div>
  )
}
