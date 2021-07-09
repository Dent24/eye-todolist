<template>
    <Banner v-if="isLogin" />
    <router-view />
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '@/components/Banner.vue'

export default {
    components: {
        Banner
    },
    computed: {
        ...mapGetters({
            isLogin: 'getIsLogin'
        })
    },
    watch: {
        $route() {
            if (!this.isLogin && this.$route.name !== 'Login' && this.$route.name !== 'Register') this.$router.push({ path: 'login' });
            if (this.isLogin && (this.$route.name === 'Login' || this.$route.name === 'Register')) this.$router.push({ path: 'home' });
        }
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Microsoft JhengHei';
        transition: .3s;
    }
    .wrap {
        margin: 120px auto 0;
        width: 900px;
    }
    .title-wrap .title {
        font-size: 36px;
        font-weight: bold;
    }
    .title-wrap .time {
        float: right;
        margin-top: 27px;
    }
    hr {
        margin: 20px 0;
    }
    .a-button {
        display: inline-block;
        width: 80px;
        height: 36px;
        text-align: center;
        text-decoration: none;
        line-height: 36px;
        border-radius: 5px;
        border: 1px solid;
    }
</style>
