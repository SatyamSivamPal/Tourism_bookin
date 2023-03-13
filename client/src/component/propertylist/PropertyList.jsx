import React from 'react'
import hotel from "../../image/hotel2.jpg"
import apartment from "../../image/apartment2.jpg"
import resort from "../../image/resort2.jpeg"
import villas from "../../image/villas.jpeg"
import cabins from "../../image/cabins.jpeg"
import cottage from "../../image/cottages2.jpg"
import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className='pList'>
      <div className="pListItem">
        <img src={hotel} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>211,102 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={apartment} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>199,211 apartments</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={resort} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Resort</h1>
            <h2>59,123 resorts</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={villas} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Villas</h1>
            <h2>32,103 villas</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={cabins} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>17,120 cabins</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={cottage} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Cottages</h1>
            <h2>10,210 cottages</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
