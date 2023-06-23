import './Work.css'
import mockup from '/mockup.png'
import mockup2 from '/mockup2.png'
import mockup3 from '/mockup3.png'
import line from '/line5.png'

export default function Work() {
    return(
            <div className="work flex flex-col items-center">
                <h1 className='things'><span className='blue'>Some Things</span> I've Built</h1>
                <div className='projects flex flex-col'>
                    <div className='project flex justify-between items-center'>
                        <img className='mockup'  src={mockup} />
                        <div className='desc flex flex-col items-end justify-center'>
                            <h3 className='featured'>Featured Project</h3>
                            <h2 className='title'>Books For All</h2>
                            <div className='box'>
                                <p className='description'>Engaging Front-End Design, Robust Back-End Solution. Delight in a visually captivating and user-friendly front-end design that entices book enthusiasts to explore our vast collection.</p>
                            </div>
                            <div className='stacks flex'>
                                <h4 className='stackk'>Firebase</h4>
                                <h4 className='stackk'>Django</h4>
                                <h4 className='stackk'>React</h4>
                            </div>
                        </div>
                    </div>
                    {/* <img src={line} className='line3 ml-36' /> */}

                    <div className='project pro2 flex justify-between items-center'>
                        <div className='desc flex flex-col justify-center'>
                            <h3 className='featured'>Featured Project</h3>
                            <h2 className='title'>Spolaya Fragrance</h2>
                            <div className='box'>
                                <p className='description'>Mesmerizing Front-End Design, Unleash Your Senses. Indulge in a sensory journey through our captivating fragrance shop website. Immerse in an enchanting website that captures the essence of scent and allure.</p>
                            </div>
                            <div className='stacks flex'>
                                <h4 className='stackk'>Firebase</h4>
                                {/* <h4 className='stackk'>Django</h4> */}
                                <h4 className='stackk'>React</h4>
                            </div>
                        </div>
                        <img  className='mockup' src={mockup2} />
                    </div>

                    {/* <img src={line} className='line3 self-end mr-32' /> */}
                    <div className='project flex justify-between items-center'>
                        <img className='mockup'  src={mockup3} />
                        <div className='desc flex flex-col items-end justify-center'>
                            <h3 className='featured'>Featured Project</h3>
                            <h2 className='title'>Blooming Flowers</h2>
                            <div className='box'>
                                <p className='description'>Inspiring Front-End Design, A Floral Wonderland Awaits. Immerse yourself in a visually captivating and user-friendly front-end design that invites you to explore the mesmerizing world of Blooming Flowers.</p>
                            </div>
                            <div className='stacks flex'>
                                <h4 className='stackk'>Html</h4>
                                <h4 className='stackk'>Css</h4>
                                <h4 className='stackk'>JavaScript</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}