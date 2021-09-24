# blog

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目总结
  blog项目分为两个板块，展示博客和写博客，其实就是将博客数据从数据库请求过来展示，以及向数据库里插入数据，这里将将数据作为一个对象，一起提交过去。同时请求回来的也是对象，有的方法对象里是没有的
#项目总结  因此要将请求回来的数据转换为数组，然后还要添加id，这样后面的博客详情才能知道是那一条blog。处理方式是将返回的数据data 首先data.json（）,然后再创建一个空的数组，然后遍历对象data，为data[key]添加一个id属性，将key值赋值为data[key].id,这样每一个data[key]中就有了id，可以根据id作为唯一索引了，然后将data[key]作为数据元素push到前面创建的空数组中。最后再将所得到的的数组给blogs
使用v-for在页面中渲染出来。
