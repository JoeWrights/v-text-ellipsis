<template>
  <div id="app">
    <h1>v-text-ellipsis</h1>
    <p>vue文本溢出省略组件</p>
    <div class="text1">
      <v-text-ellipsis :text="text" :height="60"></v-text-ellipsis>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      text: '《JoJo的奇妙冒险》（日语：ジョジョの奇妙な冒険）是日本漫画家荒木飞吕彦的少年漫画作品。简称JoJo。自1987年起至2004年在集英社的少年漫画杂志《少年JUMP周刊》连载（1987年－2004年）第一部至第六部，2005年之后于集英社的青年向漫画杂志《Ultra Jump》连载。目前连载至第八部，并有大量的外传。故事描述英国贵族乔斯达家族（JoJo）与吸血鬼迪奥（DIO）及其后继者间长达百年以上的对决，全篇作品以“歌颂人类”为主题，故事中有着伙伴之间的羁绊、与强大的敌人战斗等少年漫画的经典元素，由其独特的画风和表现形式构成不可思议的独特世界。单行本目前发行至128册，是集英社内集数次多的作品。台湾无版权时期东立出版社译为《强人阵线》（也译为《魔域冒险》），后来大然出版社取得授权译为《JoJo冒险野郎》，之后东立出版社取得版权改回与日文相同的《JoJo的奇妙冒险》。该系列作品至2016年全系列累计发行量超过一亿册，改编作品横跨了多种媒体，在1993年改编成OVA，在2007年改编成电影版，2012年推出电视动画于2017年推出真人电影。另外还包括数款电子游戏、卡牌游戏、可动模型等，衍生商品的领域广泛，包括手表、领带、耳机、智能手机、食品等。'
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

.text1 {
  width: 70%;
  margin: 0 auto;
}
</style>
