import {useEffect} from 'react'

export default function Lightbox({servicio, setServicio}){

    useEffect(()=>{
        document.addEventListener('keydown', salirServicio);
    },[])

    function salirServicio(e){
        e.keyCode === 27 && setServicio(null)
    }

    const videos = [
        {
            nombre: 'Diseño Arquitectónico',
            video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/AOYJrQMJnu0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        }, {
            nombre: 'Diseño Interior y Mobiliario a la Medida',
            video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/HNu_OuuZ9HY?si=jaNCZ-ntUDtDDv5_" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        }, {
            nombre: 'Visualizacion 3D',
            video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/KV8ol4QPZi8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        }
    ]

    if(servicio != null){
        return(
            <section className="lightbox" >
                {videos.map((video, index)=>{
                    if(video.nombre === servicio){
                        return <div key={index} className="caja">
                            <h2 key={index}>{video.nombre}</h2>
                            <div dangerouslySetInnerHTML={{__html: video.video}}></div>
                        </div>
                    }
                })}
                <button className="btn naranja" onClick={()=>{setServicio(null)}}>Regresar</button>
            </section>
        )
    } else {
        return null
    }
}