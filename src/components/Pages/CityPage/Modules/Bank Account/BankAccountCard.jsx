import React from 'react'

export default function BankAccountCard({card}) {
  return (
    <div>
        {card.account_number} - {card.created} - {card.person_id.name}
    </div>
  )
}
