import React, { useEffect, useState } from 'react'
import AreaCard from './AreaCard'
import AlertDialog from './AlertDialog';


export default function Clues({selected,setSelected, setClues, clues}) {

    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickopenDialog = () => {
        setOpenDialog(true);
      };
    
      const handleClose = () => {
        setOpenDialog(false);
      };

    useEffect(
        function(){
            async function fetchClueData () {
                fetch(`http://127.0.0.1:8000/api/clue/?search=${selected}`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setClues(data)
                })
        }
        fetchClueData()
        }
        ,[selected, setClues]
    )

    useEffect(
        ()=>{console.log(clues)}, [clues]
    )

  return (
    <div>
        {selected.length === 1
        ? clues.length !== 0 ? (clues.map(
            c => 
            <>
                <AreaCard handleClickopenDialog={handleClickopenDialog} key={c.id} clue={c}/>
                <AlertDialog clue={c} openDialog={openDialog} handleClose={handleClose} />
            </>
        )) : <div>مدرکی برای این جرم ثبت نشده است</div>
        :
        <div>لطفا یک جرم را انتخاب کنید</div>
        }
    </div>
  )
}
