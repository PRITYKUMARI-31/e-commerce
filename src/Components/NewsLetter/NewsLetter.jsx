import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and Stay tuned with the latest updates</p>

        <div>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
