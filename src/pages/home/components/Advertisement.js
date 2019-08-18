import React, { PureComponent } from 'react';
import { AdvertisementWrapper } from '../style';
import adPic from '../../../statics/advertisement.png';

class Advertisement extends PureComponent {
  render() {
    return (
      <AdvertisementWrapper>
        <img alt='' src={adPic}/>
        <span>广告</span>
      </AdvertisementWrapper>
    )
  }
}

export default Advertisement;