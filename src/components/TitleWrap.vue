<template>
    <div class="title-wrap">
        <span class="title">{{ titleName }}</span>
        <router-link v-if="$route.name === 'Home'" to="/create" class="home-create-button a-button">新增</router-link>
        <span v-else class="time">資料建立時間 {{ modified_time }}</span>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'TitleWrap',
    props: {
        modified_time: {
            type: String,
            required: false
        }
    },
    computed: {
        titleName() {
            let text = '';
            switch (this.$route.name) {
                case 'Create':
                    text = '新增 To Do List';
                    break;
                case 'Modify':
                    text = '修改 To Do List';
                    break;
                default:
                    text = 'To Do List 清單';
                    break;
            }
            return text;
        }
    }
}
</script>

<style scoped>
    .title-wrap .title {
        font-size: 36px;
        font-weight: bold;
    }
    .title-wrap .time {
        float: right;
        margin-top: 27px;
    }
    .home-create-button {
        float: right;
    }
    .home-create-button {
        color: #5AF;
        border-color: #5AF;
    }
    .home-create-button:hover {
        color: #FFF;
        background: #5AF;
    }
    hr {
        margin: 20px 0;
    }
</style>