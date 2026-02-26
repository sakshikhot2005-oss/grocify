import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgDairy from '../../assets/Grocery Website Assets/dairy-banner.jpg'
function Dairy() {
  return (
    <div>
        <CategoryPage title="Dairy & Eggs" bgImage={BgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy