import Link from 'next/link'
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export default function Slideshow(){

    const urlImgs = [
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1710047175/slideshow/jy2ljp7peuqcetu4inqg.png',
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1710044803/slideshow/chx9uduevsstqsoi8xxo.png',
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502724/slideshow/d943lsdqj9fwvlgvskwr.jpg',
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502726/slideshow/kk60lohau2k5a8qni3sl.jpg',
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502728/slideshow/h3umxewd7qub1elfkzre.jpg',
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502725/slideshow/r1fdq12zjkz3yibytowi.jpg',
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502725/slideshow/quaon2lgr2csddbd2hie.jpg',
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502725/slideshow/c0kzqyndpfryjakkyhzf.jpg',
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502729/slideshow/m3xqftasll76plcmgl9i.jpg',
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502728/slideshow/m1kmtchggt2yanerqgwd.jpg',
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502727/slideshow/ftcypx45bc0iibo167fa.jpg',
        'https://res.cloudinary.com/dcmtu9ysg/image/upload/v1709502730/slideshow/cwbakvngkwukq00xqtke.jpg'
    ];

    return(
        <header>
            <div className="slideshow" data-aos="zoom-in">
                <Swiper
                    effect="fade"
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    loop
                    speed = {1000}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                >
                    {urlImgs.map((url, index)=>(
                        <SwiperSlide key={index}>
                            <div className="imagen" style={{background: `url('${url}')`}}></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="contenedorSmall" data-aos="fade-up" data-aos-delay="250">
                <p>Descubre mis últimos trabajos y encuentra el diseño ideal.</p>
                <Link href="/proyectos"><button className="btn">Ver Todos los Proyectos</button></Link>
            </div>
        </header>
    )
}