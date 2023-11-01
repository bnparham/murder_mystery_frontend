import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import CustomPagination from '../CustomPagination';
import StreetCard from './StreetCard';


export default function Street({streetData, setStreetData, locationSearch}) {

    useEffect(
        function(){
            async function fetchStreetData () {
                fetch(`http://127.0.0.1:8000/api/street/`)
                .then(response => {
                    return response.json()
                })
                .then(streetData => {
                    setStreetData(streetData)
                })
        }
        fetchStreetData()
        },[setStreetData])

        
        const itemsPerPage = 6; // Adjust the number of items per page as needed
        const [currentPage, setCurrentPage] = useState(1);
        
        // Calculate the start and end index for the current page.
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Get the data to display on the current page.
        
        const [currentData, setcurrentData] = React.useState(streetData)

        const [countPage, setCountPage] = React.useState(Math.floor(currentData.length/itemsPerPage) + 1)

        useEffect(
            function(){
                setcurrentData(
                        streetData.filter(
                        obj => locationSearch !== '' ? obj.location_id.name.includes(locationSearch) : obj)
                    )
                setCountPage(currentData.length/itemsPerPage === 0 ? Math.floor(currentData.length/itemsPerPage) + 1 : Math.floor(currentData.length/itemsPerPage))
            }, [locationSearch, streetData, currentData]
        )


    return (
        <div>
            <Grid container spacing={1}>
                {currentData.slice(startIndex, endIndex).map(
                c => 
                <Grid xs={12} md={2} sx={{p:1}}>
                    <StreetCard key={c.id} card={c}/>
                </Grid>
                )}
            </Grid>
            <CustomPagination count={countPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
