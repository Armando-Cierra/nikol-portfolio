import {useState} from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

export default function MenuMovil({url}){

    const [menu, setMenu] = useState(false);
    /*style={{background: "url('./img/background-menu.png'), linear-gradient(to left, #86b6a7, #e5f3ec)"}}*/

    return(
        <>
            <div className="barra">
                <Link href="/"><img src={url} alt=""/></Link>
                <div 
                    className={`toggleBtn ${menu ? 'active' : ''}`} 
                    onClick={()=>{menu ? setMenu(false) : setMenu(true)}}
                >
                    <div></div>
                </div>
            </div>
            <div className={`backgroundMenu ${menu ? 'active' : ''}`}></div>
            <nav className={`menuEnlaces ${menu ? 'active' : ''}`}>
                <NavLink href="/">Inicio</NavLink>
                <NavLink href="/conoceme">Conóceme</NavLink>
                <NavLink href="/proyectos">Proyectos</NavLink>
                <div className="decoracion"></div>
            </nav>
        </>
    )
}