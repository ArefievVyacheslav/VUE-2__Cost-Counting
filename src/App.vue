<template>
  <div id="app">
    <List/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="sass">
  body
    background-color: #ffe0a2
  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
    max-width: 35%
    margin: 60px auto
    padding: 20px
  @media (max-width: 1555px)
    #app
      max-width: 45%
  @media (max-width: 1215px)
    #app
      max-width: 55%
  @media (max-width: 1031px)
    #app
      max-width: 65%
  @media (max-width: 777px)
    #app
      max-width: 85%
</style>
