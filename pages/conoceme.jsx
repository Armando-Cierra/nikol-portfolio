import Head from 'next/head'

import MenuEscritorio from '../components/MenuEscritorio'
import MenuMovil from '../components/MenuMovil'
import Footer from '../components/Footer'

export default function Conoceme(){
    return(
        <>
            <Head>
                <title>Portafolio Nikol - Conóceme</title>
                <meta name="description" content="Soy Nikol Pérez Me defino como una persona que se reta constantemente, admiro lo
                    que me rodea y como funciona. Elegí el diseño de interiores porque es..." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
            </Head>

            <h1 className="hidden">Nikol Pérez | Conóceme</h1>

            <MenuMovil url="https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502529/z7mtkdozcls9brai58w8.png"/>
            <MenuEscritorio url="https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502529/z7mtkdozcls9brai58w8.png"/>
            <section className="conoceme">
                <div className="header" style={{background: "linear-gradient(to top, rgba(113, 173, 153, .4), rgba(0, 0, 0, 0)), url('https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502529/euvlkfvl0rrb3vetxdls.jpg')"}}>
                    <h2 data-aos="fade-up">Nikol Pérez</h2>
                </div>
                <div className="info">
                    <div className="contenedor">
                        <div className="texto" data-aos="zoom-in" data-aos-delay="250">
                            <h3>Conóceme</h3>
                            <p>Soy Nikol Pérez. Graduada de la carrera de Diseño de Interiores.</p>
                            <p>Me dedico al diseño residencial, comercial y diseño de mobiliario a la medida.</p>
                            <p>Puedo ayudarte en todos los aspectos relacionados con la decoración de interiores, como:</p>
                            <ul>
                                <li><p>Análisis del espacio a decorar y distribución de espacios.</p></li>
                                <li><p>Realización de proyectos de diseño.</p></li>
                                <li><p>Estilo de mobiliario más adecuado y a la medida.</p></li>
                                <li><p>Ambientes multifuncionales y espacios de almacenaje.</p></li>
                                <li><p>Realización de imágenes 3D.</p></li>
                            </ul>
                            <br />
                            <p>Mi objetivo es crear espacios acogedores y funcionales, donde el resultado emane sofistificación, cuidando cada uno de los detalles.</p>
                        </div>
                        <img src="https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502529/uc7tpk4sj7c6wmwjm8el.png" alt="" data-aos="zoom-in" data-aos-delay="250"/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}