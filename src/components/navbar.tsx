import "./navbar.css"

export function Navbar(){
    return(
        <>
        <nav className="navegacao">
            <h2 id="ola">Um dev em construção</h2>
            <ul className="navList">
                <li> <a href="#ola">Home</a> </li>
                <li> <a href="#TextoSobre">Sobre mim</a> </li>
                <li> <a href="#tech">Skills</a> </li>
                <li> <a href="#exp">Exp</a> </li>
            </ul>
        </nav>
        </>
    )
}