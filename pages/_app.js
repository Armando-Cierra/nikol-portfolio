import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    AOS.init();
  },[])

  return <Component {...pageProps} />
}

export default MyApp
