<template>
    <div class="form-wrap">
        <div class="form-item-wrap">
            <div class="form-item">項目編號: {{ toDoId }}</div>
            <label class="form-item">主題<input type="text" v-model="toDoData.subject" @blur="getDiff"></label>
            <label class="form-item">預約時間<input type="datetime-local" v-model="toDoData.reserved_time"></label>
            <div class="form-item">
                <span class="form-level">重要程度</span>
                <template v-for="n in 5" :key="n">
                    <div class="star-wrap">
                        <div class="star-mask odd-star" @mouseenter="toDoData.level = 2 * n - 1">
                            <i class="fa-star fa-2x" :class="[2 * n - 1 <= toDoData.level ? 'fas' : 'far']" />
                        </div>
                        <div class="star-mask even-star" @mouseenter="toDoData.level = 2 * n">
                            <i class="fa-star fa-2x" :class="[2 * n <= toDoData.level ? 'fas' : 'far']" />
                        </div>
                    </div>
                </template>
            </div>
            <label class="form-item">簡介<input type="text" v-model="toDoData.brief"></label>
            <label class="form-item">撰寫者<input type="text" v-model="toDoData.author"></label>
        </div>
        <label class="form-item">詳細內容<textarea v-model="toDoData.content"></textarea></label>
        <div class="form-btn-wrap">
            <input type="submit" @click="submit" class="form-submit a-button" value="儲存">
            <router-link to="/home" class="form-cancel a-button">返回</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormWrap',
    props: {
        formType: {
            type: String,
            required: true
        },
        toDoId: {
            type: [String, Number],
            required: true
        },
        originalData: {
            type: Object,
            required: false,
            default: function () { return {} }
        }
    },
    data() {
        return {
            toDoData: {
                author: '',
                brief: '',
                content: '',
                level: 0,
                reserved_time: '',
                subject: ''
            }
        }
    },
    watch:  {
        originalData(val) {
            // 如果是修改, 覆蓋資料
            const { author, brief, content, level, subject, reserved_time } = val;
            this.toDoData = { author, brief, content, level, subject, reserved_time: reserved_time.replace(' ', 'T') };
        }
    },
    methods: {
        // 資料送出
        submit() {
            const formData = {
                ...this.toDoData,
                reserved_time: this.toDoData.reserved_time.replace('T', ' ')
            }
            this.$emit('submit', formData);
        }
    }
}
</script>

<style scoped>
    .form-item-wrap {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .form-item {
        margin-bottom: 40px;
    }
    .form-level {
        float: left;
        margin-right: 10px;
    }
    .form-wrap .star-wrap {
        width: 36px;
        height: 32px;
    }
    .form-wrap .star-mask {
        cursor: pointer;
        width: 18px;
        height: 32px;
    }
    input {
        margin-left: 10px;
        width: 200px;
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
        width: 80px;
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