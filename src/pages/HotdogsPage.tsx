import { hotdogs } from '../data/assortment/hotdogs'
import addButton from '../img/AddButton.svg'
import './Pages.css'

export const HotdogsPage = () => {
    return (
        <div>
            <div className='title'>
                Хот-доги
            </div>
            <div className='assortment'>
                {hotdogs.map(({id, name, price, weight, photoUrl}) => (
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