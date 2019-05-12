## 一些常用的 JavaScript 工具函数

`utils-pro` 提供常用的一些工具函数和方法

### 引入方式
1. `utils-pro`支持script标签引入，挂载在全局的window.rook变量下。
```js
<script type="text/javascript" src="rook.min.js"></script>
<script>
    var OS = rook.getOS();
</script>
```
2. **npm 安装**
```js
npm install utils-pro -S
```

通过es6的import语法
```js
import rook from 'utils-pro';
import { getOS } from 'utils-pro';
import getOS from 'utils-pro/lib/getOS';
```

通过commonjs规范引入
```js
const rook =  require('utils-pro');
const { getOS } = require("utils-pro");
const getOS = require('utils-pro/lib/getOS');
```

> 推荐使用方法
```js
import { getOS } from 'utils-pro';
import getOS from 'utils-pro/lib/getOS';
```

不需要完整引入所有函数，只引入需要使用的方法即可。

[API文档](https://cosyer.github.io/utils-pro/)

to do

[![](https://img.shields.io/npm/v/utils-pro.svg?style=flat)](https://npmjs.com/package/utils-pro)
[![](https://img.shields.io/npm/dm/utils-pro.svg?style=flat)](https://npmjs.com/package/utils-pro)
[![](https://img.shields.io/bundlephobia/minzip/utils-pro.svg?style=flat)](https://bundlephobia.com/result?p=utils-pro)


- [ ] travis-ci持续集成
- [ ] 测试用例/覆盖率
- [x] [接口文档(jsdoc)](https://cosyer.github.io/utils-pro/)