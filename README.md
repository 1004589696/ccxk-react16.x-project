##### 1. create-react-app 显示配置文件 

```
npm run eject
```



##### 2. 引入 `antd`

```swift
npm install antd
npm install babel-plugin-import
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

