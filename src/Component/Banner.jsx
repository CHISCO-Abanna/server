import React from 'react';


function Banner() {
  return (
      <div className="containner-box">
        <div className="banner grid grid-cols-1 items-center uppercase gap-3 md:grid-cols-2 bg-purple-200 p-5">
          <div className="banner-img">
          <img src="/img/0810-trends-varsity.webp" className="w-full" alt="" />
          </div>
        <div className="banner-text space-y-3 font-serif block">
          <h1>Welcome t0 J24 stores</h1>
          <div className='w-48 h-1 bg-lime-500'></div>
          <h1>Get Your designer shoes here...</h1>
        </div>
      </div>
      </div>

  )
}

export default Banner;












// <div>
//       <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
//       <Carousel>
//         <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="..." />
//         <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80" alt="..." />
//         <img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg" alt="..." />
//         <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL2ZyZWVpbWFnZXNjb21wYW55X2FfcGhvdG9fb2ZfaGFuZ2luZ19nbG93aW5nX3JhbWFkYW5fY2VsZWJyYXRpb180YjQ4YWY1NC1jNzE5LTRlMjQtOGYwNy1jN2NjMTI1NWY5NjVfMS5qcGc.jpg" alt="..." />
//         <img src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?b=1&s=612x612&w=0&k=20&c=8xbZvMyptEaqMW46diKakhVgkPkAzBi5l7J1yveCZFk=" alt="..." />
//       </Carousel>
//       <Carousel indicators={false}>
//         <img src="https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg" alt="..." />
//         <img src="https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg" alt="..." />
//         <img src="https://media.post.rvohealth.io/wp-content/uploads/2019/06/Female_Woods_hike_732x549-thumbnail.jpg" alt="..." />
//         <img src="https://thumbs.dreamstime.com/b/wooden-pathway-lush-green-tropical-jungle-sunlight-serene-nature-walk-concept-wooden-pathway-lush-green-322646384.jpg" alt="..." />
//         <img src="https://www.aaronreedphotography.com/images/xl/Sweet-Dreams-2022.jpg" alt="..." />
//       </Carousel>
//     </div>