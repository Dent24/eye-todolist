<template>
    <div class="create-wrap wrap">
        <TitleWrap :modified_time="modified_time" />
        <FormWrap formType="create" :toDoId="id" @submit="createToDo" />
    </div>
</template>

<script>
import dateFormat from '@/lib/dateFormat'
import ajax from '@/lib/ajax'
import FormWrap from '@/components/FormWrap.vue'
import TitleWrap from '@/components/TitleWrap.vue'

export default {
    name: 'Create',
    components: {
        FormWrap,
        TitleWrap
    },
    data() {
        return {
            id: '',
            modified_time: ''
        }
    },
    created() {
        // 新增時間
        this.modified_time = dateFormat(new Date());
        // 搜尋最新ID
        ajax({
            url: '/to-do-list/the-newest-id',
            success: (data) => {
                this.id = data.result;
            }
        });
    },
    methods: {
        // 新增
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