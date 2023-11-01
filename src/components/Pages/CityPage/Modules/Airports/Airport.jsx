import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import CustomPagination from '../CustomPagination';
import AirportCard from './AirportCard';


export default function Airport({airportData, setAirportData}) {

    useEffect(
        function(){
            async function fetchAtmData () {
                fetch(`http://127.0.0.1:8000/api/airports/`)
                .then(response => {
                    return response.json()
                })
                .then(airportData => {
                    setAirportData(airportData)
                })
        }
        fetchAtmData()
        },[setAirportData])

        
        const itemsPerPage = 6; // Adjust the number of items per page as needed
        const [currentPage, setCurrentPage] = useState(1);
        
        // Calculate the start and end index for the current page.
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Get the data to display on the current page.
        const currentData = airportData.slice(startIndex, endIndex)

    return (
        <div>
            <Grid container spacing={1}>
                {currentData.map(
                c => 
                <Grid xs={12} md={2} sx={{p:1}}>
                    <AirportCard key={c.id} card={c}/>
                </Grid>
                )}
            </Grid>
            <CustomPagination count={Math.floor(airportData.length/itemsPerPage) + 1} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
