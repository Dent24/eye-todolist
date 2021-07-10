<template>
    <form @submit.prevent="login" class="login-wrap">
        <div class="login-title">系統登入</div>
        <input v-model="loginData.account" type="text" class="login-input" placeholder="帳號">
        <input v-model="loginData.passwd" type="text" class="login-input" placeholder="密碼">
        <input type="submit" class="login-button a-button" value="登入">
    </form>
</template>

<script>
import { mapActions } from 'vuex'
import ajax from '@/lib/ajax'

export default {
    data() {
        return {
            loginData: {
                account: '',
                passwd: ''
            }
        }
    },
    methods: {
        ...mapActions([
            'setIsLogin'
        ]),
        login() {
            ajax({
                method: 'post',
                url: '/auth',
                data: this.loginData,
                success: () => {
                    this.setIsLogin(true);
                    this.$router.push('/home');
                }
            });
        }
    }
}
</script>

<style scoped>
    .login-wrap {
        margin: 100px auto 0;
        padding-top: 50px;
        width: 500px;
        height: 500px;
        text-align: center;
        border: 2px solid #666;
    }
    .login-title {
        margin-bottom: 20px;
        font-size: 36px;
        font-weight: bold;
    }
    .login-input {
        display: block;
        margin: 0 auto 20px;
        padding: 0 5px;
        width: 250px;
        height: 36px;
        font-size: 24px;
    }
    .login-button {
        margin: 0 20px;
        width: 100px;
        color: #000;
        font-size: 24px;
        border: 2px solid #000;
    }
    .login-button:hover {
        color: #FFF;
        background: #000;
    }
</style>