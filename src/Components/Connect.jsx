import React ,{useState} from "react";
import chat from "../assets/chat.png";
import emailjs from "emailjs-com";

function Connect(){

   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [message,setMessage] = useState("");
   const [values,setValues] = useState({});
   const [errors,setErrors] = useState({});
   const [mailed,setMailed] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
      if (errors.name) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "",
        }));
      }
    } else if (name === "email") {
      setEmail(value);
      if (errors.email) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    } else if (name === "message") {
      setMessage(value);
      if (errors.message) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          message: "",
        }));
      }
    }
  };
  
   
   function validate() {
    let errors = {};
    if (!name) {
      errors.name = "Please enter your first name";
    }else if(name.length < 3){
      errors.name ="Please enter a valid name";
    }

    if (!email) {
      errors.email = "Please enter a email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please insert a valid e-mail e.g. name@domain.com";
    }

    if (!message) {
      errors.message = "Please enter your message";
    } else if (message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  }
   
  const handleSubmit = (event) =>{
    event.preventDefault();
    const errors = validate(values);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
        emailjs.init("Z6XZ6QvCmARnbxQ51");
        let Name = name;
        let userEmail = email;
        let userMessage = message;
    
            var contactParams = {
                from_name: Name,
                from_email: userEmail,
                message: userMessage
            };
    
            emailjs.send('service_pt4asmh', 'template_szjnxhk', contactParams)
            .then((response) => {
              console.log('Email sent successfully!', response);
              setMailed(true);
              setName("");
              setEmail("");
              setMessage("");
              setIsSubmitting(true);
              setTimeout(() => {
                setMailed(false);
              },10000);
            })
            .catch((error) => {
              console.error('Error sending email:', error);
              setIsSubmitting(false);
            });
    }}
    return(
      <div className="connect-section" id="connect">
      <div className="container connect">
         <div className="connect-image col-md-6">
           <img src={chat} className="Chat-img" alt=""></img>
         </div>
         <div className="connect-form col-md-6">
           <h2 className="connect-head">Let's Chat!</h2>
           <div className="input-container">
           <div className="form-input">
           <input className="connect-input" type="text" name="name" placeholder="Name" onChange={handleChange} value={name}></input>
           {errors.name && (<span className="error-msg">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
             {errors.name}
           </span>)}
           </div>
           <div className="form-input">
           <input className="connect-input" type="email" name="email" placeholder="Email" onChange={handleChange} value={email}></input>
           {errors.email && (<span className="error-msg">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
             {errors.email}
           </span>)}           
           </div>
           <div  className="form-input">
           <input className="connect-input" type="text" name="message" placeholder="Message" onChange={handleChange} value={message}></input>
           {errors.message && (<span className="error-msg">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
             {errors.message}
           </span>)}           
           </div>
           <button type="submit" className="connect-btn" onClick={handleSubmit}>Send</button>
           {mailed && (<span className="success-msg text-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>
           Message sent successfully</span>)}
           </div>
         </div>
      </div>
      </div>
    );
}

export default Connect;