import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import CustomPagination from '../CustomPagination';
import InterViewCards from './InterViewCards'

export default function InterViews({interviewData, setInterviewData, interviewSearchDate, interViewNameSearch}) {

    useEffect(
        function(){
            async function fetchInterViewData () {
                fetch(`http://127.0.0.1:8000/api/interviews`)
                .then(response => {
                    return response.json()
                })
                .then(interviewData => {
                    setInterviewData(interviewData)
                })
        }
        fetchInterViewData()
        },[setInterviewData])

        
        const itemsPerPage = 6; // Adjust the number of items per page as needed
        const [currentPage, setCurrentPage] = useState(1);
        
        // Calculate the start and end index for the current page.
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Get the data to display on the current page.
        const [currentData, setCurrentData] = React.useState(interviewData)
        useEffect(
            function () { 
                setCurrentData(interviewData
                    .filter(obj => interviewSearchDate !== '' ? new Date(obj.date) >= new Date(interviewSearchDate) : obj)
                    .filter(obj => interViewNameSearch !== '' ? obj.street_id.name.includes(interViewNameSearch) : obj)
                )
             },
            [interviewData, interviewSearchDate, interViewNameSearch]
        )

        // count page
        const [countPage, setCountPage] = React.useState(currentData.length/itemsPerPage === 0 ? Math.floor(currentData.length/itemsPerPage): Math.floor(currentData.length/itemsPerPage) + 1)

        useEffect(
            () => {
                setCountPage(currentData.length/itemsPerPage === 0 ? Math.floor(currentData.length/itemsPerPage): Math.floor(currentData.length/itemsPerPage) + 1)
                }, 
        [currentData]
        )

        // Function to shuffle the array
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        // Shuffle the array of objects
        shuffleArray(currentData);

    return (
        <div>
            <Grid container spacing={1}>
                {currentData.slice(startIndex, endIndex).map(
                c => 
                <Grid xs={12} md={2} sx={{p:1}}>
                    <InterViewCards key={c.id} card={c}/>
                </Grid>
                )}
            </Grid>
            <CustomPagination count={countPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
