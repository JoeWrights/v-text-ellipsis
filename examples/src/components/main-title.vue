<template>
  <div class="main-title">
    <h1 class="name">{{ componentName }}</h1>
    <p class="desc">{{ desc }}</p>
    <div class="cmd">npm install --save {{ componentName }}</div>
  </div>
</template>

<script>
export default {
  name: 'MainTitle',
  props: {
    componentName: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.main-title {
  width: 100vw;
  padding: 30px 0;
  color: #fff;
  background-color: #51B883;
  text-align: center;
  .desc {
    margin-top: 30px;
  }
  .cmd {
    background: #339268;
    color: #fff;
    font-family: monospace;
    max-width: 500px;
    margin: 30px auto 12px;
    border-radius: 2px;
    padding: 12px 24px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}

h1,
h2 {
  font-weight: normal;
}
</style>
