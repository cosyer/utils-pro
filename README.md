## 一些常用的 JavaScript 工具函数

[![](https://img.shields.io/npm/v/utils-pro.svg?style=flat)](https://npmjs.com/package/utils-pro)
[![](https://img.shields.io/npm/dm/utils-pro.svg?style=flat)](https://npmjs.com/package/utils-pro)
[![](https://img.shields.io/bundlephobia/minzip/utils-pro.svg?style=flat)](https://bundlephobia.com/result?p=utils-pro)

`utils-pro` 提供常用的一些工具函数和方法

### 引入方式
1. `utils-pro`支持script标签引入，挂载在全局的window.rook变量下。
```js
<script type="text/javascript" src="rook.min.js"></script>
<script>
    var OS = rook.deviceUtils.getOS();
</script>
```
2. **npm 安装**
```js
npm install utils-pro -S
```

通过es6的import语法
```js
import rook from 'utils-pro';
rook.deviceUtils.getOS();

import deviceUtils from 'utils-pro';
deviceUtils.getOS();

import { getOS } from 'utils-pro/deviceUtils';
getOS();
```

通过commonjs规范引入
```js
const rook =  require('utils-pro');

const deviceUtils = require('utils-pro/');

const { getOS } = require("utils-pro/deviceUtils");
```

> 推荐使用方法
```js
import { getOS } from 'utils-pro/deviceUtils';
import deviceUtils from 'utils-pro';
```

不需要完整引入所有函数，只引入需要使用的方法即可。

- v1.1.0 变更不采用扁平化结构 
    - 扁平化结构请参考 flat 分支。
    - [扁平化结构api文档](https://cosyer.github.io/utils-pro/)

to do

- [ ] travis-ci持续集成
- [ ] 测试用例/覆盖率