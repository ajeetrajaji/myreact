import React from 'react'
import "./ContactForm.css"
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("name",event.target[0]);
    console.log("email",event.target[1]);
    console.log("text",event.target[2]);
  }


  return (
<section className='contain'>
    <div className='contact_form'>
        <div className="top_button">
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
        <Button
         text="VIA CALL" 
         icon={<LuPhoneCall fontSize="24px"/>} />
        </div>
        <Button
        isOutline={true}  
        text="VIA EMAIL FORM" 
        icon={<HiOutlineMail fontSize="32px"/>} />

        <form onSubmit={onSubmit}>
          <div className="form_control">
          <label htmlFor="name">Name</label>
          <input type="text" name='name' />
          </div>
          <div className="form_control">
          <label htmlFor="name">Email</label>
          <input type="email" name='email' />
          </div>
          <div className="form_control">
          <label htmlFor="name">Text</label>
          <textarea name="text" id="" cols="2" rows="3"></textarea>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "center"
          }}>
          <Button text="SUBMIT" />
         </div>
        </form>
    </div>
    <div className='contact_image'>
      <img src="/images/freepik--Character--inject-44.png" alt="contact image" />
    </div>
</section>
  )
}

export default ContactForm
