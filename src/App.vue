<template>
  <w-app>
    <w-toolbar absolute>
      <w-button icon="mdi mdi-dots" @click="isOpen = true"></w-button>
      <div class="title2">Shyamkumar</div>
      <div class="spacer"></div>
      <span class="ml2"><w-icon>mdi mdi-home</w-icon></span>
      <span class="ml2">{{ isOpen }}</span>
      <span class="ml2">Item 3</span>
    </w-toolbar>
    <w-drawer 
      v-model="isOpen" 
      content-class="d-block">
      <w-button
        @click="isOpen = false"
        md
        outline
        round
        absolute
        color="primary"
        icon="wi-cross">
      </w-button>
    </w-drawer>
    <router-view/>
  </w-app>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      isOpen: false,
      items1: [
        { label: 'Item 1' },
        { label: 'Item 2' },
        { label: 'Item 3' },
        { label: 'Item 4' }
      ]
    }
  }
}
</script>