import React, { PureComponent } from 'react';
import {
  WriterWrapper,
  RecommendWriterTitle,
  WriterWitch,
  WriterList,
  WriterItem,
  WriterPic,
  FollowWriter,
  WriterInfo,
  WriterName,
  WriterDecs,
  MoreWriter,
} from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent {
  render() {
    const { writerList } = this.props;
    return (
      <WriterWrapper>
        <RecommendWriterTitle>
          推荐作者
          <WriterWitch
            onClick={() => {}}
          >
            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xeaf4;</i>换一批
          </WriterWitch>
        </RecommendWriterTitle>
        <WriterList>
          {
            writerList.map((item) => {
              return (
                <WriterItem key={item.get('id')}>
                  <WriterPic alt='' src={item.get('imgUrl')}/>
                  <FollowWriter>
                    <i className="iconfont">&#xe61c;</i>关注
                  </FollowWriter>
                  <WriterInfo>
                    <WriterName>{item.get('writerName')}</WriterName>
                    <WriterDecs>{item.get('writerDesc')}</WriterDecs>
                  </WriterInfo>
                </WriterItem>
              )
            })
          }
        </WriterList>
        <MoreWriter>
          查看更多<i className="iconfont">&#xe616;</i>
        </MoreWriter>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  writerList: state.getIn(['home', 'writerList'])
});

export default connect(mapState, null)(Writer);