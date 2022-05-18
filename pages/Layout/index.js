import Router from "next/router";
import Link from "next/link";
import styles from '../styles/Home.module.css'
export const Layout = (props)=>{

    return(

<div className="">
<Link href="/login">
          <a>Home</a>
        </Link>
<Link href="/register">
          <a>Register</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>

</div>
    )
    

}