import React from 'react'

export default function Contact() {

   return (
      <div className="contact">
         <div className="contact-dis">Have a project in mind or just want to say hi? Feel free to send me a message!</div>
         <div className="email"><a href="mailto:christiannparanas@gmail.com">Send a mail <i className="fa fa-send"></i></a></div>
         <div className="socialmedia">
            <div className="dis">other social media accounts:</div>
            <div className="social">
               <i className="fab fa-facebook-f"></i>
               <i className="fab fa-twitter"></i>
               <i className="fab fa-github"></i>
               <i className="fab fa-linkedin-in"></i>
               <i className="fab fa-stack-overflow"></i>
            </div>
         </div>
      </div>
   )
}
