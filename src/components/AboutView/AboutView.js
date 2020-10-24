import React from 'react'
import Content from '../Commons//Content';

const AboutView = () => {
    return (
        <div className="container-md mt-3 animate__animated animate__fadeIn">
            <h1>About us</h1>
            <Content
                title = 'Titulo de ejemplo'
                content = 'La única verdad es la realidad Yo llevo en mis oídos la más maravillosa música, que, para mí, es la palabra del pueblo argentino La verdadera democracia es aquella donde el gobierno hace lo que el pueblo quiere y defiende un solo interés: el del pueblo No hay peor cosa que un bruto con inquietudes El Justicialismo ha dejado de ser la causa de un hombre para ser la causa del pueblo, y por ella sí valdría la pena darlo todo, incluso la vida La verdadera democracia es aquella donde el gobierno hace lo que el pueblo quiere y defiende un solo interés: el del pueblo El Justicialismo ha dejado de ser la causa de un hombre para ser la causa del pueblo, y por ella sí valdría la pena darlo todo, incluso la vida No hay peor cosa que un bruto con inquietudes El Justicialismo necesita apóstoles y para ser apóstol hay que estar dispuesto a ser héroe, y solamente los fanáticos de amor por una causa son capaces de morir por un ideal Gobernar es fácil, lo difícil es conducir'
                alingLeft = { false }
            />
            <Content 
                title = 'Titulo de ejemplo'
                content = 'La única verdad es la realidad Yo llevo en mis oídos la más maravillosa música, que, para mí, es la palabra del pueblo argentino La verdadera democracia es aquella donde el gobierno hace lo que el pueblo quiere y defiende un solo interés: el del pueblo No hay peor cosa que un bruto con inquietudes El Justicialismo ha dejado de ser la causa de un hombre para ser la causa del pueblo, y por ella sí valdría la pena darlo todo, incluso la vida La verdadera democracia es aquella donde el gobierno hace lo que el pueblo quiere y defiende un solo interés: el del pueblo El Justicialismo ha dejado de ser la causa de un hombre para ser la causa del pueblo, y por ella sí valdría la pena darlo todo, incluso la vida No hay peor cosa que un bruto con inquietudes El Justicialismo necesita apóstoles y para ser apóstol hay que estar dispuesto a ser héroe, y solamente los fanáticos de amor por una causa son capaces de morir por un ideal Gobernar es fácil, lo difícil es conducir'
                alingLeft = { true }
            />
        </div>
    )
}

export default AboutView;
