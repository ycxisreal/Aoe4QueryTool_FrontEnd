export interface RankedInfo {
    modeName: string;
    season: number;
    rating: number;
    maxRating: number;
    maxRating7d: number;
    maxRating1m: number;
    rank: number;
    rankLevel: string;
    gameCount: number;
    winCount: number;
    loseCount: number;
    elo: number;
}
export interface PlayerInfo {
    site:string;
    avatars: string;
    country: string;
}
export interface modeInfo {
    modeName:string;
    elo: number;
    winCount: number;
    loseCount: number;
    winRate: number;
    rank: number;
}

export const modeNameToCommonName = (name:string) => {
    switch (name) {
        case 'rm_solo':
            return '排位1V1'
        case 'rm_team':
            return '排位多V多'
    }
    return 'invalid'
}
export const RankLevelToPicPath = (level:string) => {
    switch (level) {
        case 'conqueror_3':
            return 'src/assets/icon/rank/征服者3.png';
        case 'conqueror_2':
            return 'src/assets/icon/rank/征服者2.png';
        case 'conqueror_1':
            return 'src/assets/icon/rank/征服者1.png';
        case 'diamond_3':
            return 'src/assets/icon/rank/钻石3.png';
        case 'diamond_2':
            return 'src/assets/icon/rank/钻石2.png';
        case 'diamond_1':
            return 'src/assets/icon/rank/钻石1.png';
        case 'platinum_3':
            return 'src/assets/icon/rank/白金3.png';
        case 'platinum_2':
            return 'src/assets/icon/rank/白金2.png';
        case 'platinum_1':
            return 'src/assets/icon/rank/白金1.png';
        case 'gold_3':
            return 'src/assets/icon/rank/黄金3.png';
        case 'gold_2':
            return 'src/assets/icon/rank/黄金2.png';
        case 'gold_1':
            return 'src/assets/icon/rank/黄金1.png';
        case 'silver_3':
            return 'src/assets/icon/rank/白银3.png';
        case 'silver_2':
            return 'src/assets/icon/rank/白银2.png';
        case 'silver_1':
            return 'src/assets/icon/rank/白银1.png';
        case 'bronze_3':
            return 'src/assets/icon/rank/青铜3.png';
        case 'bronze_2':
            return 'src/assets/icon/rank/青铜2.png';
        case 'bronze_1':
            return 'src/assets/icon/rank/青铜1.png';
        default:
            return 'invalid';
    }
}
export const RankLevelToChinese = (level: string) => {
    switch (level) {
        case 'conqueror_3':
            return '征服者3';
        case 'conqueror_2':
            return '征服者2';
        case 'conqueror_1':
            return '征服者1';
        case 'diamond_3':
            return '钻石3';
        case 'diamond_2':
            return '钻石2';
        case 'diamond_1':
            return '钻石1';
        case 'platinum_3':
            return '白金3';
        case 'platinum_2':
            return '白金2';
        case 'platinum_1':
            return '白金1';
        case 'gold_3':
            return '黄金3';
        case 'gold_2':
            return '黄金2';
        case 'gold_1':
            return '黄金1';
        case 'silver_3':
            return '白银3';
        case 'silver_2':
            return '白银2';
        case 'silver_1':
            return '白银1';
        case 'bronze_3':
            return '青铜3';
        case 'bronze_2':
            return '青铜2';
        case 'bronze_1':
            return '青铜1';
        default:
            return 'invalid';
    }
};
export const xiaoren =(index:string) => {
    switch (index) {
        case '1v1':
            return 1
        case '2v2':
            return 2
        case '3v3':
            return 3
        case '4v4':
            return 4
        default:
            return 0
    }
}
