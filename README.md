# React-Native Stylist

## 安装

```sh
yarn add @shiddong/react-native-stylist
```

或者

```sh
npm install @shiddong/react-native-stylist
```

## 使用方式

```js
import React from "react";
import { View } from "react-native";
import stylist from "@shiddong/react-native-stylist";
import styles from "./styles";

export const Comp: React.FunctionComponent = () => {
  return (
    <View
      style={stylist([
        // styles.common, // 基本样式，暂不支持
        {
          style: styles.selected, // 选中样式
          use: true,
        },
        {
          style: styles.unSelected, // 未选中样式
          use: false,
        },
      ])}
    />
  );
};
```
