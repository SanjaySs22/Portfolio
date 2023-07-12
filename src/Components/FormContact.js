 import "./FormContactStyles.css";

 import React from 'react'
 
 const FormContact = () => {
   return (
     <div className="form">
        <form>
            <label> Your Name </label>
            <input type="text" placeholder="Enter your Name"></input>
            <label> Email </label>
            <input type="email" placeholder="Enter your email"></input>
            <label> Subject </label>
            <input type="text" placeholder="Type Here" ></input>
            <label> Message </label>
            <textarea rows="6" placeholder="Type your message here "/>
            <button type="submit" className="btn">Submit</button>
        </form>
        
     </div>
   )
 }
 
 export default FormContact