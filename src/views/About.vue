<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="fetchData">请求数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    fetchData() {
      this.$axios.get('data')
        .then(res => {
          console.log(res.data)
        })
    }
  },
}
</script>


<style lang="scss" scoped>
  .about {
    background: linear-gradient(red,yellow,blue);
    h1 {
      color: red;
    }
  }
</style>

