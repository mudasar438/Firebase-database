import Head from 'next/head'
import Image from 'next/image'
import {app} from '../firebaseConfig'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword ,  GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

export default function Register(){
  const auth = getAuth();
    const router = useRouter()
    const googleprovider = new GithubAuthProvider();
    const githubprovider = new GoogleAuthProvider();

const [email, setEmail] = useState('')
const [password, setPassword]= useState('')


// const singUp = ()=>{

//     createUserWithEmailAndPassword(auth, email, password)
//     .then((response) => {
//         sessionStorage.setItem("Token", response.user.accessToken)
//        router.push('/home')
//       })
// }

const singupGoogle = ()=>{
    signInWithPopup(auth, googleprovider)

    .then((response) => {
        sessionStorage.setItem("Token", response.user.accessToken)
        router.push('/home')

       console.log(response.user)
      })

}
const signupGitHub = ()=>{
    signInWithPopup(auth, githubprovider)

    .then((response) => {
        sessionStorage.setItem("Token", response.user.accessToken)
        router.push('/home')
       console.log(response.user)
      })
    
}
useEffect(()=>{

    let token =  sessionStorage.getItem("Token")
    if(token){
        router.push('/home')
    }
}, [])


            const login = ()=>{
              createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
        sessionStorage.setItem("Token", response.user.accessToken)
       router.push('/home')
      })
                // router.push('/home')

            }
    return(

      <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.headFount}>
          Login
          
       </h3>
       <input value={email} placeholder='Email ' type= "email" className={styles.inputBox} onChange={ (event)=>setEmail(event.target.value)} />
       <input value={password} type="password" placeholder='password' className={styles.inputBox}  onChange={ (event)=>setPassword(event.target.value)}  />
       {/* <button className={styles.signup} onClick={singUp}>Sign Up</button> */}
       <button className={styles.signup} onClick={login}>Login</button>
       <button className={styles.signup} onClick={singupGoogle}>Sign Up with GitHub</button>
       <button className={styles.signup} onClick={signupGitHub}>Sign up with Google</button>
      </main>

     
    </div>
    //fajdkjladgj askd

    )
}