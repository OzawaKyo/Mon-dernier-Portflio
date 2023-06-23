import './Skill.css'
import angular from '/angular.png'
import react from '/react.png'
import firebase from '/firebase.png'
import tailwind from '/tailwind.png'
import spring from '/spring.png'
import symfony from '/symfony.png'
import csharp from '/csharp.png'
import django from '/django.png'
import figma from '/figma.png'
import ae from '/ae.png'
import ai from '/ai.png'
import ps from '/ps.svg'


export default function Skill(){
    return(
        <section className="skill flex flex-col items-center" id="skill" >
            <div className='flex flex-col items-center'>
                <li className='superpower'>I Thrive In</li>
                <h1 className='ski'>Skills</h1>
                <h2 className='wor'>I have been working in web development industry for over <span className='yellow'>3 years</span>.</h2>
            </div>
            <div className='stack flex'>
                <div className="logos flex gap-10 flex-wrap">
                    <img src={angular} className="logoo" />
                    <img src={react} className="logoo" />
                    <img src={firebase} className="logoo" />
                    <img src={tailwind} className='logoo' />                
                </div>
                <div className="logos flex gap-10 flex-wrap">
                    <img src={spring} className="logoo" />
                    <img src={symfony} className="logoo" />
                    <img src={csharp} className="logoo" />
                    <img src={django} className='logoo' />                
                </div>
                <div className="logos flex gap-10 flex-wrap">
                    <img src={figma} className="logoo figma" />
                    <img src={ae} className="logoo" />
                    <img src={ai} className="logoo" />
                    <img src={ps} className='logoo ps' />                
                </div>
            </div>
        </section>
    )
}