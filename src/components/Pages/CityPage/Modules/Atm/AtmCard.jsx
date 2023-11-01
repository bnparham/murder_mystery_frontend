import React from 'react'

export default function AtmCard({card}) {
  return (
    <div>
        {card.transaction_type} - {card.amount} - {card.account_number.account_number} - {card.atm_location.name} - {card.date}
    </div>
  )
}
