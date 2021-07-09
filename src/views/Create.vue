<template>
    <div class="create-wrap wrap">
        <div class="title-wrap">
            <span class="title">新增 To Do List</span>
            <span class="time">資料建立時間</span>
        </div>
        <hr />
        <FormWrap />
    </div>
</template>

<script>
import FormWrap from '@/components/FormWrap.vue'

export default {
    components: {
        FormWrap
    }
}
</script>

<style scoped>
</style>