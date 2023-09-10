import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='logo-footer'></div>
                <div className='prod'>© YouMeal, 2022</div>
                <div className='design'>Design: Anastasia Ilina</div>
            </div>

            <div className='phone-container'>
                <div className='phone-title'>Номер для заказа</div>
                
                <div className='phone-info'>
                    <div className='phone-icon'></div>
                    <div className='phone-number'>+7(930)833-38-11</div>
                </div>
            </div>

            <div className='networks'>
                <div className='networks-title'>Мы в соцсетях</div>

                <div className='networks-container'>
                    <div className='vk'></div>
                    <div className='telegram'></div>
                </div>
            </div>
        </div>

    )
}