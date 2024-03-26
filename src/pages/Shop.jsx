import React from 'react'
import { Hero } from '../comps/Hero/Hero'
import Popular from '../comps/Popular/Popular'
import Offers from '../comps/Offers/Offers'
import NewCollections from '../comps/NewCollections/NewCollections' 
import NewsLetter from '../comps/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}
