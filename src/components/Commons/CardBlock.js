import React from 'react';
import Card from './Card';
import './CardBlock.css';


const CardBlock = () => {
    return (
        <div className="cardblock">
            <div className="container">
                <div className="row aling-center">
                    <div className="col-md-4">
                        <Card 
                            title='Planes para empresas'
                            body='Gestionamos tu dominio .com.ar o .com y lo mantenemos por un año, te damos:'
                            list = {[
                                '200 Mb de espacio para web',
                                '100 cuentas de correo',
                                'webmail',
                                'plantillas de diseño',
                                'asesoramiento'
                            ]}
                            imgSrc='./assets/img/ladywork.jpg'
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                            title='Servicios'
                            body='Asesoramiento, control y mantenimiento de sitios corporativos o personales.'
                            imgSrc='./assets/img/router.jpg'
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                            title='Atencion personalizada'
                            body='Siempre podes contar con nosotros para poner tu idea en marcha, comentanos tus necesidades y asignamos un profesional para que te asesore.'
                            imgSrc='./assets/img/attention.jpg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBlock;
