import React, { useState } from 'react'


const App = () => {
    const[fullname,setFullname]=useState({
         fname:"",
         lname:"",
        mail:"",
         number:"",
    });
    const inputevent=(event)=>{
     const {value ,name}=event.target;

     setFullname((preValue) => {

        return {
            ...preValue,
            [name]: value,
        };

    //     if(name==="fname"){
    //         return{
    //             fname: value,
    //             lname:preValue.lname,
    //             mail:preValue.mail,
    //             number:preValue.number
    //            };
    //     }
    //     if(name==="lname"){
    //         return{
    //             fname: preValue.fname,
    //             lname:value,
    //             mail:preValue.mail,
    //             number:preValue.number
    //            };
    //     }
    //     if(name==="mail"){
    //         return{
    //             fname: preValue.fname,
    //             lname:preValue.lname,
    //             mail:value,
    //             number:preValue.number
    //            };
    //     }
    //     if(name==="number"){
    //         return{
    //             fname: preValue.fname,
    //             lname:preValue.lname,
    //             mail:preValue.mail,
    //             number:value
    //            };
    //     }


     }
     )
     
    }
    const onSubmits=(event)=>{
        event.preventDefault();
        alert("your form submitted");

    };


  return (
    <>
    <form onSubmit={onSubmits}>
    <div className='head'>
    <h1>Hello!  {fullname.fname} {fullname.lname}</h1>
    <h3>{fullname.mail}</h3>
    <h3>{fullname.number}</h3>

    <input type="text" placeholder='Enter Your First Name' id='first' name="fname" onChange={inputevent} value={fullname.fname} autoComplete="off" required/><br />
    <input type="text" placeholder='Enter Your Last Name' name="lname" onChange={inputevent} value={fullname.lname} required/><br />
    <input type="email" placeholder='Enter Your E-mail' name="mail" onChange={inputevent} value={fullname.mail} autoComplete="off" required/><br />
    <input type="number" placeholder='Enter Your Phone Number' name="number" onChange={inputevent} value={fullname.number} required/>
    <button type='submit'>SUBMIT</button>
    </div>
    </form>
    </>
  )
}

export default App