<template>
    <div class="create-wrap wrap">
        <TitleWrap :modified_time="modified_time" />
        <FormWrap formType="modify" :toDoId="id" @submit="modifyToDo" :originalData="originalData" />
    </div>
</template>

<script>
import dateFormat from '@/lib/dateFormat'
import ajax from '@/lib/ajax'
import FormWrap from '@/components/FormWrap.vue'
import TitleWrap from '@/components/TitleWrap.vue'

export default {
    name: 'Modify',
    components: {
        FormWrap,
        TitleWrap
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
        // 修改時間
        this.modified_time = dateFormat(new Date());
        // 搜尋此ID的資料
        ajax({
            url: `/to-do-list/detail/${this.id}?type=json`,
            success: (data) => {
                this.originalData = data.result;
            }
        });
    },
    methods: {
        // 修改
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