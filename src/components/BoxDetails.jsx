import React from 'react';
import Popover from '@mui/material/Popover';

const BoxDetails = ({ anchorEl, onClose, title, description }) => {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <div style={{ padding: '20px' }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Popover>
  );
};

export default BoxDetails;
