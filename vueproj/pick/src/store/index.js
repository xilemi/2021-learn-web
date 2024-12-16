import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        // 这里还要讲请求过来的数据进行读取，看是否关注
        isAttention:false,
        attention:'关注',
        isFavorites:false,
        favorites:'收藏',
        // 在这里来一个获取到用户id就把showid改成true 并且能够访问 qa
        showid:false,
    },
    mutations:{
        attent(state){
            if(state.isAttention==false){
                state.isAttention=!state.isAttention
                state.attention='已关注'
                // 向用户的关注表里添加此企业
            }
            else if(state.isAttention==true){
                state.isAttention=!state.isAttention
                state.attention='关注'
                // 向用户的关注表里删除此企业
            }
        },
        collect(state){
            if(state.isFavorites==false){
                state.isFavorites=!state.isFavorites
                state.favorites='已收藏'
            }
            else if(state.isFavorites==true){
                state.isFavorites=!state.isFavorites
                state.favorites='收藏'
            }
        },
        commitQuest(state,request){
            state.requestData.push(request)
        }
    }
})

export default store