### Markdown文件与Vue组件的使用案例
#### Markdown 文件编写 Vue 代码的时候不需要注册这些组件（组件在./vuepress/components 目录下会在运行时自动进行全局注册），可以直接在 Markdown 中使用
***
<template>
  <div class="test-demo">
    {{ msg }}
    <hello></hello>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  }
}
</script>
***

``` js
<template>
  <div class="test-demo">
    {{ msg }}
    <hello></hello>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  }
}
</script>
```