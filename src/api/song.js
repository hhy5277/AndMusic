import request from '@/utils/request'
export function getSongDetailAPI(ids) {
    return request({
        methods: 'get',
        url: '/song/detail',
        params: {
            ids
        }
    });
}
/**
 * @description: 
 * @return {*}
 * 音乐是否可用
 * 说明: 调用此接口,传入歌曲 id, 可获取音乐是否可用,返回 { success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }
 * 必选参数 : id : 歌曲 id
 * 可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
 * 接口地址 : /check/music
 * 调用例子 : /check/music?id=33894312
 */
 export function getCheckMusicAPI(id) {
    return request({
        methods: 'get',
        url: '/check/music',
        params: {
            id
        }
    });
}