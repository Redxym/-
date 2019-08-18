import React from 'react';
import {CSSTransition} from 'react-transition-group';

/* 定义参数类型 */

/* 轮播图片组件 */
function CarouselImage(props) {
  let {imageSrc, currentIndex, enterDelay, leaveDelay, name, component} = props;

  return (
    <ul className="carousel-image">
      <CSSTransition
        component={component}
        transitionName={name}
        transitionEnterTimeout={enterDelay}
        transitionLeaveTimeout={leaveDelay}
        className={name}
      >
        <img
          src={imageSrc[currentIndex]}
          key={imageSrc[currentIndex]}
        />
      </CSSTransition>
    </ul>
  );
}

export default CarouselImage;