import { snacks } from '../data/assortment/snacks'
import addButton from '../img/AddButton.svg'
import './Pages.css'

export const SnacksPage = () => {
    return (
        <div>
            <div className='title'>
                Закуски
            </div>
            <div className='assortment'>
                
                {snacks.map(({id, name, price, weight, photoUrl}) => (
                    <div className='card' key={id}>
                    <div className='photos'>
                        <img src={photoUrl} />
                    </div>
                    <div className='assortment-name'>{name}</div>
                    <div className='assortment-price'>{price}</div>
                    <div className='assortment-weight'>{weight}</div>
                    <div className='add-button'>
                        <img src={addButton} />
                    </div>
                </div>
                ))}

            </div>
        </div>
    )
}