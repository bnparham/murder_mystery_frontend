import React from 'react'

export default function FlightCard({card}) {
  return (
    <div>
        {card.origin_airport_id.full_name} - {card.destination_airport_id.full_name} - {card.type}
    </div>
  )
}
