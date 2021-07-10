<template>
    <div class="home-wrap wrap">
        <div class="title-wrap">
            <span class="title">To Do List 清單</span>
            <router-link to="/create" class="home-create-button a-button">新增</router-link>
        </div>
        <hr />
        <table class="home-list">
            <tr>
                <th class="home-list-id">編號</th>
                <th>主題</th>
                <th class="home-list-time">預約時間</th>
                <th>內容簡介</th>
                <th>重要程度</th>
                <th>撰寫者</th>
                <th>操作</th>
            </tr>
            <template v-for="(item, index) in toDoList" :key="index">
                <tr>
                    <td>{{ item.to_do_id }}</td>
                    <td class="home-list-center">{{  item.subject }}</td>
                    <td>{{ item.reserved_time }}</td>
                    <td>{{ item.brief }}</td>
                    <td class="home-list-right">
                        <template v-for="n in 5" :key="n">
                            <div class="star-wrap">
                                <div class="star-mask odd-star"><i class="fa-star" :class="[2 * n - 1 <= item.level ? 'fas' : 'far']"></i></div>
                                <div class="star-mask even-star"><i class="fa-star" :class="[2 * n <= item.level ? 'fas' : 'far']"></i></div>
                            </div>
                        </template>
                    </td>
                    <td>{{ item.author }}</td>
                    <td class="home-list-center">
                        <router-link :to="`/modify/${item.to_do_id}`" class="home-item-modify a-button">修改</router-link>
                        <a href="#" class="home-delete-btn a-button" @click="deleteList(item.to_do_id)">刪除</a>
                    </td>
                </tr>
            </template>
        </table>
    </div>
</template>

<script>
import ajax from '@/lib/ajax'

export default {
    name: 'Home',
    data() {
        return {
            toDoList: []
        }
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            ajax({
                url: '/to-do-list/list',
                success: (res) => {
                    this.toDoList = res.result;
                }
            });
        },
        deleteList(id) {
            ajax({
                method: 'delete',
                url: `/to-do-list/detail/${id}`,
                success: () => {
                    alert('刪除成功!!');
                    this.getList();
                }
            });
        }
    }
}
</script>

<style scoped>
    .home-create-button {
        float: right;
    }
    .home-create-button,
    .home-item-modify {
        color: #5AF;
        border-color: #5AF;
    }
    .home-create-button:hover,
    .home-item-modify:hover {
        color: #FFF;
        background: #5AF;
    }
    .home-list {
        width: 100%;
        border-collapse: collapse;
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
    .home-list-id {
        width: 50px;
    }
    .home-list-time {
        width: 155px;
    }
    .home-list-center {
        text-align: center;
    }
    .home-list-right {
        text-align: right;
    }
    .home-delete-btn {
        margin-left: 10px;
        color: #F55;
        border-color: #F55;
    }
    .home-delete-btn:hover {
        color: #FFF;
        background: #F55;
    }
</style>
