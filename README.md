# 基于vuepress搭建的开发文档

[vuepress中文网](https://www.vuepress.cn/)

官网首次安装

```
yarn add -D vuepress # npm install -D vuepress
```

# 安装

```
yarn install
```

::: warning
node > 8.0
:::

# 编写语法

## 内部链接

文档结构

```
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```

假设你现在在 foo/one.md 中：

```
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->

```

链接的重定向

VuePress 支持重定向到干净链接。如果一个链接 /foo 找不到，VuePress 会自行寻找一个可用的 /foo/ 或 /foo.html。反过来，当 /foo/ 或 /foo.html 中的一个找不到时，VuePress 也会尝试寻找另一个

## Front Matter

VuePress 提供了对 YAML front matter (opens new window) 开箱即用的支持:

```
---
title: Blogging Like a Hacker
lang: en-US
---

```

## GitHub 风格的表格

输入

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

输出

---

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

##  Emoji

输入

```
:tada: :100:
```

输出

:tada: :100:

## 目录

输入

```
[[toc]]
```

输出
[[toc]]

自定义容器

输入

```
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

```

输出

::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险
这是一个危险警告
:::

::: details 详情
这是一个详情块，在 IE / Edge 中不生效
:::


## 代码块中的语法高亮

VuePress 使用了 Prism (opens new window) 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：

输入

```
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
```

输出

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

输入

```
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
```

输出

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

## 代码块中的行高亮

输入

```
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
```

输出

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

---

除了单行以外，你也可指定多行，行数区间，或是两者都指定。
行数区间: 例如 {5-8}, {3-10}, {10-17}
多个单行: 例如 {4,7,9}
行数区间与多个单行: 例如 {4,7-13,16,23-27,40}
