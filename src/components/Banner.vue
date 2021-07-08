<template>
    <div class="banner">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
            msg: 'test'
        }
    }
}
</script>

<style scoped>
.banner {
    position: fixed;
    top: 0;
    left: 0;
    padding-right: 60px;
    width: 100%;
    height: 80px;
    font-size: 36px;
    line-height: 80px;
    background: #FFF;
    text-align: right;
    box-shadow: 0 10px 10px -2px #999;
}
</style>
