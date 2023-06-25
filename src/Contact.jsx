import './Contact.css'
import handshake from '/handshake.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oj81k9d', 'template_hdlm96o', form.current, 'C2Tv2ddJ-J7qXYa05')
          .then((result) => {
              window.alert('Message sent successfully!');
          }, (error) => {
              window.alert('Error sending message. Please try again later.');
          });
    };
    return(
        <div id='contact' className="contact flex flex-col items-center">
            <li className='superpower pr-3'>Contact me</li>
            <div className='flex items-center gap-10 frr'>
                <h1 className='ski build'>Let’s build something together </h1>
                <img src={handshake} className='hand' />
            </div>
            <h2 className='wor create'>I'm excited to collaborate and bring your <span className='yellow'>ideas</span> to life. Let's <span className='yellow'>create</span> something remarkable!</h2>
            <form className='flex flex-col inputs kk' ref={form} onSubmit={sendEmail}>
                <div className='flex inputs gr'>
                    <div className='flex flex-col inputs'>
                        <input type="text" placeholder='Name' className='input1' name="user_name" />
                        <input type="email" placeholder='Email' className='input1' name="user_email" />
                    </div>
                    <input  type="text" placeholder='Enter your message' className='input1 input2' name="message" />
                </div>

                <button className='button1'  value="Send">Send your message</button>
            </form>
        </div>
    )
}