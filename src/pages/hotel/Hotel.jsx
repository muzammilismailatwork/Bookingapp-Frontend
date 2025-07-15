import React, { useState } from 'react'
import "./hotel.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

export const Hotel = () => { 
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      src: "https://images.unsplash.com/photo-1575283757534-1a1999f6f341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1YmxpbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      src: "https://images.unsplash.com/photo-1588993608283-7f0eda4438be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdGlufGVufDB8fDB8fHww"
    },
    {
      src: "https://media.istockphoto.com/id/1412978781/photo/downtown-reno-skyline-nevada-with-hotels-casinos-and-surrounding-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=wQvbOEBk-WA1FE12dqGgEDUJKZ8by0jcvm10orpaob0="
    },
    {
      src: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      src: "https://media.istockphoto.com/id/1412978781/photo/downtown-reno-skyline-nevada-with-hotels-casinos-and-surrounding-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=wQvbOEBk-WA1FE12dqGgEDUJKZ8by0jcvm10orpaob0="
    },
  ];

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true)
  }
  const handleMove = (direction)=>{
    let newSlideNumber;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotal</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 ar this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className='hotelTitile'>Stay in the heart of Krakow</h1>
              <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur vitae nulla ullam. Corrupti atque mollitia voluptatibus repellendus minus saepe? Mollitia neque voluptate tempore, beatae illum quis qui quibusdam! Impedit.
              Praesentium nobis impedit, consectetur a ad ipsum nihil ipsa pariatur reiciendis optio? Ipsum assumenda, dicta quibusdam cum quis animi ipsa excepturi obcaecati fuga illum tempore nulla consequuntur vitae nihil voluptates?
              Optio dolorem voluptatum quos nam repellat qui cumque necessitatibus quasi recusandae ipsum autem, iste mollitia vel in suscipit repudiandae deserunt sequi molestiae blanditiis eius eos non hic expedita harum! Minima!
              Blanditiis iure dolorum maxime, quas praesentium aliquam, tenetur expedita quisquam ratione necessitatibus laudantium ea fuga illo eaque possimus odit sit? Ullam reiciendis libero ratione dignissimos repellendus beatae magnam omnis ad.
              Quae alias enim facere dolorum commodi culpa rem ea nulla, id illum dolor ipsam mollitia illo fuga doloribus aperiam molestiae a necessitatibus reprehenderit omnis, sunt suscipit autem eius at? Praesentium.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
            <MailList />
            <Footer />
      </div>
    </div>
  )
}
