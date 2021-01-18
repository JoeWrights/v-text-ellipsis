<template>
  <div class="docs-view">
    <div class="view-wrap">
      <doc-title name="开始使用" size="lg"></doc-title>
      <doc-section>
        <template slot="title">简单用法</template>
        <template slot="content">
          <demo-code>
            <demo1 slot="demo"></demo1>
            <code-reader slot="code" file="demo1.vue"></code-reader>
          </demo-code>
          <demo-code>
            <demo2 slot="demo"></demo2>
            <code-reader slot="code" file="demo2.vue"></code-reader>
            <md-reader slot="desc">通过`height`属性控制显示多少行省略</md-reader>
          </demo-code>
          <demo-code>
            <demo3 slot="demo"></demo3>
            <code-reader slot="code" file="demo3.vue"></code-reader>
            <md-reader slot="desc">通过`after`插槽控制展开收起</md-reader>
          </demo-code>
        </template>
      </doc-section>
    </div>
  </div>
</template>

<script>
import DocTitle from './doc-title.vue'
import DocSection from './doc-section.vue'
import DemoCode from './demo-code.vue'
import MdReader from './md-reader.vue'
import CodeReader from './code-reader.vue'
import Demo1 from '../demos/demo1.vue'
import Demo2 from '../demos/demo2.vue'
import Demo3 from '../demos/demo3.vue'

export default {
  name: 'ComponentPage',
  components: {
    Demo1,
    Demo2,
    Demo3,
    DocTitle,
    DocSection,
    DemoCode,
    MdReader,
    CodeReader
  }
}
</script>

<style lang="scss" scoped>
.docs-view{
  height: 100%;
  overflow: auto;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  .view-wrap{
    margin: 0 auto;
    @media (max-width: 768px) {
      width: calc(100% - 40px);
    }
    @media (min-width: 768px) {
      width: calc(100% - 120px);
    }
    @media (min-width: 1100px) {
      width: calc(100% - 300px);
    }
    color: #5e6d82;
  }
}
</style>
