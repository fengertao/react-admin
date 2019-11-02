# Sudoku Master

数独大师的 UI 由 react-admin 改造而来，在此向 react-admin 的作者表示感谢

### 依赖模块

<span style="color: rgb(184,49,47);">项目是用 create-react-app 创建的，主要还是列出新加的功能依赖包</span>

<span style="color: rgb(184,49,47);">点击名称可跳转相关网站 😄😄</span>

-   [react](https://facebook.github.io/react/)
-   [react-router](https://react-guide.github.io/react-router-cn/)(<span style="color: rgb(243,121,52);">react 路由，4.x 的版本，如果还使用 3.x 的版本，请切换分支（ps:分支不再维护）</span>)
-   [redux](https://redux.js.org/)(基础用法，但是封装了通用 action 和 reducer，demo 中主要用于权限控制（ps：目前可以用 16.x 的 context api 代替），可以简单了解下)
-   [antd](https://ant.design/index-cn)(<span style="color: rgb(243,121,52);">蚂蚁金服开源的 react ui 组件框架</span>)
-   [axios](https://github.com/mzabriskie/axios)(<span style="color: rgb(243,121,52);">http 请求模块，可用于前端任何场景，很强大 👍</span>)
-   [echarts-for-react](https://github.com/hustcc/echarts-for-react)(<span style="color: rgb(243,121,52);">可视化图表，别人基于 react 对 echarts 的封装，足够用了</span>)
-   [recharts](http://recharts.org/#/zh-CN/)(<span style="color: rgb(243,121,52);">另一个基于 react 封装的图表，个人觉得是没有 echarts 好用</span>)
-   [nprogress](https://github.com/rstacruz/nprogress)(<span style="color: rgb(243,121,52);">顶部加载条，蛮好用 👍</span>)
-   [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg)(<span style="color: rgb(243,121,52);">别人基于 react 的富文本封装，如果找到其他更好的可以替换</span>)
-   [react-draggable](https://github.com/mzabriskie/react-draggable)(<span style="color: rgb(243,121,52);">拖拽模块，找了个简单版的</span>)
-   [screenfull](https://github.com/sindresorhus/screenfull.js/)(<span style="color: rgb(243,121,52);">全屏插件</span>)
-   [photoswipe](https://github.com/dimsemenov/photoswipe)(<span style="color: rgb(243,121,52);">图片弹层查看插件，不依赖 jQuery，还是蛮好用 👍</span>)
-   [animate.css](http://daneden.me/animate)(<span style="color: rgb(243,121,52);">css 动画库</span>)
-   [react-loadable](https://github.com/jamiebuilds/react-loadable)(代码拆分，按需加载，预加载，样样都行，具体见其文档，推荐使用)
-   [redux-alita](https://github.com/yezihaohao/redux-alita) 极简的 redux2react 工具
-   其他小细节省略

### 功能模块

<span style="color: rgb(184,49,47);">备注：项目只引入了 ant-design 的部分组件，其他的组件 antd 官网有源码，可以直接复制到项目中使用，后续有时间补上全部组件。</span>

<span style="color: rgb(184,49,47);">项目使用了 antd 的自定义主题功能-->黑色，若想替换其他颜色，具体操作请查看 antd 官网</span>

<!--more-->

-   首页
    -   完整布局
    -   换肤(全局功能，暂时只实现了顶部导航的换肤，后续加上其他模块)
-   导航菜单
    -   顶部导航(菜单伸缩，全屏功能)
    -   左边菜单(增加滚动条以及适配路由的 active 操作)
-   UI 模块
    -   按钮(antd 组件)
    -   图标(antd 组件并增加彩色表情符)
    -   加载中(antd 组件并增加顶部加载条)
    -   通知提醒框(antd 组件)
    -   标签页(antd 组件)
    -   轮播图(ant 动效组件)
    -   富文本
    -   拖拽
    -   画廊
-   动画
    -   基础动画(animate.css 所有动画)
    -   动画案例
-   表格
    -   基础表格(antd 组件)
    -   高级表格(antd 组件)
    -   异步表格(数据来自掘金酱的接口)
-   表单
    -   基础表单(antd 组件)
-   图表
    -   echarts 图表
    -   recharts 图表
-   页面
    -   登录页面(包括 GitHub 第三方登录)
    -   404 页面

### 代码目录

```js
+-- build/                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- node_modules/                           ---npm下载文件目录
+-- public/
|   --- index.html							---首页入口html文件
|   --- npm.json							---echarts测试数据
|   --- weibo.json							---echarts测试数据
+-- src/                                    ---核心代码目录
|   +-- axios                               ---http请求存放目录
|   |    --- index.js
|   +-- components                          ---各式各样的组件存放目录
|   |    +-- sudoku                         ---数独组件
|   |    |    --- ...
|   |    +-- user                           ---用户管理组件
|   |    |    --- ...
|   |    --- BreadcrumbCustom.jsx           ---面包屑组件
|   |    --- HeaderCustom.jsx               ---顶部导航组件
|   |    --- Page.jsx                       ---页面容器
|   |    --- SiderCustom.jsx                ---左边菜单组件
|   +-- style                               ---项目的样式存放目录，主要采用less编写
|   +-- utils                               ---工具文件存放目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件，包括路由配置等
--- .env                                    ---启动项目自定义端口配置文件
--- .eslintrc                               ---自定义eslint配置文件，包括增加的react jsx语法限制
--- package.json
```

### 安装运行

##### 1.克隆本项目源码

##### 2.在同级目录克隆 SudokuMasterServ 源码

##### 3.yarn 或者 npm 安装相关包文件

```bash
yarn install
```

##### 4.启动项目

```bash
yarn start
```

##### 5.打包 UI 项目

```bash
# Support bash only
yarn deploy
```

##### 6.前后台一起打包

```bash
cd ../SudokuMasterServ
mvn clean install
cd target
ls -l SudokuMasterServ*.jar
```
