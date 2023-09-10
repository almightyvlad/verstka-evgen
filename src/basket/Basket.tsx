import './Basket.css'

export const Basket = () => {
    return (
        <div className='basket'>
                    <div className='basket-header'>
                        <div className='basket-title'>
                            Корзина
                        </div>
                        <div className='rectangle'>
                            <div className='number'>
                                4
                            </div>
                        </div>
                    </div>
                    
                    <div className='position-container'>
                            <div className='position'>
                                <div className='basket-image product1'></div>
                                <div className='info'>
                                    <div className='position-name'>Супер сырный</div>
                                    <div className='weight'>512г</div>
                                    <div className='price'>550₽</div>
                                </div>
                                <div className='counter'>
                                    <div className='minus'>-</div>
                                    <div className='count'>1</div>
                                    <div className='plus'>+</div>
                                </div>
                            </div>
                            <div className='position'>
                                <div className='basket-image product2'></div>
                                <div className='info'>
                                    <div className='position-name'>Картошка фри</div>
                                    <div className='weight'>180г</div>
                                    <div className='price'>245₽</div>
                                </div>
                                <div className='counter'>
                                    <div className='minus'>-</div>
                                    <div className='count'>2</div>
                                    <div className='plus'>+</div>
                                </div>
                            </div>
                            <div className='position'>
                                <div className='basket-image product3'></div>
                                <div className='info'>
                                    <div className='position-name'>Жгучий хот-дог</div>
                                    <div className='weight'>245г</div>
                                    <div className='price'>239₽</div>
                                </div>
                                <div className='counter'>
                                    <div className='minus'>-</div>
                                    <div className='count'>1</div>
                                    <div className='plus'>+</div>
                                </div>
                            </div>
                    </div>

                    <div className='total-container'>
                        <div className='total'>Итого</div>
                        <div className='total-price'>1279₽</div>
                    </div>

                    <div className='ordering'></div>

                    <div className='delivery'>
                        <div className='delivery-image'></div>
                        <div className='delivery-text'>Бесплатная доставка</div>
                    </div>
        </div>
    )
}