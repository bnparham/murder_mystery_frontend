import React, { useEffect, useState } from 'react'

import SecurityCards from './SecurityCards';
import { Grid } from '@mui/material';
import CustomPagination from './CustomPagination';

export default function SecurityCameras({securitySearch, setSecurityData, securityData, radio}) {

    useEffect(
        function(){
            async function fetchUsersecurityData () {
                fetch(`http://127.0.0.1:8000/api/security-log/?search=${securitySearch}`)
                .then(response => {
                    return response.json()
                })
                .then(securityData => {
                    setSecurityData(securityData)
                })
        }
        fetchUsersecurityData()
        },[setSecurityData, securitySearch])


        const itemsPerPage = 6; // Adjust the number of items per page as needed
        const [currentPage, setCurrentPage] = useState(1);
        
        // Calculate the start and end index for the current page.
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Get the data to display on the current page.
        const currentData = securityData.slice(startIndex, endIndex).filter(
          item =>  radio !== '' ? item.activity === radio : item
        );

    return (
        <div>
            <Grid container spacing={1}>
                {currentData.map(
                c => 
                <Grid xs={12} md={2} sx={{p:1}}>
                    <SecurityCards key={c.id} card={c}/>
                </Grid>
                )}
            </Grid>
            <CustomPagination count={Math.floor(securityData.length/itemsPerPage) + 1} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
