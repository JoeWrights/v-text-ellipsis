<template>
  <div class="docs-title">
    <h2 :class="size">{{name}}</h2>
    <div class="desc" v-if="$slots.content || desc">
      <slot name="desc">
        <div><md-reader>{{desc}}</md-reader></div>
      </slot>
    </div>
  </div>
</template>

<script>
import MdReader from './md-reader.vue'

export default {
  name: 'DocsTitle',
  components: {
    MdReader
  },
  props: {
    name: {
      type: String
    },
    desc: {
      type: String
    },
    size: {
      type: String,
      default: 'md',
      validator (s) {
        return ['sm', 'md', 'lg'].includes(s)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.docs-title{
  h2{
    color: #9BA3B6;
    &.sm{
      font-size: 18px;
    }
    &.md{
      font-size: 22px;
    }
    &.lg{
      font-size: 28px;
    }
  }
  .desc{
    color: #9BA3B6;
    font-size: 14px;
    font-weight: normal;
    padding-top: 4px;
  }
}
</style>
