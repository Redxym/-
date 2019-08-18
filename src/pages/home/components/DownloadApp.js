import React, { PureComponent } from 'react';
import { DownloadAppWrapper, DownloadInfo,DownloadTitle,DownloadDesc  } from '../style';

class DownloadApp extends PureComponent {
  render() {
    return (
      <DownloadAppWrapper>
        <img className='downloadCode' alt='' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'/>
        <DownloadInfo>
          <DownloadTitle>
            下载手机简书APP
            <i className="iconfont">&#xe616;</i>
          </DownloadTitle>
          <DownloadDesc>随时随地发现和创作内容</DownloadDesc>
        </DownloadInfo>
      </DownloadAppWrapper>
    )
  }
}

export default DownloadApp;