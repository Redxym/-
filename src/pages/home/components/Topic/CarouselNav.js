import React from 'react';

function CarouselNav(props) {
  let {carouselNavItems, currentIndex, selectImage} = props;
  return (
    <ul className='carousel-nav'>
      {
        carouselNavItems.map((item, i) => {
          if(i === currentIndex) {
            return <li
              className="carousel-nav-item carousel-nav-item-active"
              key={i}
              onClick={()=>selectImage(i)}
            >
            </li>
          } else {
            return <li
              className="carousel-nav-item"
              key={i}
              onClick={()=>selectImage(i)}
            >
            </li>
          }
        })
      }
    </ul>
  )
}

export default CarouselNav;