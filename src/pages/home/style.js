import styled from 'styled-components';

export const HomeWrapper =styled.div`
  width: 960px;
  margin: 0 auto;
  height: auto;
`;
/*首页左边*/
export const HomeLeft =styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
/*首页右边*/
export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;


/*首页列表模块*/
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 458px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;
/*列表阅读更多模块*/
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

/*首页右边推荐模块*/
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;
/*简书手机app下载模块*/
export const DownloadAppWrapper = styled.div`
  width: 280px;
  padding: 10px 22px
  margin-bottom: 30px;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  cursor: pointer;
  .downloadCode {
    display: inline-block;
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
  }
`;
export const DownloadInfo = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 7px
`;

export const DownloadTitle = styled.div`
  font-size: 15px;
  color: #333;
`;

export const DownloadDesc = styled.div`
  margin-top: 4px;
  font-size: 13px;
  color: #999;
`;

/*右侧广告模块*/
export const AdvertisementWrapper = styled.div`
  position: relative;
  height: 160px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 4px;
  img{
     width: 100%;
     height: 100%;
     border-radius: 4px;
  }
  span {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0 5px;
    background: #000;
    border-radius: 0 0 4px 0;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    opacity: 0.7;
  }
`;

/*作者推荐模块*/
export const WriterWrapper = styled.div`
  width: 280px;
`;

export const RecommendWriterTitle = styled.div`
 line-height: 20px;
 font-size: 14px;
 color: #969696;
`;

export const WriterWitch = styled.span`
 float: right;
 font-size: 14px;
 cursor: pointer;
 .spin {
   display: block;
   float: left;
   font-size: 16px;
   margin-right: 2px;
   transition: all .5s ease-in;
   transform-origin: center center;
 }
`;

export  const WriterList = styled.ul`
  display: block;
  margin: 0 0 20px;
  list-style: none;
`;

export  const WriterItem = styled.li`
  display: block;
  margin-top: 15px;
  position: relative;
`;

/*作家头像*/
export const WriterPic = styled.img`
  display: inline-block;
  width: 48px;
  height: 48px;
  margin-right: 10px;
  vertical-align: top;
  border: 1px solid #ddd;
  border-radius: 50%;
`;
/*关注作家*/
export const FollowWriter = styled.div`
  float: right;
  margin-top: 5px;
  font-size: 13px;
  color: #42c02e;
`;

export const WriterInfo = styled.div`
  position: absolute;
  top: 5px;
  left: 60px;
`;
export const WriterName = styled.span`
  font-size: 14px;
  line-height: 25px;
`;

export const WriterDecs = styled.p`
  margin-top: 2px;
  font-size: 12px;
  color: #969696;
`;

/*查看更多作家*/
export const MoreWriter = styled.button`
  width: 100%;
  padding: 7px 7px 7px 12px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
`;

/*返回顶部*/
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`;
