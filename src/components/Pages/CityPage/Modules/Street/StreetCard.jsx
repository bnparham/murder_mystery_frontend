import React from 'react'

export default function StreetCard({card}) {
  return (
    <div>{card.name} - {card.location_id.name}</div>
  )
}
