<template>
  <div>
    <p>is p</p>
    <router-view></router-view>
    <p>234</p>
    <div>User :{{ $route.params.id }}</div>
    <button @click="goMy">goMy</button>
      <router-link to="/">Go to index</router-link>
      <router-link v-if="isRoot" :to="$route.params.id+'/store'">show children router view</router-link>
  </div>
</template>
<script>
export default {
  name: 'myComponent',
  data () {
    return {
      msg: 'wodezujian'
    }
  },
  methods: {
    goMy () { console.log(this.$router) }
  },
  computed: {
    isRoot () { return this.$route.fullPath === '/my/0' }
  }
}
</script>


<style>

</style>

