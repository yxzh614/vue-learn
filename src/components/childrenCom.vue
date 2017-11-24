<template>
<div>
  <p>this is children</p>
  <p>{{ count }}</p>
  <button @click="add">add</button>
  <button @click="log">log</button>
  <button @click="dec">dec</button>
</div>
</template>
<script>
export default {
  name: 'children',
  Data () {
    return {
    }
  },
  computed: {
    count () { return this.$store.state.count }
  },
  methods: {
    log () { console.log(this.$store.state.count) },
    add () { this.$store.commit('increment') },
    dec () { this.$store.commit('decrement') }
  }
}
</script>
<style>

</style>
