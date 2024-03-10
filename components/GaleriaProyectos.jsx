import Link from 'next/link'

import listaProyectos from '../helper/proyectos'

export default function GaleriaProyectos(){

    return(
        <section className="galeriaProyectos">
            <h2 data-aos="fade-up">Proyectos</h2>
            <div className="contenedor" data-aos="fade-up" data-aos-delay="300">
                {listaProyectos.map((proyecto, index)=>(
                    <Link href="/proyectos/[slug]" as={`proyectos/${proyecto.slug}`} key={index}>
                        <div className="proyectoCover">
                            {proyecto.cover && <img src={proyecto.cover} alt=""/>}
                            <h3 className="titulo">{proyecto.nombre}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}