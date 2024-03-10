import Link from 'next/link'
import NavLink from './NavLink'

export default function MenuEscritorio({url}){
    return(
        <nav className="menuEscritorio">
            <div className="contenedor">
                <Link href="/" className="logo">
                    <img src={url} alt=""/>
                </Link>
                <div className="enlaces">
                    <NavLink href="/">Inicio</NavLink>
                    <NavLink href="/conoceme">Conóceme</NavLink>
                    <NavLink href="/proyectos">Proyectos</NavLink>
                </div>
            </div>
        </nav>
    )
}