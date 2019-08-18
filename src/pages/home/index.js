import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic/index';
import List from './components/List';
import Recommend from './components/Recommend';
import DownloadApp from './components/DownloadApp';
import Writer from './components/Writer';
import Advertisement from './components/Advertisement';
import { actionCreators } from './store';
import { BackTop } from "./style";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <DownloadApp />
          <Advertisement />
          <Writer />
        </HomeRight>
        {this.props.showScroll ?
          <BackTop onClick={this.handleScrollTop.bind(this)}><i className="iconfont">&#xeaf4;</i></BackTop>
          : null
        }
      </HomeWrapper>
    )
  }

  handleScrollTop() {
    window.scrollTo(0,0)
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow(e) {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});

export default connect(mapState, mapDispatch)(Home);