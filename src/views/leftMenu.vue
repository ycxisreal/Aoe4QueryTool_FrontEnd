<template>
    <el-aside id="asd">
        <div id="aside">
            <div v-for="(option, index) in options" :key="index" class="selection" @click="handleOptionClick(option.id)">
                <el-text style="font-size: 1.2em;font-weight: bold;color: white">{{ option.label }}</el-text>
                <br>
                <el-text>{{option.sub_label}}</el-text>
            </div>

        </div>
    </el-aside>
</template>
<script lang='ts'></script>
<script setup lang='ts'>
import {ref, defineProps, onMounted} from 'vue';
import {useRouter} from 'vue-router'
const router = useRouter()
const props = defineProps(['user'])
const options = ref([
    { id: 'personal-info', label: '个人信息' ,sub_label:'PlayerInfo'},
    { id: 'rm-1v1', label: '排位 1V1' ,sub_label:'RM 1v1'},
    { id: 'rm-multi', label: '排位 多V多' ,sub_label:'RM team'},
    { id: 'quick-match-1v1', label: '快速匹配 1V1' ,sub_label:'Quick Match 1V1'},
    { id: 'quick-match-multi', label: '快速匹配 多V多' ,sub_label:'Quick Match team'},
    { id: 'ethnic-stats', label: '使用民族统计' ,sub_label:'Civ Statistics'},
    { id: 'world-rankings', label: '世界排行榜单' ,sub_label:'Leaderboard'},
]);

const handleOptionClick = (optionId: string) => {
    console.log(`Option clicked: ${optionId}`);
    if(props.user=='-')
    {
        router.push("/")
        return;
    }
    switch (optionId) {
        case 'personal-info':
            router.push("/personalInfo")
            break
    }
};
onMounted(()=>{
    if(props.user=='-')
        router.push("/")
});
</script>
<style scoped>
.selection {
    background-color: transparent;
    width: 100%;
    height: 5%;
    margin-bottom: 8%;
    border-radius: 8px;
    font-family: serif;
    text-align: center;
    cursor: pointer;
}

.selection:hover {
    background-color: #2c2c31;
    opacity: 0.5;
}

#aside {
    background-color: #161619;
    border-radius: 15px;
    height: 100vh;
    width: 88%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>