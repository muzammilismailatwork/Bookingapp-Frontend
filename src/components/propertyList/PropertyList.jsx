import React from 'react'
import "./propertyList.css"

function PropertyList() {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fHww" alt="" className='pListImg'/>
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1432297984334-707d34c4163a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D" alt="" className='pListImg'/>
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D" alt="" className='pListImg'/>
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGFzfGVufDB8fDB8fHww" alt="" className='pListImg'/>
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://plus.unsplash.com/premium_photo-1686090449194-04ac2af9f758?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FiaW5zfGVufDB8fDB8fHww" alt="" className='pListImg'/>
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList