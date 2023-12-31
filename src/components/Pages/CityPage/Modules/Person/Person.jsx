import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import CustomPagination from '../CustomPagination';
import PersonCard from './PersonCard';


export default function Person({personData, setPersonData,personPhoneNumberSearch,personPassportSearch,personLicenseSearch, personNameSearch}) {

    useEffect(
        function(){
            async function fetchPersonData () {
                fetch(`http://127.0.0.1:8000/api/person/`)
                .then(response => {
                    return response.json()
                })
                .then(personData => {
                    setPersonData(personData)
                })
        }
        fetchPersonData()
        },[setPersonData])

        
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
        shuffleArray(personData);


        // Get the data to display on the current page.
        const [currentData, setCurrentData] = React.useState(personData)

        useEffect(
            function () { 
                setCurrentData(personData
                    .filter(obj => personPhoneNumberSearch !== '' ? obj.phone_number.toString().includes(personPhoneNumberSearch) : obj)
                    .filter(obj => personLicenseSearch !== '' ? obj.license_plate.toString().includes(personLicenseSearch) : obj)
                    .filter(obj => personPassportSearch !== '' ? obj.passport_number.toString().includes(personPassportSearch) : obj)
                    .filter(obj => personNameSearch !== '' ? obj.name.includes(personNameSearch) : obj)
                )
             },
            [personData, personLicenseSearch, personPhoneNumberSearch, personPassportSearch, personNameSearch]
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
                    <PersonCard key={c.id} card={c}/>
                </Grid>
                )}
            </Grid>
            <CustomPagination count={countPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
