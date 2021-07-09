<template>
    <div class="register-wrap">
        <div class="register-title">系統登入</div>
        <input type="text" class="register-input" placeholder="帳號">
        <input type="text" class="register-input" placeholder="密碼">
        <a class="register-button">註冊</a>
    </div>
</template>

<style scoped>
    .register-wrap {
        margin: 100px auto 0;
        padding-top: 50px;
        width: 500px;
        height: 500px;
        text-align: center;
        border: 2px solid #666;
    }
    .register-title {
        margin-bottom: 20px;
        font-size: 36px;
        font-weight: bold;
    }
    .register-input {
        display: block;
        margin: 0 auto 20px;
        padding: 0 5px;
        width: 250px;
        height: 36px;
        font-size: 24px;
    }
    .register-button {
        display: inline-block;
        margin: 0 20px;
        width: 100px;
        height: 36px;
        color: #000;
        text-decoration: none;
        font-size: 24px;
        line-height: 30px;
        border-radius: 5px;
        border: 2px solid #000;
    }
    .register-button:hover {
        color: #FFF;
        background: #000;
    }
</style>