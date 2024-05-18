import React from 'react'
import { Link } from 'react-router-dom';
import "./Sign_Up.css"

function Sign_Up() {
  return (
    <div className="container">
        <div className="signup">
            <div className="signup-text">
                <h1>Sign Up</h1>
                <p>Already a member?<span><Link to="/login"> Login</Link> </span> </p>
            </div>

            <div className="signup-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required className="form-control"placeholder="Enter your name" aria-describedby="helpId"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required  
                        className="form-control" 
                        placeholder="Enter your phone" 
                        aria-describedby="helpId"
                        pattern="\d{10}" 
                        title="Please enter a 10-digit phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId"/>
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                </form>    
            </div>
        </div>    
    </div>
  );
};

export default Sign_Up