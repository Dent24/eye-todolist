<template>
    <div class="banner">
        <a href="#" class="logout" @click="logout">
            <i class="fas fa-user"></i>
            登出
        </a>
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
        // 登出
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
    width: 100%;
    height: 80px;
    font-size: 36px;
    line-height: 80px;
    background: #FFF;
    box-shadow: 0 10px 10px -2px #999;
}
.logout {
    position: absolute;
    top: 0;
    right: 60px;
    color: #000;
    font-weight: bold;
    text-decoration: none;
}
.logout:hover {
    color: #999;
}
.fa-user {
    float: left;
    margin: 10px 20px 0 0;
    width: 60px;
    height: 60px;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
    color: #999;
    background: #EEE;
    border-radius: 50%;
}
</style>
