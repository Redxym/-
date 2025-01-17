import styled from 'styled-components';

export const DetailWrapper =styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

/*详情标题部分*/
export const Header = styled.div`
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: 700;
`;

export const Content = styled.div`
  color: #2f2f2f;
  img {
    width: 100%
  }
  p {
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
  b {
    font-weight: 700;
  }

`;