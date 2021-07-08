<template>
    <Banner />
    <router-view />
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
    components: {
        Banner
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Microsoft JhengHei';
}

#app {
    margin-top: 80px;
}
</style>
