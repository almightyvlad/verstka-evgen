import { Basket } from '../basket/Basket'
import { Categories } from '../categories/Categories'
import { Routes, Route } from 'react-router-dom'
import { BurgersPage } from '../pages/BurgersPage'
import { SnacksPage } from '../pages/SnacksPage'
import { HotdogsPage } from '../pages/HotdogsPage'
import { ComboPage } from '../pages/ComboPage'
import { ShaurmaPage } from '../pages/ShaurmaPege'
import { WokPage } from '../pages/WokPage'
import { DessertPage } from '../pages/DessertPage'
import { PizzaPage } from '../pages/PizzaPage'
import { SaucesPage } from '../pages/SaucesPage'
import './Main.css'

export const Main = () => {
    return (
        <div className='main-container'>

            <Categories />

            <div className='main-content'>
                
                <Basket />
                
                <Routes>
                    <Route path='/' element={<BurgersPage />} />
                    <Route path='/burgers' element={<BurgersPage />} />
                    <Route path='/snacks' element={<SnacksPage />} />
                    <Route path='/hotdogs' element={<HotdogsPage />} />
                    <Route path='/combo' element={<ComboPage />} />
                    <Route path='/shaurma' element={<ShaurmaPage />} />
                    <Route path='/pizza' element={<PizzaPage />} />
                    <Route path='/wok' element={<WokPage />} />
                    <Route path='/dessert' element={<DessertPage />} />
                    <Route path='/sauces' element={<SaucesPage />} />
                </Routes>
            </div>
        </div>
    )
}