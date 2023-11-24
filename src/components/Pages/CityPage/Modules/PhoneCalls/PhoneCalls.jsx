import React, { useEffect, useState } from 'react'



import { Grid } from '@mui/material';
import CustomPagination from '../CustomPagination';
import PhoneCards from './PhoneCards';

export default function PhoneCalls({phoneData, setPhoneData, phoneCallSearch, phoneCallSearchDate, phoneCallSearchCaller}) {

    useEffect(
        function(){
            async function fetchUsersecurityData () {
                fetch(`http://127.0.0.1:8000/api/phone-calls`)
                .then(response => {
                    return response.json()
                })
                .then(securityData => {
                    setPhoneData(securityData)
                })
        }
        fetchUsersecurityData()
        },[setPhoneData])


        const itemsPerPage = 6; // Adjust the number of items per page as needed
        const [currentPage, setCurrentPage] = useState(1);
        
        // Calculate the start and end index for the current page.
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Get the data to display on the current page.
        const [currentData, setCurrentData] = React.useState(phoneData)

        useEffect(
            function () { 
                setCurrentData(phoneData
                    .filter(obj => phoneCallSearchDate !== '' ? new Date(obj.date) >= new Date(phoneCallSearchDate) : obj)
                    .filter(obj => obj.duration >= Number(phoneCallSearch))
                    .filter(obj => phoneCallSearchCaller !== '' ? obj.caller.phone_number.toString().includes(phoneCallSearchCaller) : obj)
                )
             },
            [phoneCallSearch, phoneData, phoneCallSearchDate, phoneCallSearchCaller]
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
                    <PhoneCards key={c.id} card={c}/>
                </Grid>
                )}
            </Grid>
            <CustomPagination count={countPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
