<template>
  <div id="app">
    <router-view/>
    <router-view name='body' />
    <router-view name='footer' />
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>
