import './Contact.css'
import handshake from '/handshake.png'

export default function Contact() {
    
    return(
        <div id='contact' className="contact flex flex-col items-center">
            <li className='superpower'>Contact me</li>
            <div className='flex items-center gap-10'>
                <h1 className='ski'>Let’s build something together </h1>
                <img src={handshake} />
            </div>
            <h2 className='wor create'>I'm excited to collaborate and bring your <span className='yellow'>ideas</span> to life. Let's <span className='yellow'>create</span> something remarkable!</h2>
            <form className='flex flex-col inputs kk'>
                <div className='flex inputs'>
                    <div className='flex flex-col inputs'>
                        <input type="text" placeholder='Name' className='input1' />
                        <input type="email" placeholder='Email' className='input1' />
                    </div>
                    <input  type="text" placeholder='Enter your message' className='input1 input2' />
                </div>

                <button className='button1'>Send your message</button>
            </form>
        </div>
    )
}