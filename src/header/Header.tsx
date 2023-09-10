import './Header.css'
import Logo from '../img/Logo.svg'
import LogoKitchen from '../img/LogoKitchen.svg'
import Burger from '../img/Burger.svg'
 
export const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-background'>
                <div className='logo-container'>
                    <div className='logo'>
                        <img src={Logo} />
                    </div>
                    <div className='logo-kitchen'>
                        <img src={LogoKitchen} />
                    </div>
                </div>
                <div className='content'>
                    <div className='burger-container'>
                        <div className='burger'>
                            <img src={Burger} />
                        </div>
                    </div>
                    <div className='text-container'>
                        <div className='text'>Только самые</div> 
                        <div className='text' style={{color: '#FF5C00'}}>сочные бургеры!</div>
                        <div className='text-small-container'>
                            <div className='text-small'>Бесплатная доставка от</div>
                            <div className='text-small header-price'>599₽</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}