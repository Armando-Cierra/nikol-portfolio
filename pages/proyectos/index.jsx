import Head from 'next/head'

import MenuEscritorio from '../../components/MenuEscritorio'
import MenuMovil from '../../components/MenuMovil'
import GaleriaProyectos from '../../components/GaleriaProyectos'
import Footer from '../../components/Footer'

export default function Proyectos(){
    return(
        <>
            <Head>
                <title>Portafolio Nikol - Proyectos</title>
                <meta name="description" content="Mis últimos trabajos como diseñadora de interiores." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
            </Head>
        
            <h1 className="hidden">Nikol Pérez | Proyectos</h1>

            <MenuMovil url="https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502529/z7mtkdozcls9brai58w8.png"/>
            <MenuEscritorio url="https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502529/z7mtkdozcls9brai58w8.png"/>
            <GaleriaProyectos/>
            <Footer/>
        </>
    )
}