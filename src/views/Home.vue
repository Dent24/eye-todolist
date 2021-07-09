<template>
    <div class="home-wrap wrap">
        <div class="title-wrap">
            <span class="title">To Do List 清單</span>
            <router-link to="/create" class="home-create-button a-button">新增</router-link>
        </div>
        <hr />
        <table class="home-list">
            <tr>
                <th>編號</th>
                <th>主題</th>
                <th class="home-list-time">預約時間</th>
                <th>內容簡介</th>
                <th>重要程度</th>
                <th>撰寫者</th>
                <th>操作</th>
            </tr>
            <tr>
                <td>1001</td>
                <td class="home-list-center">
                    <router-link to="/modify" class="home-item-modify">修改</router-link>
                </td>
                <td>2021/07/09 00-00-00</td>
                <td>XXXXXXX</td>
                <td class="home-list-right">5</td>
                <td>Jeff</td>
                <td class="home-list-center">
                    <a href="#" class="home-delete-btn a-button">刪除</a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    .home-create-button {
        float: right;
        color: #5AF;
        border-color: #5AF;
    }
    .home-create-button:hover {
        color: #FFF;
        background: #5AF;
    }
    .home-list {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed
    }
    table,
    th,
    td {
        border: 1px solid #000;
    }
    th,
    td {
        font-size: 16px;
        line-height: 30px;
        padding: 3px 5px;
    }
    .home-list-time {
        width: 185px;
    }
    .home-list-center {
        text-align: center;
    }
    .home-list-right {
        text-align: right;
    }
    .home-delete-btn {
        color: #F55;
        border-color: #F55;
    }
    .home-delete-btn:hover {
        color: #FFF;
        background: #F55;
    }
</style>
