import {fromJS} from "immutable";

const defaultState = fromJS({
        topicList: [
            {
                id: 1,
                title: "社会热点",
                imgUrl: "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/8d5494eef01f3a29bde7e3c69a25bc315c607c8e.jpg"
            },
            {
                id: 2,
                title: "今日新闻",
                imgUrl: "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/8d5494eef01f3a29bde7e3c69a25bc315c607c8e.jpg"
            },
        ],
        articleList: [
            {
                id: 1,
                title: "1财富自由｜这喜人的一片红。",
                desc: "1今天这波行情，怕是想浮亏都不容易吧？ 我反正今天终于感觉压在心上许久的五指山总算松动了一下，可喜可贺。 不过呢，要说距离年前全部浮盈回归，还是有...",
                imgUrl: "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/8d5494eef01f3a29bde7e3c69a25bc315c607c8e.jpg"
            },
            {
                id: 2,
                title: "2财富自由｜这喜人的一片红。",
                desc: "2今天这波行情，怕是想浮亏都不容易吧？ 我反正今天终于感觉压在心上许久的五指山总算松动了一下，可喜可贺。 不过呢，要说距离年前全部浮盈回归，还是有...",
                imgUrl: "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/8d5494eef01f3a29bde7e3c69a25bc315c607c8e.jpg"
            },
            {
                id: 3,
                title: "3财富自由｜这喜人的一片红。",
                desc: "3今天这波行情，怕是想浮亏都不容易吧？ 我反正今天终于感觉压在心上许久的五指山总算松动了一下，可喜可贺。 不过呢，要说距离年前全部浮盈回归，还是有...",
                imgUrl: "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/8d5494eef01f3a29bde7e3c69a25bc315c607c8e.jpg"
            }
        ],
        recommendList: [
            {
                id: 1,
                imgUrl: "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/8d5494eef01f3a29bde7e3c69a25bc315c607c8e.jpg"
            },
            {
                id: 2,
                imgUrl: "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/8d5494eef01f3a29bde7e3c69a25bc315c607c8e.jpg"
            },
        ]
    })
;

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}