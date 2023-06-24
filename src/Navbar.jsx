import './Navbar.css'

export default function Navbar(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      };
    
    return(
        <nav className="flex justify-between items-center">
            <h1 className="ozawa">Ozawa Kyo</h1>
            <div className="flex gap-24 items-center navl">
                <h1 className="navlist"onClick={() => scrollToSection('skill')}>Skills</h1>
                <h1 className="navlist"onClick={() => scrollToSection('works')}>Works</h1>
                <h1 className="navlist" onClick={() => scrollToSection('skill')}>Blog</h1>
                <button className="lets navlist" onClick={() => scrollToSection('contact')} >Let's Talk</button>
            </div>
        </nav>
    )
}