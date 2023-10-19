import React, { useEffect, useState } from 'react'
import AreaCard from './AreaCard'


export default function Clues({crimeID, setClues, clues}) {

    useEffect(
        function(){
            async function fetchClueData () {
                fetch(`http://127.0.0.1:8000/api/clue/?search=${crimeID}`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setClues(data)
                })
        }
        fetchClueData()
        }
        ,[crimeID, setClues]
    )

  return (
    <div>
        {clues.map(
            c => <AreaCard key={c.id} clue={c}/>
        )}
    </div>
  )
}
