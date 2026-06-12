import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

function TestApp() {
  return (
    <>
      {/* Resets browser styles to default Material guidelines */}
      <CssBaseline /> 
      
      <div style={{ padding: '20px' }}>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </>
  );
}

export default TestApp;
