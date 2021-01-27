<template>
  <svg>
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
const importAll = context => context.keys().map(context)
const req = require.context('@examples/assets/icons', false, /\.svg$/)
importAll(req)

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
