<template>
    <el-main id="main">
        <router-view name="mainArea"></router-view>
    </el-main>
</template>
<script lang='ts'></script>
<script setup lang='ts'>
import {RouterView} from "vue-router";

</script>
<style scoped>
#main {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgb(0, 0, 0)), url(../assets/pic/backgroundImage/Jeanne-DArc-Wallpaper-3840x2160-1.png);

    background-size: contain;
    background-attachment: fixed;
    color: aliceblue;
    border-radius: 15px;
    /* background-image: url(); */
}
</style>