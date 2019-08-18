import { createGlobalStyle  } from 'styled-components';

export const GlobalStyleIcon = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1565494542070'); /* IE9 */
  src: url('./iconfont.eot?t=1565494542070#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1565494542070') format('woff'),
  url('./iconfont.ttf?t=1565494542070') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1565494542070#iconfont') format('svg'); /* iOS 4.1- */
};

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
};

`;