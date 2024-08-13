import React from "react";

function ContactForm(){
    return(
        <div>
            <h1>Contact Me</h1>
            
            <form className="contact-form">
                <div className="contact-form-input">
                    <label>Name: </label>
                    <input type="text" placeholder="Your Name" />
                </div>
                
                <div className="contact-form-input">
                    <label>Email: </label>
                    <input type="text" placeholder="Your Email"/>
                </div>

                <div className="contact-form-input">
                    <label>Message</label>
                    <textarea  />
                </div>
                
                <button>Submit</button>
            </form>
        
        </div>
    )
}

export default ContactForm;