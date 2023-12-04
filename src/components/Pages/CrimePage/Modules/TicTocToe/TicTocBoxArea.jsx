import React, { useState } from 'react'

export default function TicTocBoxArea({toggle,id, btndisable}) {
    const [buttonClicked, setButtonClicked] = useState(false);
    const row = id[0]
    const col = id[1]

    const findBtnStatus = btndisable[row][col]

    const handleClick = (e) => {
      toggle(e, row, col)
      setButtonClicked(true)
    }

    const Makeid = `box${id}`
  return (
    <>
      <div className="boxes" id={Makeid} onClick={buttonClicked || findBtnStatus ? null : handleClick} disabled={buttonClicked || findBtnStatus}></div>
    </>
  )
}
