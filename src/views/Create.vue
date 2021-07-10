<template>
    <div class="create-wrap wrap">
        <div class="title-wrap">
            <span class="title">新增 To Do List</span>
            <span class="time">資料建立時間 {{ modified_time }}</span>
        </div>
        <hr />
        <FormWrap formType="create" :toDoId="id" @submit="createToDo" />
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
            id: '',
            modified_time: ''
        }
    },
    created() {
        ajax({
            url: '/to-do-list/the-newest-id',
            success: (data) => {
                this.id = data.result;
            }
        });
        this.modified_time = dateFormat(new Date());
    },
    methods: {
        createToDo(data) {
            const param = {
                ...data,
                modified_time: this.modified_time
            };
            ajax({
                method: 'put',
                url: `/to-do-list/detail/${this.id}?mode=create`,
                data: param,
                success: () => {
                    alert('新增成功!!');
                    this.$router.push('/home');
                }
            })
        },
    }
}
</script>

<style scoped>
</style>