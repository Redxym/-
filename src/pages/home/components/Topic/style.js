/*轮播图模块*/
import styled from "styled-components";

export const TopicWrapper = styled.div`
  width: 625px;
  height: 270px;
  margin-bottom: 35px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  .carousel-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
      .carousel-image-item {
        position: relative;
        width: 100%;
        height: 100%;
          .carousel-image-item-enter {
            position: absolute;
            opacity: 0.01;
            &.carousel-image-item-enter-active {
              opacity: 1;
              transition: 1.5s opacity ease-in-out;
            }
          }
          .carousel-image-item-leave {
            position: absolute;
            opacity: 1;
            &.carousel-image-item-leave-active {
              opacity: 0.01;
              transition: 1.5s opacity ease-in-out;
            }
          }
      }
  }
  
  .carousel-nav {
    position: absolute;
    left: 10px;
    bottom: 10px;
    .carousel-nav-item {
      list-style: none;
      float: left;
      margin-right: 5px;
      width: 15px;
      height: 15px;
      background-color: #C0C0C0;
      border-radius: 50%;
      &.carousel-nav-item-active {
        background-color: #fff;
      }
    }
  }
  
  .button-group {
    span {
      position: absolute;
      width: 40px;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.1);
      text-align: center;
      line-height:50px; 
      color: #fff;
      top: 35%;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
      }
    }
    .button-left {
      left: 0;
    }
    .button-right {
      right: 0;
    }
  } 
`;



export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 10px;
  background: #f7f7f7; 
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;