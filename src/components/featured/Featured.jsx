import "./featured.css"

export const Featured = () => {
  return (
    <>
    <div className="featured">
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1575283757534-1a1999f6f341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1YmxpbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1588993608283-7f0eda4438be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdGlufGVufDB8fDB8fHww" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>523 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://media.istockphoto.com/id/1412978781/photo/downtown-reno-skyline-nevada-with-hotels-casinos-and-surrounding-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=wQvbOEBk-WA1FE12dqGgEDUJKZ8by0jcvm10orpaob0=" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>524 properties</h2>
            </div>
        </div>
    </div>
    </>
  )
}
