##### 1. `create-react-app` 显示配置文件 

```
npm run eject
```



##### 2. 引入 `antd`

```swift
npm install antd --save
npm install moment --save
npm install babel-plugin-import --save-dev
```

```csharp
"babel": {
    "presets": [
      "react-app"
    ],
  //增加下面这些代码
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css"
        }
      ]
    ]
  }
```

```
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';

return (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
```

```
// 注意：出现此错误时 可能是 react@16.13.1 react-dom@16.13.1
// Erro: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.

npm install --save react@16.13.0 react-dom@16.13.0
```



##### 3. react 楼层按需加载 @loadable/component

```
import loadable from "@loadable/component"; // react 楼层按需加载


export default [
  {
    path: "/index",
    component: loadable(() => import("@/pages/index_management/index")),
  },
  {
    path: "/hookform",
    component: loadable(() => import("@/pages/hookform_management/hookform")),
  },
];
```

```
// webpack.config 中 alias 添加这个

alias:{
    '@': path.join(__dirname, '../src') //这样，@ 就表示 项目根目录中的src 这一层路径
}
```



##### 4. `react-router-dom` 和 `react-router` 区别

`react-router` : 实现了路由的核心功能

`react-router-dom` : 基于 `react-router`，又加入了一些浏览器运行环境下的功能

// 例如 `Link` 组件，会渲染成一个 `a` 标签；

// 例如 `BrowserRouter` 组件，使用 `pushState` 和 `popState` 事件构建路由

// 例如 `HashRouter` 组件，使用 `window.location.hash` 和 `hashchange` 来构建路由

`react-router-native` : 也是基于 `react-router`，类似 `react-router-dom`，加入了在 `react-native` 运行环境下的一些功能组件

在安装 `react-router-dom` 时，不用特意去安装 `react-router`，因为 `react-router-dom` 依赖于它，会自动解析 `react-router-dom` 包中的 `package.json` 的依赖并安装，`react-router-native` 也一样

```
// 写法1
import { Switch, Route, Router, HashHistory, Link } from 'react-router-dom';

// 写法2
import { Switch, Route, Router } from 'react-router';
import { HashHistory, Link } from 'react-router-dom';

// 基于浏览器环境的开发，写法1就可以了
```

##### 

##### 5. `BrowserRouter` 和 `HashRouter` 区别

`HashRouter` 使用的是 `URL` 中的 `hash` 部分( #之后的部分 )去创建路由的

`HashRouter` 是一个大的容器，它通过 `window.location.hash` 属性控制渲染哪个组件；当开始渲染时，会使用自己的 `pathname` 属性和它肚子里的 `Route` 组件的 `path` 进行匹配，匹配上的话，就会渲染该 Route 组件对应的 `component` 组件；

`Link` 切换路由时，会通过 `this.props.history.push(path)` 来改变 `HashRouter` 中的`pathname`，驱动重新匹配路由，实现路由的切换；

`Redirect` 就干了一件事，就是改变 `HashRouter` 的 `state` ,驱动重新渲染。 

`HashRouter` 是一个继承了 `React.Component` 的类，这个类上的 `state` 包括 `location`，监听着 `hash` 的变化以驱动 `Route` 组件的重新渲染

```
// HashRouter 原理
// HashRouter将window.loacation.hash跟自己的state挂钩，通过改变自己的state驱动页面的重新渲染。

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class HashRouter extends Component {
    constructor() {
        super();
        this.state = {
            location: {
                pathname: window.location.hash.slice(1) || '/', // 当前页面的hash值
                state: {}   //保存的状态
            }
        };
    }
    
    // 定义上下文的变量类型
    static childContextTypes = {
        location: PropTypes.object,
        history: PropTypes.object
    }
    
    // 定义上下文的变量
    getChildContext() {
        return {
            location: this.state.location,
            history: {
                push: (path) => { // 就是更新 window.hash值
                    if (typeof path === 'object') {
                        let {pathname, state} = path;
                        this.setState({
                            location: {
                                ...this.state.location,
                                state // {from: '/profile'}
                            }
                        }, () => {
                            window.location.hash = pathname;
                        })
                    } else {
                        window.location.hash = path;
                    }
                }
            }
        }
    }
    
    render() {
        return this.props.children; // 渲染页面元素
    }
    
    componentDidMount() {
        window.location.hash = window.location.hash.slice(1) || '/';
        // 监听window的hash的变化，驱动页面的重新刷新
        window.addEventListener('hashchange', () => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.hash.slice(1) || '/'
                }
            });
        })
    }
}
```

`BrowserRouter` 模式下，URL 指向真实资源路径，当访问网站时，由于路径指向服务器的真实路径，但该路径下如果没有相关资源，就会出现空白页面

`BrowserRouter` 模式下，在本地开发时，没有问题，是因为 在 `webpack-dev-server` 中已经做了配置

```
webpackConfig.devServer = {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true, //gzip压缩
	historyApiFallback: true,
}
```

`Route` 根据 `path` 匹配当前路径，然后渲染 `component` 组件，如果未匹配到路径则渲染空，如果 `Route` 组件无 `path`，则可以匹配所有路径

`Switch` 对于路由匹配到多个结果时，只渲染被 `Switch` 包裹的第一个结果



























































