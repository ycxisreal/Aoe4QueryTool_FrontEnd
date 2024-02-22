<template>
    <el-aside id="asd">
        <div id="aside">
            <div v-for="(option, index) in options" :key="index" class="selection" @click="handleOptionClick(option.id)">
                <h3>{{ option.label }}</h3>
            </div>

        </div>
    </el-aside>
</template>
<script lang='ts'></script>
<script setup lang='ts'>
import { ref } from 'vue';

const options = ref([
    { id: 'personal-info', label: '个人信息' },
    { id: 'rm-1v1', label: 'RM 1V1' },
    { id: 'rm-multi', label: 'RM 多V多' },
    { id: 'quick-match-1v1', label: 'Quick Match 1V1' },
    { id: 'quick-match-multi', label: 'Quick Match 多V多' },
    { id: 'ethnic-stats', label: '使用民族统计' },
    { id: 'world-rankings', label: '世界排行榜单' },
]);

const handleOptionClick = (optionId: string) => {

    console.log(`Option clicked: ${optionId}`);
};
</script>
<style scoped>
.selection {
    background-color: transparent;
    width: 100%;
    height: 5%;
    margin-bottom: 5%;

    border-radius: 8px;
    font-family: serif;
    line-height: 100%;
    text-align: center;
    cursor: pointer;
}

.selection:hover {
    background-color: #2c2c31;
    opacity: 0.5;
}

#aside {
    background-color: #161619;
    color: aliceblue;
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