import {createGlobalStyle} from 'styled-components'
import ttf from '../iconfont/iconfont.ttf'
import woff from '../iconfont/iconfont.woff'
import woff2 from '../iconfont/iconfont.woff2'


export const IconfontStyled = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 2544411 */
  src: url('${woff2}?t=1620824749901') format('woff2'),
       url('${woff}?t=1620824749901') format('woff'),
       url('${ttf}?t=1620824749901') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-49:before {
  content: "\\e631";
}

.icon-Aa:before {
  content: "\\e636";
}

.icon-line-quillpenyumaobi:before {
  content: "\\e6eb";
}
`


