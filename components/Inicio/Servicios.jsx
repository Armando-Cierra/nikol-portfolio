export default function Servicios({setServicio}){

    const servicios = [
        {
            nombre: 'Diseño Arquitectónico',
            descripcion: 'Servicios de arquitectura generales para proyectos personalizados, asesorías para la elaboración de planos de casas, centros comerciales, etc.',
            img: 'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502710/servicios/ckayng2vzpmwdeoyllrq.jpg'
        }, {
            nombre: 'Diseño Interior y Mobiliario a la Medida',
            descripcion: 'Ambientación a la medida para cada uno de tus espacios, decoración, stands, escaparatismo, etc. Así como diseño de mobiliario a la medida para cada una de las necesidades del cliente y sus espacios.',
            img: 'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502711/servicios/t7ut7vsnnwsw2idsxhew.jpg'
        }, {
            nombre: 'Visualizacion 3D',
            descripcion: 'Renders, Tour Interactivos, Realidad Virtual , Secciones 3d y Modelado de ideas. Para que pueda presentar sus proyectos de diferentes maneras y poder adaptarse a las necesidades tecnológicas actuales.',
            img: 'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502710/servicios/fq2pdtmpodtzsylzyexk.jpg'
        }
    ]

    return(
        <section className="servicios">
            <div className="titulo">
                <h2>Servicios</h2>
            </div>
            <div className="contenedor">
                {servicios.map((servicio, index)=>(
                    <div className="servicio" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                        <img src={servicio.img} alt=""/>
                        <h3>{servicio.nombre}</h3>
                        <p>{servicio.descripcion}</p>
                        <div><button 
                            className="btn naranja"
                            onClick={()=>{
                                setServicio(servicio.nombre)
                            }}
                        >Ver Servicio</button></div>
                    </div>
                ))}
            </div>
        </section>
    )
}