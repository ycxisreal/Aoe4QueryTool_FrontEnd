<template>
    <el-container style="background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgb(0, 0, 0,1))">
        <el-header id="header">
            <div style="width: 100%; display: flex;align-items: center;">
                <span id="d1">
                    Age of Empires 4
                    <el-divider direction="vertical" />
                    <span style="font-size: medium;font-family: 仿宋,serif">
                        查询工具 by ycx
                    </span>
                </span>
                <span class="myButton1" @click="c">
                    <el-icon>
                        <User />
                    </el-icon>
                    选择已保存玩家
                </span>
                <el-popover placement="top-start" title="添加或替换已有玩家" :width="200" trigger="hover"
                    content="ycx专用,如果保存的玩家昵称不是最新的,添加新昵称时会自动替换原有昵称">
                    <template #reference>
                        <span class="myButton1" @click="c">
                            <el-icon>
                                <Plus />
                            </el-icon>
                            添加新玩家
                        </span>
                    </template>
                </el-popover>
                <span class="myButton1" style="background-color: rgb(35, 169, 242);" @click="addUserVisible = true">
                    <el-icon>
                        <User />
                    </el-icon>
                    设置查询玩家
                </span>
                <span style="font-size: large;margin-left: 1%;">
                    欢迎{{ user }}
                </span>
            </div>


        </el-header>
        <el-container>
            <leftMenu :user="user"></leftMenu>
            <mainArea></mainArea>
        </el-container>
    </el-container>

    <el-dialog v-model="addUserVisible" title="设置玩家" width="500" draggable>
        <el-form>
            <el-form-item label="玩家游戏内昵称">
                <el-input v-model="tempUser" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div>
                <el-button @click="addUserVisible = false">取消</el-button>
                <el-button @click="addUserVisible = false; getId(tempUser);">设置</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup lang='ts'>
import mainArea from './mainArea.vue';
import leftMenu from './leftMenu.vue';
import {ElLoading, ElMessage} from 'element-plus'
import { User, Plus } from '@element-plus/icons-vue';
import { ref,provide } from 'vue';
import axios from 'axios';

let user = ref("-");
let tempUser = ref("");
let addUserVisible = ref(false);
let id = ref(-1);//玩家id

provide("username",user)
provide("id",id)
function c() {
    console.log(111)
}
function selectUser() {

}
async function getId(name: string) {
    const loading = ElLoading.service({
        lock: true,
        text: '设置并搜索玩家id中',
        background: 'rgba(0, 0, 0, 0.6)',
    })
    try {
        const res = await axios.get(`http://localhost:8080/api/user/queryId/${name}`);
        id.value = res.data;
        console.log(id.value)
        loading.close()
        ElMessage({
            message:`玩家设置完成，您的uid为${id.value}`,
            type:'info',
            offset:200
    })
        user.value = name
    } catch (error) {
        loading.close()
        ElMessage({
            message:"无法连接至服务器,uid获取失败.",
            type:'error',
            offset:200
        })
    }
}
</script>
<style scoped>
#d1 {
    margin-left: 2%;
    margin-right: 25%;
    font-size: 2em;
    font-weight: 400;
    font-family: 黑体,serif;
    text-align: left;
    align-items: center;

}

.myButton1 {
    background-color: rgb(81, 80, 95);
    height: 100%;
    font-size: large;
    border-radius: 5px;
    padding: 2px 10px;
    margin-left: 1%;
    margin-right: 1%;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.myButton1:hover {
    background-color: transparent;
}

#header {
    position: sticky;
    top: 0;
    z-index: 100;

    height: 10vh;
    /* background-color: #161619; */
    background: linear-gradient(to right, #4d4d4e, #161619);
    color: aliceblue;
    border-radius: 8px;
    margin-bottom: 0.5%;
    padding-top: 1.2%;
}
</style>    