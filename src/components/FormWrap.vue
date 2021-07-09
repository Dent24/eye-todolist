<template>
    <div class="form-wrap">
        <div class="form-item-wrap">
            <div class="form-item">項目編號</div>
            <label class="form-item">主題<input type="text"></label>
            <label class="form-item">預約時間<input type="text"></label>
            <div class="form-item">重要程度</div>
            <label class="form-item">簡介<input type="text"></label>
            <label class="form-item">撰寫者<input type="text"></label>
        </div>
        <label class="form-item">詳細內容<textarea></textarea></label>
        <div class="form-btn-wrap">
            <a href="#" class="form-submit a-button">儲存</a>
            <router-link to="/home" class="form-cancel a-button">返回</router-link>
        </div>
    </div>
</template>

<style scoped>
    .form-item-wrap {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .form-item {
        margin-bottom: 40px;
    }
    input {
        margin-left: 10px;
    }
    textarea {
        display: block;
        margin: 20px 0 40px;
        width: 100%;
        height: 60px;
    }
    .form-btn-wrap {
        text-align: center;
    }
    .a-button {
        margin: 0 30px;
    }
    .form-submit {
        color: #5A5;
        border-color: #5A5;
    }
    .form-submit:hover {
        color: #FFF;
        background: #5A5;
    }
    .form-cancel {
        color: #EB3;
        border-color: #EB3;
    }
    .form-cancel:hover {
        color: #FFF;
        background: #EB3;
    }
</style>