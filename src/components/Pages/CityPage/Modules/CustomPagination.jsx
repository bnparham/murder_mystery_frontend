import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function CustomPagination({count, setCurrentPage, currentPage}) {

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Stack alignItems={'center'} spacing={2}>
      <Pagination sx={{'& button:active':{color:'secondary'}}} count={count} variant="outlined" color="primary" page={currentPage} onChange={handlePageChange} hideNextButton hidePrevButton/>
    </Stack>
  );
}