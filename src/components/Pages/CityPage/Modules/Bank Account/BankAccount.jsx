import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import CustomPagination from '../CustomPagination';
import BankAccountCard from './BankAccountCard'

export default function BankAccount({bankData, setBankData, bankAccountSearch, bankAccountSearchDate}) {

    useEffect(
        function(){
            async function fetchInterViewData () {
                fetch(`http://127.0.0.1:8000/api/bank-account/`)
                .then(response => {
                    return response.json()
                })
                .then(bankData => {
                    setBankData(bankData)
                })
        }
        fetchInterViewData()
        },[setBankData])

        
        const itemsPerPage = 6; // Adjust the number of items per page as needed
        const [currentPage, setCurrentPage] = useState(1);
        
        // Calculate the start and end index for the current page.
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Get the data to display on the current page.
        // Get the data to display on the current page.
        const [currentData, setCurrentData] = React.useState(bankData)

        useEffect(
            function () { 
                setCurrentData(bankData
                    .filter(obj => bankAccountSearchDate !== '' ? new Date(obj.date) >= new Date(bankAccountSearchDate) : obj)
                    .filter(obj => bankAccountSearch !== '' ? obj.person_id.name.includes(bankAccountSearch) : obj)
                )
             },
            [bankData, bankAccountSearch, bankAccountSearchDate]
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
                    <BankAccountCard key={c.id} card={c}/>
                </Grid>
                )}
            </Grid>
            <CustomPagination count={countPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
