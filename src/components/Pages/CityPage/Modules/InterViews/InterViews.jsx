import React, { useEffect, useState } from 'react'



import { Grid } from '@mui/material';
import CustomPagination from '../CustomPagination';

export default function InterViews({interviewData, setInterviewData}) {

    useEffect(
        function(){
            async function fetchUsersecurityData () {
                fetch(`http://127.0.0.1:8000/api/interviews/`)
                .then(response => {
                    return response.json()
                })
                .then(interviewData => {
                    setInterviewData(interviewData)
                })
        }
        fetchUsersecurityData()
        },[setInterviewData])

        
        const itemsPerPage = 6; // Adjust the number of items per page as needed
        const [currentPage, setCurrentPage] = useState(1);
        
        // Calculate the start and end index for the current page.
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Get the data to display on the current page.
        const currentData = interviewData.slice(startIndex, endIndex)

    return (
        <div>
            <Grid container spacing={1}>
                {currentData.map(
                c => 
                <Grid xs={12} md={2} sx={{p:1}}>
                    {/* <PhoneCards key={c.id} card={c}/> */}
                    {c.name} - {c.transcript} - {c.date}
                </Grid>
                )}
            </Grid>
            <CustomPagination count={Math.floor(interviewData.length/itemsPerPage) + 1} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
