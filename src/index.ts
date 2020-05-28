/*
 * @File: stylist
 * @Description: 转换ReactNative的样式列表
 * @Author: shidongdong02 <shidongdong02@meituan.com>
 * @Date: 2020-05-27 14:26:18
 * @LastEditors: shidongong02
 * @LastEditTime: 2020-05-27 14:41:22
 * @FilePath: /react-native-stylist/src/index.ts
 */

export interface IStyle<T> {
  style: T;
  use: boolean;
}

export function stylist<T>(styles: IStyle<T>[] = []): T[] {
  return styles
    .filter((s: IStyle<T>): boolean => !!s.use)
    .map((s: IStyle<T>) => s.style);
}

export default stylist;
