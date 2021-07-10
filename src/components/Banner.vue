<template>
    <div class="banner">
        <a href="#" class="logout" @click="logout">登出</a>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Banner',
    methods: {
        ...mapActions([
            'setIsLogin'
        ]),
        logout()  {
            this.setIsLogin(false);
            this.$router.push('/login');
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
.logout {
    color: #000;
    font-weight: bold;
    text-decoration: none;
}
.logout:hover {
    color: #999;
}
</style>
