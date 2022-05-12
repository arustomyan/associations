import React from 'react'
import { Container, Typography, Grid, Input, Button } from '@mui/material';

function CreateRoom() {
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
            <Typography variant={'h2'} style={{marginBottom: '30px'}}>Создание комнаты</Typography>
            <Typography>Название комнаты</Typography>
            <Input />
            <Typography>Колличество игроков</Typography>
            <Input />
            <Button>Создать</Button>

      </Grid>
        

    </Container>
  )
}

export default CreateRoom