import React from 'react'
import "./Featured.css"
import chennai from "../../image/chennai.jpg"
import mumbai from "../../image/mumbai.jpg"
import newdelhi from "../../image/newdelhi3.jpg"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src={newdelhi} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>New Delhi</h1>
                <h2>190 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={mumbai} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>512 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={chennai} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Chennai</h1>
                <h2>313 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
