import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/categories'
import './Categories.css'

export const Categories = () => {
  const [activeId, setActiveId] = useState(1)

  const onClick = (id: number) => {
    setActiveId(id)
  }

  return (
    <div className='categories'>
      {categories.map(({pageUrl, id, title, iconUrl}) => (
        <Link to={pageUrl} key={id} className='link'>
          <div className={activeId === id ? 'activeCategory' : 'category'} onClick={() => onClick(id)}>
            <div className='image'>
              <img src={iconUrl} />
            </div>
            <div className='text-categories'>{title}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

