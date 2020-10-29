import React from 'react'
import CardBlock from '../Commons/CardBlock'
import Content from '../Commons/Content'

const HomeView = () => {
    return (
        <div className="container-md mt-3 animate__animated animate__fadeIn">
            <Content 
                title = 'Nos preocupamos por tu presencia en INTERNET'
                content = 'El nuevo milenio trae nuevas opciones para dar a conocer tu negocio o simplemente para darte a conocer al mundo. Todo es importante. En algun lugar de este mundo, alguien piensa lo mismo, y te necesita. Le interesa compartir conocimientos o experiencias profesionales o simplemente saber que no esta solo en el mundo de la información. Nosotros te ayudamos a dar ese gran paso.'
                alingLeft = { false }
            />
            <CardBlock />
        </div>
    )
}

export default HomeView;
