import React from 'react'
import './NewsLetter.css'


export const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers</h1>
        <p>Subscribe to stay updated</p>
        <div>
            <input type="email" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter


