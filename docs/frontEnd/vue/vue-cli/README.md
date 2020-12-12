---

title: 利用Vue-cli脚手架搭建一个空的Vue项目

date: 2020-12-08

sidebar: 'auto'

categories:

- Vue

tags:

- 脚手架

publish: true

---

::: tip
从头学Vue，让你从小白到自主开发的全过程
:::

<!-- more -->

## 前期准备

### 1. 因为之后会用到`npm`包管理下载的项目依赖，所以我们需上[官网](https://nodejs.org/en/)下载`node.js`并安装
### 2. 安装完`node.js`后再安装`webpack`:打开命令行工具并输入
```html
npm install webpack -g
```
### 3. 最后全局安装`vue-cli`脚手架构建工具：
```html
npm install vue-cli -g
```
<!-- more -->

## 通过vue-cli初始化项目

### 1. 利用脚手架来创建一个空vue文件：

**注意（这里的vue1是我项目名，项目名不能大写，不能使用中文）**
```html
vue init webpack vue1
```

### 2. 查看新创建的Vue项目文件：

![](https://img-blog.csdnimg.cn/20200412014431178.png)

### 3. 下载依赖:
```html
cd vue1
npm install
```

### 4. 运行项目：
```html
npm run dev
```
成功后会出现一个地址：

![](https://img-blog.csdnimg.cn/20200412014939505.png)

### 5. 在本地浏览器中输入上面的地址即可查看效果：

![](https://img-blog.csdnimg.cn/20200412015031898.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ2NjI3NzMw,size_16,color_FFFFFF,t_70)

<!-- more -->


