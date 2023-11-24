import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import CustomPagination from '../CustomPagination';
import AtmCard from './AtmCard';

export default function Atm({atmData, setAtmData, atmStreetSearch, atmSearchDate, atmRadio}) {

    useEffect(
        function(){
            async function fetchAtmData () {
                fetch(`http://127.0.0.1:8000/api/atm/`)
                .then(response => {
                    return response.json()
                })
                .then(atmData => {
                    setAtmData(atmData)
                })
        }
        fetchAtmData()
        },[setAtmData])

        
        const itemsPerPage = 6; // Adjust the number of items per page as needed
        const [currentPage, setCurrentPage] = useState(1);
        
        // Calculate the start and end index for the current page.
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Get the data to display on the current page.
        // Get the data to display on the current page.
        const [currentData, setCurrentData] = React.useState(atmData)

        useEffect(
            function () { 
                setCurrentData(atmData
                    .filter(obj => atmSearchDate !== '' ? new Date(obj.date) >= new Date(atmSearchDate) : obj)
                    .filter(obj => atmStreetSearch !== '' ? obj.atm_location.name.includes(atmStreetSearch) : obj)
                    .filter(
                        obj => atmRadio !== '' ? obj.transaction_type === atmRadio : obj
                    )
                )
             },
            [atmStreetSearch, atmData, atmSearchDate, atmRadio]
        )
        
        // count page
        const [countPage, setCountPage] = React.useState(currentData.length/itemsPerPage === 0 ? Math.floor(currentData.length/itemsPerPage): Math.floor(currentData.length/itemsPerPage) + 1)

        useEffect(
            () => {
                setCountPage(currentData.length/itemsPerPage === 0 ? Math.floor(currentData.length/itemsPerPage): Math.floor(currentData.length/itemsPerPage) + 1)
                }, 
        [currentData]
        )

    return (
        <div>
            <Grid container spacing={1}>
                {currentData.slice(startIndex, endIndex).map(
                c => 
                <Grid xs={12} md={2} sx={{p:1}}>
                    <AtmCard key={c.id} card={c}/>
                </Grid>
                )}
            </Grid>
            <CustomPagination count={countPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
