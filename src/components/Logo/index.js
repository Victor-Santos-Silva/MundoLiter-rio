import './style.css'
import logo from '../../imgs/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo}
                alt='Logo'
                className='logo-img'>
            </img>
            <p><strong>Mundo</strong>Literário</p>
        </div>
    );
}

export default Logo;