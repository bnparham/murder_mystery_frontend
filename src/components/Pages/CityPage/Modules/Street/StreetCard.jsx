import React from 'react'

export default function LocationCard({card}) {
  return (
    <div>{card.name} - {card.location_id.name}</div>
  )
}
