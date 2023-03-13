import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='footer'>
            <div className='socials'>
                <img src='/imagens/fb.png' alt='' />
                <img src='/imagens/tw.png' alt='' />
                <img src='/imagens/ig.png' alt='' />
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png' alt='organo' />
            </div>
            <div className='texto'>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape