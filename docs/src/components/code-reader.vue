<template>
  <div>
    <code-block
      :type="type"
      :readOnly="readOnly"
      :code="code"
      :theme="theme">
    </code-block>
  </div>
</template>

<script>
import CodeBlock from './code-block.vue'

export default {
  name: 'CodeReader',
  components: {
    CodeBlock
  },
  props: {
    type: {
      type: String,
      default: 'vue'
    },
    file: {
      type: String,
      required: true
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'monokai'
    }
  },
  data () {
    return {
      code: ''
    }
  },
  watch: {
    file: {
      async handler () {
        const { default: data } = await import(
          /* webpackChunkName: "[request]" */
          `!!raw-loader!../demos/${this.file}`
        )
        this.code = data
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
