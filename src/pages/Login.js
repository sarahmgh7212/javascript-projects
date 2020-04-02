import React from 'react';
import fire from '../config/fire';


class Login extends React.Component{

    login(){
        const email =document.querySelector("#email").value;
        const password =document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email,password)
        .then((u)=>{
            console.log("Successfully Logged in");

        })
        .catch((err) =>{
            console.log("Please try again"+ err.toString());
        })
    }
    singup(){
        const email =document.querySelector("#email").value;
        const password =document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email,password)
        .then((u)=>{
            console.log("Successfully Signed up");

        })
        .catch((err) =>{
            console.log("Please try again"+ err.toString());
        })
    }

    render(){
        return(
            <div style={{textAlign:'center' }}>
                <div>
                    <div>Email</div>
                    <input id="email" placeholder="Enter Email" type="text" />
                </div>
                <div>
                    <div>Password</div>
                    <input id="password" placeholder="Enter Password" type="password" />
                </div>
                <button style={{margin: '10px'}} onClick={this.login} >Login</button>
                <button style={{margin:'10px'}} onClick={this.singup}>Sing up</button>
            </div>
        )
    }
}

export default Login;