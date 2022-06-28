<template>
  <div>
      <h1>{{msg}}</h1>
      <button @click="clickFn">翻转</button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg:'Hello, Vue!'
    };
  },
  methods: {
    clickFn () {
      this.msg = this.msg.split('').reverse().join('');
    }
  }
};
</script>

<style scoped>

</style>
