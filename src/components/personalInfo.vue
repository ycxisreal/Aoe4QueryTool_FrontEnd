<script setup lang="ts">
import {inject, ref} from "vue";
import type { RankedInfo,PlayerInfo,modeInfo } from '@/interfaces/common';
import { RankLevelToPicPath, RankLevelToChinese,xiaoren } from '@/interfaces/common';
import {UserFilled } from '@element-plus/icons-vue';

    const name = inject("username")
    const id = inject("id")
    let season=ref("season 6")
    let rank=ref('conqueror_3')
    let url = RankLevelToPicPath(rank.value)
    let  rankNumber=ref(44853)
    let points=ref(1000000)
    let gameTimes =ref(500)
    let Ranks:RankedInfo[] = [
        {
            modeName: "单排",
            season: 6,
            rating: 669,
            maxRating: 856,
            maxRating7d: 1111,
            maxRating1m: 2222,
            rank: 44853,
            rankLevel: 'conqueror_3',
            gameCount: 100,
            winCount: 60,
            loseCount: 40,
            elo: 1500,
        }
        ,{
            modeName: "双排",
            season: 4,
            rating: 669,
            maxRating: 856,
            maxRating7d: 1111,
            maxRating1m: 2222,
            rank: 44853,
            rankLevel: 'diamond_2',
            gameCount: 100,
            winCount: 60,
            loseCount: 40,
            elo: 1500,
        },
        {
            modeName: "四排",
            season: 3,
            rating: 669,
            maxRating: 856,
            maxRating7d: 1111,
            maxRating1m: 2222,
            rank: 44853,
            rankLevel: 'platinum_1',
            gameCount: 100,
            winCount: 60,
            loseCount: 40,
            elo: 1500,
        },
            {
            modeName: "六排",
            season: 1,
            rating: 669,
            maxRating: 856,
            maxRating7d: 1111,
            maxRating1m: 2222,
            rank: 44853,
            rankLevel: 'silver_1',
            gameCount: 100,
            winCount: 60,
            loseCount: 40,
            elo: 1500,
        }
    ]
    let playerInfo:PlayerInfo = {
        site:"https://aoe4world.com/players/14284379",
        avatars: "https://avatars.akamai.steamstatic.com/251f05bd2a80b23bc25dfee23884ab0825c7ae70_full.jpg",
        country:"中国",
    }
    let modeInfo:modeInfo[] = [
        {
            modeName:"1v1",
            elo:1500,
            winCount:100,
            loseCount:100,
            winRate:0.23,
            rank:302,
        }
        ,{
            modeName:"2v2",
            elo:1500,
            winCount:100,
            loseCount:100,
            winRate:0.7,
            rank:212,
        }
        ,{
            modeName:"3v3",
            elo:1500,
            winCount:100,
            loseCount:100,
            winRate:0.5,
            rank:100,
        }
        ,{
            modeName:"4v4",
            elo:1500,
            winCount:100,
            loseCount:100,
            winRate:0.5,
            rank:150,
        }
    ]

</script>

<template>
    <div class="text1">
        <el-text style="color: white;font-size: 2em">个人排名</el-text>
    </div>
    <el-divider></el-divider>
    <div class="content_1">
        <div class="sub_content_1">
            <div class="infoCard" style="width: 80%;padding: 15px">
                <div style="text-align: center">
                    <el-text style="font-size: larger;font-weight: bold">{{name}}</el-text>
                </div>
                <div style="display: flex;flex-direction: row">
                    <el-image style="width: 17%;border-radius: 5px;border: rgba(22,22,25,0.43) 2px solid; margin-right: 2%" fit="contain" :src="playerInfo.avatars"></el-image>
                    <div style="font-size: large;width: 50%;font-family: 黑体,serif;font-weight: bold;line-height: 25px">
                        id:{{id}}
                        <br>
                        国家/地区：{{playerInfo.country}}
                        <br>
                        <el-link :href="playerInfo.site" target="_blank" style="font-size: large;font-family: 黑体,serif;font-weight: bold;">Aoe4world网站个人页面</el-link>
                    </div>
                </div>
            </div>
            <div class="infoCard" style="width: 80%;padding: 15px;margin-top: 2%;display: flex;flex-direction: column;flex-wrap: wrap;">
                <div style="text-align: center;">
                    <el-text>Ranked Match</el-text>
                    <el-table :data="modeInfo" style="width: 90%;margin: auto">
                        <el-table-column label="模式">
                            <template #default="scope">
                            <span v-for="n in xiaoren(scope.row.modeName)">
                                <el-icon style="font-size: 0.7em"><UserFilled /></el-icon>
                            </span>
                                <el-text>{{scope.row.modeName}}</el-text>
                            </template>
                        </el-table-column>
                        <el-table-column label="elo" prop="elo"></el-table-column>
                        <el-table-column label="排名" prop="rank"></el-table-column>
                        <el-table-column label="胜率" prop="winRate"></el-table-column>
                    </el-table>
                </div>
                <el-divider></el-divider>
                <div style="text-align: center;">
                    <el-text>Ranked Match</el-text>
                    <el-table :data="modeInfo" style="width: 90%;margin: auto">
                        <el-table-column label="模式">
                            <template #default="scope">
                            <span v-for="n in xiaoren(scope.row.modeName)">
                                <el-icon style="font-size: 0.7em"><UserFilled /></el-icon>
                            </span>
                                <el-text>{{scope.row.modeName}}</el-text>
                            </template>
                        </el-table-column>
                        <el-table-column label="elo" prop="elo"></el-table-column>
                        <el-table-column label="排名" prop="rank"></el-table-column>
                        <el-table-column label="胜率" prop="winRate"></el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        <el-divider direction="vertical" style="height: auto;flex: 1"></el-divider>
        <div class="sub_content_2">
            <div v-for="item in Ranks" style="height: 220px">
                <div class="infoCard" style="width: 280px;height: 220px;margin: 1%;border: #4d4d4e 2px solid;">
                    <el-text style="font-size: larger;font-weight: bold;padding: 10%">单排</el-text>
                    <el-text style=" font-size: small;font-weight: normal;">season {{item.season}}</el-text>
                    <br>
                    <div style="padding: 4%">
                        <div style="display: flex;flex-direction: row;justify-content: start">
                            <el-image style="width: 30%;border-radius: 10px" fit="contain" :src="RankLevelToPicPath(item.rankLevel)"></el-image>
                            <div style="padding-left: 10%;line-height: 30px;font-family: 黑体,serif;font-size: medium;font-weight: bold;color: #4d4d4e">
                                <div>{{RankLevelToChinese(item.rankLevel)}}</div>
                                <div>排名 #{{item.rank}} </div>
                                <div>分数：{{item.rating}}</div>
                            </div>
                        </div>
                        <div style=" display: flex;flex-direction: row;justify-content: start;padding-left: 3%;font-family: 黑体,serif;font-size: medium;font-weight: bold;color: #4d4d4e">
                            <el-statistic title="游戏次数" :value="item.gameCount" style="margin-right: 10%"></el-statistic>
                            <el-statistic title="胜率" value="50%" style="margin-right: 10%"></el-statistic>
                            <el-statistic title="胜场" :value="item.winCount" style="margin-right: 10%"> </el-statistic>
                            <el-statistic title="输场" :value="item.loseCount"></el-statistic>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.text1{
    font-family: serif;
    text-align: center;
}
.content_1{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.sub_content_1{
    flex: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sub_content_2{
    flex: 10;
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;

}
.infoCard{
    background-color: aliceblue;
    color: #161619;
    opacity: 0.8;
    border-radius: 5px;
    min-height: 100px;
}
</style>
<!--            <div class="infoCard" style="width: 40%;margin: 1%">-->
<!--                <el-text style="font-size: larger;font-weight: bold;padding: 10%">单排</el-text>-->
<!--                <el-text style=" font-size: small;font-weight: normal;">{{season}}</el-text>-->
<!--                <br>-->
<!--                <div style="padding: 4%">-->
<!--                    <div style="display: flex;flex-direction: row;justify-content: start">-->
<!--                        <el-image style="width: 30%;border-radius: 10px" fit="contain" :src="url"></el-image>-->
<!--                        <div style="padding-left: 10%;line-height: 30px;font-family: 黑体,serif;font-size: medium;font-weight: bold;color: #4d4d4e">-->
<!--                            <div>{{RankLevelToChinese(rank)}}</div>-->
<!--                            <div>排名 #{{rankNumber}} </div>-->
<!--                            <div>分数：{{points}}</div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div style=" display: flex;flex-direction: row;justify-content: start;padding-left: 3%;font-family: 黑体,serif;font-size: medium;font-weight: bold;color: #4d4d4e">-->
<!--                        <el-statistic title="游戏次数" :value="gameTimes" style="margin-right: 10%"></el-statistic>-->
<!--                        <el-statistic title="胜率" value="15%" style="margin-right: 10%"></el-statistic>-->
<!--                        <el-statistic title="胜场" value="150" style="margin-right: 10%"> </el-statistic>-->
<!--                        <el-statistic title="输场" value="150"></el-statistic>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->