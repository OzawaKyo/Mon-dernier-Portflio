import './Navbar.css'

export default function Navbar(){

    return(
        <nav className="flex justify-between items-center">
            <h1 className="ozawa">Ozawa Kyo</h1>
            <div className="flex gap-24 items-center navl">
                <h1 className="navlist">Skills</h1>
                <h1 className="navlist">Works</h1>
                <h1 className="navlist">Blog</h1>
                <button className="lets navlist" >Let's Talk</button>
            </div>
        </nav>
    )
}