import {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {isEmpty, isEmail} from 'validator'

export default function Footer(){

    const year = new Date().getFullYear();
    const [error, setError] = useState({
        activo: false,
        mensaje: ''
    })
    const [info, setInfo] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        descripcion: ''
    })

    function capturarInfo(e){
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    function validarInfo(e){
        e.preventDefault();

        if(isEmpty(info.nombre) || isEmpty(info.correo) || isEmpty(info.telefono) || isEmpty(info.descripcion)){
            setError({
                activo: true,
                mensaje: 'Complete todos los campos*'
            })
        } else {
            if(!isEmail(info.correo)){
                setError({
                    activo: true,
                    mensaje: 'Ingrese un correo válido*'
                })
            } else {
                enviarInfo();
            }
        }
    }

    async function enviarInfo(){
        const {data} = await axios.post('https://nikolp.com/api/contacto', info);

        if(data.error){
            setError({
                activo: true,
                mensaje: data.message
            })
        } else {
            setError({
                activo: false,
                mensaje: 'data.message'
            })
            setInfo({
                nombre: '',
                correo: '',
                telefono: '',
                descripcion: ''
            })
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Mensaje enviado exitosamente'
            })
        }
    }

    return(
        <footer>
            <h2 data-aos="fade-in">Contáctame</h2>
            <form onSubmit={validarInfo} data-aos="zoom-in">
                <div className="contenedorSmall">
                    <div className="campo">
                        <label htmlFor="nombre">Nombre:</label>
                        <input 
                            type="text" placeholder="..." name="nombre" id="nombre"
                            value={info.nombre}
                            onChange={capturarInfo}
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="correo">Correo:</label>
                        <input 
                            type="text" placeholder="..." name="correo" id="correo"
                            value={info.correo}
                            onChange={capturarInfo}
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="telefono">Número de Teléfono:</label>
                        <input 
                            type="text" placeholder="..." name="telefono" id="telefono"
                            value={info.telefono}
                            onChange={capturarInfo}
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="descripcion">Descripción del Proyecto:</label>
                        <textarea 
                            name="descripcion" id="descripcion" placeholder="..."
                            value={info.descripcion}
                            onChange={capturarInfo}
                        ></textarea>
                    </div>
                </div>
                {error.activo && <div className="contenedor"><p className="error">{error.mensaje}</p></div>}
                <div className="botonera">
                    <button type="submit" className="btn full">Enviar</button>
                </div>
            </form>
            <div className="base">
                <p>Copyright {year} © nikolp.com</p>
                {/* <div className="redes">
                    <a href="https://www.instagram.com/nikolp.id/" target="_blank"><i className="fab fa-instagram"></i></a>
                </div> */}
            </div>
        </footer>
    )
}