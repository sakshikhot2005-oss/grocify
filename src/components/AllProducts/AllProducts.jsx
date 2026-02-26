import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgAll from '../../assets/Grocery Website Assets/all-banner.jpg'
function AllProducts() {
    return (
        <div>
            <CategoryPage title="All Products" bgImage={BgAll} categories={['All']} />
        </div>
    )
}

export default AllProducts