<template>
    <div class="create-wrap wrap">
        <div class="title-wrap">
            <span class="title">修改 To Do List</span>
            <span class="time">資料修改時間 {{ modified_time }}</span>
        </div>
        <hr />
        <FormWrap formType="modify" :toDoId="id" @submit="modifyToDo" :originalData="originalData" />
    </div>
</template>

<script>
import FormWrap from '@/components/FormWrap.vue'
import dateFormat from '@/lib/dateFormat'
import ajax from '@/lib/ajax'

export default {
    components: {
        FormWrap
    },
    data() {
        return {
            modified_time: '',
            originalData: {}
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        }
    },
    created() {
        this.modified_time = dateFormat(new Date());
        ajax({
            url: `/to-do-list/detail/${this.id}?type=json`,
            success: (data) => {
                this.originalData = data.result;
            }
        });
    },
    methods: {
        modifyToDo(data) {
            const param = {};
            Object.keys(data).forEach((ele) => {
                if (data[ele] !== this.originalData[ele]) param[ele] = data[ele];
            });
            ajax({
                method: 'put',
                url: `/to-do-list/detail/${this.id}?mode=edit`,
                data: param,
                success: () => {
                    alert('修改成功!!');
                    this.$router.push('/home');
                }
            })
        }
    }
}
</script>

<style scoped>
</style>