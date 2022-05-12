import React from 'react'
import { Container, Typography, Grid } from '@mui/material';

function GamePage() {
  return (
    <Container>
              <Grid container 
        style={{height: '100vh'}}
        alignItems={'center'}
        justifyContent={'flex-start'}
        flexWrap={'nowrap'}
        columns={1}
        flexDirection={'column'}
      >
        <Typography variant={'h2'} style={{marginBottom: '30px'}}>Игра</Typography>
      </Grid>
            
    </Container>
  )
}

export default GamePage