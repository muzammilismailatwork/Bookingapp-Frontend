import React from 'react'
import "./searchItem.css"

function SearchItem() {
  return (
    <div className="searchItem">
        <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartment</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio . 1 bathroom . 21m 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="isDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Include taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem