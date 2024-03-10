import {useState} from 'react'
import Head from 'next/head'

import MenuMovil from '../components/MenuMovil'
import MenuEscritorio from '../components/MenuEscritorio'
import Lightbox from '../components/Lightbox'
import Slideshow from '../components/Inicio/Slideshow'
import Conoceme from '../components/Inicio/Conoceme'
import Servicios from '../components/Inicio/Servicios'
import Footer from '../components/Footer'

export default function Home() {

  const [servicio, setServicio] = useState(null)

  function actualizarServicio(e){
    setServicio(e)
  }

  return (
    <>
      <Head>
        <title>Portafolio Nikol - Inicio</title>
        <meta name="description" content="Diseñadora de interiores especializado en diseño residencial, comercial." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
      </Head>

      <h1 className="hidden">Nikol Pérez | Interiorismo</h1>

      <MenuMovil url="https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502529/z7mtkdozcls9brai58w8.png"/>
      <MenuEscritorio url="https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502529/z7mtkdozcls9brai58w8.png"/>
      <Lightbox servicio={servicio} setServicio={actualizarServicio} />
      <Slideshow/>
      <Conoceme/>
      <Servicios setServicio={actualizarServicio}/>
      <Footer/>
    </>
  )
}
