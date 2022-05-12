import React, { useState } from 'react'
import { Container, Grid, Typography, Input, Button } from '@mui/material';
import { getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app, auth } from '../components/firebase/firebase';

import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
// import { firestore } from './../components/firebase/firebase';


function SignInPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const sendMessage = async () => {
	// 	const docRef = await addDoc(collection(firestore, 'ggg'), {
	// 		text: email,
	// 		createdAt: serverTimestamp()
	// 	}).catch(err => console.log(err))
	// 	// console.log(messages)
		
	// }
    function emailPass() {
        console.log(email)
        console.log(password)
    }



    function authBtn() {
        console.log(auth)
    }

    function signIn () {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                console.log(userCredential.user)
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Ошибка')
                console.log(error)

            });


        console.log(auth)
        console.log()
    }


    function edit() {
    updateProfile(auth.currentUser, {
    displayName: "asics", photoURL: "https://e7.pngegg.com/pngimages/109/281/png-clipart-computer-icons-avatar-avatar-heroes-head.png"
        }).then(() => {
        // Profile updated!
        // ...
        }).catch((error) => {
        // An error occurred
        // ...
        });
        
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
        <Typography variant={'h2'} style={{marginBottom: '30px'}}>Авторизоваться</Typography>
        <Typography>E-mail</Typography>
        <Input value={email}
            onChange={e => setEmail(e.target.value)}/>
        <Typography style={{marginTop: '10px'}}>Пароль</Typography>
        <Input type='password'  onChange={e => setPassword(e.target.value)} />
        <Button variant='outlined' style={{marginTop: '10px'}} onClick={signIn} >Войти</Button>
        {/* <Button variant='outlined' style={{marginTop: '10px'}} onClick={sendMessage} >fdbfdsbgdrb</Button> */}
        <Button variant='outlined' style={{marginTop: '10px'}} onClick={authBtn} >auth</Button>
        <Button variant='outlined' style={{marginTop: '10px'}} onClick={emailPass} >email, pass</Button>
        <Button variant='outlined' style={{marginTop: '10px'}} onClick={edit} >записать</Button>
        {/* <Button variant='outlined' style={{marginTop: '10px'}} onClick={qq} >qq</Button> */}
        <Button variant='outlined' style={{marginTop: '10px'}} onClick={() => auth.signOut()}>logout</Button>

  </Grid>
    

</Container>
  )
}

export default SignInPage