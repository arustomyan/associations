import React, { useState } from 'react'
import { Container, Grid, Typography, Input, Button } from '@mui/material';
import { auth } from '../components/firebase/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function RegistrationPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registration () {


        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        


        console.log(auth)
        console.log()
    }
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
        <Typography variant={'h2'} style={{marginBottom: '30px'}}>Регистрация</Typography>
        <Typography>E-mail</Typography>
        <Input value={email}
            onChange={e => setEmail(e.target.value)}/>
        <Typography style={{marginTop: '10px'}}>Пароль</Typography>
        <Input type='password'  onChange={e => setPassword(e.target.value)} />
        <Button variant='outlined' style={{marginTop: '10px'}} onClick={registration} >Зарегистрироваться</Button>

  </Grid>
    

</Container>
  )
}

export default RegistrationPage