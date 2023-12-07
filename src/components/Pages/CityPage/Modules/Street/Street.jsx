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
        

        // Function to shuffle the array
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        // Shuffle the array of objects
        shuffleArray(streetData);

        // Get the data to display on the current page.
        
        const [currentData, setcurrentData] = React.useState(streetData)

        const [countPage, setCountPage] = React.useState(Math.floor(currentData.length/itemsPerPage) + 1)

        useEffect(
            function(){
                setcurrentData(
                        streetData.filter(
                        obj => locationSearch !== '' ? obj.location_id.name.includes(locationSearch) : obj)
                    )
            }, [locationSearch, streetData]
        )

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
                    <StreetCard key={c.id} card={c}/>
                </Grid>
                )}
            </Grid>
            <CustomPagination count={countPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
