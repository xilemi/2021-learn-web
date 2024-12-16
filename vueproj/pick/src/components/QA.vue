<template>
<el-scrollbar>
  <div class="title">
    <img :src="businessHeader" alt="" class="photo">
    <span>企业名字</span>
    <span>浏览次数</span>
    <button @click='show()'>{{$store.state.attention}}</button>
  </div >
  <div>
    <div  class="my-reply">
        <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
        <div class="reply-info" >
            <div 
            tabindex="0" 
            contenteditable="true" 
            id="replyInput" 
            spellcheck="false" 
            placeholder="输入提问..." 
            class="reply-input" 
            @focus=""  
            @input="onDivInput($event)"
            >
            </div>
            <el-upload
             action="https://jsonplaceholder.typicode.com/posts/"
             list-type="picture-card"
             :on-preview="handlePictureCardPreview"
             :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
        </div>
        <div class="reply-btn-box" v-show="btnShow">
            <el-checkbox class="noId-box" v-model='noId'>匿名</el-checkbox>
            <el-button class="reply-btn" size="medium" @click="sendComment" type="primary">发表问题</el-button>
        </div>
    </div>
    <!-- 展示评论 -->
    <div v-for="(item,i) in comments" :key="i" class="author-title reply-father">
        <el-avatar class="header-img" :size="40" :src="item.headImg"></el-avatar>
        <div class="author-info">
            <span class="author-name">{{item.name}}</span>
            <span class="author-time">{{item.time}}</span>
        </div>
        <div class="icon-btn">
            <span @click="showComments(i,item.name,item.id)"><i class="iconfont el-icon-s-comment"></i>{{item.reply.length}}</span>
            <span @click='commentLike(i,item.like,item.isLike)'><i class="iconfont el-icon-caret-top"></i>{{item.like}}</span>
        </div>
        <div class="talk-box">
            <p>
                <span class="reply">{{item.comment}}</span>
            </p>    
        </div>
        <!-- 展示评论回复 -->
        <div class="reply-box">
            <div v-for="(reply,j) in item.reply" :key="j" class="author-title">
                <el-avatar class="header-img" :size="40" :src="reply.fromHeadImg"></el-avatar>
                <div class="author-info">
                    <span class="author-name">{{reply.from}}</span>
                    <span class="author-time">{{reply.time}}</span>
                </div>
                <div class="icon-btn">
                    <span @click="showReplyInput(i,j,reply.from,reply.id)">回复</span>
                    <span @click='commentReplyLike(i,j,reply.like,reply.isLike)'><i class="iconfont el-icon-caret-top"></i>{{reply.like}}</span>
                </div>
                <div class="talk-box">
                    <p>
                        <span>回复 {{reply.to}}:</span>
                        <span class="reply">{{reply.comment}}</span>
                    </p>
                </div>
            </div>
        </div>
         <!-- 评论回复 -->
        <div  v-show="item.inputShow" class="my-reply my-comment-reply">
            <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
            <div class="reply-info" >
                <div tabindex="0" contenteditable="true" spellcheck="false" placeholder="输入评论..."   @input="onDivInput($event)"  class="reply-input reply-comment-input"></div>
            </div>
            <div class=" reply-btn-box">
                <el-button class="reply-btn" size="medium" @click="sendCommentReply(i)" type="primary">发表评论</el-button>
        </div>
    </div>
    </div>
</div>
</el-scrollbar>
</template>
<script>
export default {
    name:'QA',
    data(){
        return{
            btnShow: true,
            noId:false,
            index:'0',
            replyComment:'',
            myName:'Lana Del Rey',
            myHeader:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
            businessHeader:require('../assets/image/企业名片.png'),
            myId:19870621,
            comments:[ 
            {
                    name:'Lana Del Rey',
                    id:19870621,
                    headImg:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
                    comment:'我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
                    time:'2019年9月16日 18:43',
                    commentNum:0,
                    like:15,
                    inputShow:false,
                    isLike:false,
                    reply:[
                        {
                            from:'Taylor Swift',
                            fromId:19891221,
                            fromHeadImg:'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
                            to:'Lana Del Rey',
                            toId:19870621,
                            comment:'我很喜欢你的新专辑！！',
                            time:'2019年9月16日 18:43',
                            like:15,
                            isLike:false,
                            inputShow:false
                        },
                        {
                            from:'Ariana Grande',
                            fromId:1123,
                            fromHeadImg:'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',
                            to:'Lana Del Rey',
                            toId:19870621,
                            comment:'别忘记宣传我们的合作单曲啊',
                            time:'2019年9月16日 18:43',
                            like:5,
                            isLike:false, 
                            inputShow:false
 
                        }
                    ]
                },

            ],
            dialogImageUrl: '',
            dialogVisible: false,
        }
    },
    methods: {
         show(){
                   this.$store.commit('attent')
                },
        showComments(i,name,id){
            this.comments[i].inputShow =true
            this.to=name
            this.toId=id
        },
        showReplyInput(i,j,name,id){
            this.comments[i].inputShow =true
            this.to = this.comments[i].reply[j].from
            this.id=this.comments[i].reply[j].fromId 
        },
        sendComment(){
            if(!this.replyComment){
                 this.$message({
                    showClose: true,
                    type:'warning',
                    message:'提问不能为空'
                })
            }
            else if(this.noId==false){
                let a ={}
                let input =  document.getElementById('replyInput')
                let timeNow = new Date().getTime();
                let time= this.dateStr(timeNow);
                a.name= this.myName
                a.comment =this.replyComment
                a.headImg = this.myHeader
                a.time = time
                a.commentNum = 0
                a.like = 0
                a.isLike=false
                a.inputShow=false
                // 评论回复
                a.reply=[]
                this.comments.push(a)
                this.replyComment = ''
                input.innerHTML = '';
            }
            else{
                let a ={}
                let input =  document.getElementById('replyInput')
                let timeNow = new Date().getTime();
                let time= this.dateStr(timeNow);
                a.name="匿名"
                a.comment =this.replyComment
                a.headImg = this.myHeader
                a.time = time
                a.commentNum = 0
                a.like = 0
                a.isLike=false
                // 回复匿名选项
                // 评论回复
                a.reply=[]
                this.comments.push(a)
                this.replyComment = ''
                input.innerHTML = '';

            }
        },
        
        sendCommentReply(i){
            if(!this.replyComment){
                 this.$message({
                    showClose: true,
                    type:'warning',
                    message:'评论不能为空'
                })
            }else{
                let a ={}
                let timeNow = new Date().getTime();
                let time= this.dateStr(timeNow);
                a.from= this.myName
                a.to = this.to
                a.fromHeadImg = this.myHeader
                a.comment =this.replyComment
                a.time = time
                a.like = 0
                a.isLike=false
                this.comments[i].commentNum++
                this.comments[i].reply.push(a)
                this.replyComment = ''
                document.getElementsByClassName("reply-comment-input")[i].innerHTML = ""
            }
        },
        onDivInput: function(e) {
            this.replyComment = e.target.innerHTML;
        },
        dateStr(date){
            //获取js 时间戳
            var time=new Date().getTime();
            //去掉 js 时间戳后三位，与php 时间戳保持一致
            time=parseInt((time-date)/1000);
            //存储转换值 
            var s;
            if(time<60*10){//十分钟内
                return '刚刚';
            }else if((time<60*60)&&(time>=60*10)){
                //超过十分钟少于1小时
                s = Math.floor(time/60);
                return  s+"分钟前";
            }else if((time<60*60*24)&&(time>=60*60)){ 
                //超过1小时少于24小时
                s = Math.floor(time/60/60);
                return  s+"小时前";
            }else if((time<60*60*24*30)&&(time>=60*60*24)){ 
                //超过1天少于30天内
                s = Math.floor(time/60/60/24);
                return s+"天前";
            }else{ 
                //超过30天ddd
                var date= new Date(parseInt(date));
                return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
            }
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      commentLike(i,like,isLike){
          if(this.comments[i].isLike==false){
            this.comments[i].isLike=!this.comments[i].isLike
              this.comments[i].like++
          }
          else if(this.comments[i].isLike==true){
            this.comments[i].isLike=!this.comments[i].isLike
              this.comments[i].like--
          }
      },
      commentReplyLike(i,j,replyLike,replyIsLike){
         if(this.comments[i].reply[j].isLike==false){
            this.comments[i].reply[j].isLike=!this.comments[i].reply[j].isLike
            this.comments[i].reply[j].like++
      }
      else if(this.comments[i].reply[j].isLike==true){
        this.comments[i].reply[j].isLike=!this.comments[i].reply[j].isLike
        this.comments[i].reply[j].like--
        }
    }, 
}
}
</script>

<style scoped>
    .photo{
    width: 100px;
    height: 100px;
    background-color: cornsilk;
    border-radius: 100%;
    margin-left: 100px;
  }
  .title{
  width: 1440px;
  height: 100px;
  margin: 0 auto;
  background-color:#f5f5f5;
}
.title span{
  font-size: 18px;
  margin-left: 200px;
}
.title>button{
  font-size: 18px;
  margin-left: 200px;
  background-color: #f5f5f5;
}
  .my-reply {
	 padding: 10px;
	 background-color: #fafbfc;
}
 .my-reply .header-img {
	 display: inline-block;
	 vertical-align: top;
}
 .my-reply .reply-info {
	 display: inline-block;
	 margin-left: 5px;
	 width: 90%;
}
 @media screen and (max-width: 1200px) {
	 .my-reply .reply-info {
		 width: 80%;
	}
}
 .my-reply .reply-info .reply-input {
	 min-height: 20px;
	 line-height: 22px;
	 padding: 10px 10px;
	 color: #ccc;
	 background-color: #fff;
	 border-radius: 5px;
}
 .my-reply .reply-info .reply-input:empty:before {
	 content: attr(placeholder);
}
 .my-reply .reply-info .reply-input:focus:before {
	 content: none;
}
 .my-reply .reply-info .reply-input:focus {
	 padding: 8px 8px;
	 border: 2px solid #00f;
	 box-shadow: none;
	 outline: none;
}
 .my-reply .reply-btn-box {
	 height: 25px;
	 margin: 10px 0;
}
 .my-reply .reply-btn-box .reply-btn {
	 position: relative;
	 float: right;
	 margin-right: 15px;
}
 .noId-box{
     position: relative;
     float: right;
     margin-right: 20px;
 }
 .my-comment-reply {
	 margin-left: 50px;
}
 .my-comment-reply .reply-input {
	 width: flex;
}
 .author-title:not(:last-child) {
	 border-bottom: 1px solid rgba(178,186,194,0.3);
}
 .author-title {
	 padding: 10px;
}
 .author-title .header-img {
	 display: inline-block;
	 vertical-align: top;
}
 .author-title .author-info {
	 display: inline-block;
	 margin-left: 5px;
	 width: 60%;
	 height: 40px;
	 line-height: 20px;
}
 .author-title .author-info >span {
	 display: block;
	 cursor: pointer;
	 overflow: hidden;
	 white-space: nowrap;
	 text-overflow: ellipsis;
}
 .author-title .author-info .author-name {
	 color: #000;
	 font-size: 18px;
	 font-weight: bold;
}
 .author-title .author-info .author-time {
	 font-size: 14px;
}
 .author-title .icon-btn {
	 width: 30%;
	 padding: 0 !important;
	 float: right;
}
 @media screen and (max-width: 1200px) {
	 .author-title .icon-btn {
		 width: 20%;
		 padding: 7px;
	}
}
 .author-title .icon-btn >span {
	 cursor: pointer;
}
 .author-title .icon-btn .iconfont {
	 margin: 0 5px;
}
 .author-title .talk-box {
	 margin: 0 50px;
}
 .author-title .talk-box >p {
	 margin: 0;
}
 .author-title .talk-box .reply {
	 font-size: 16px;
	 color: #000;
}
 .author-title .reply-box {
	 margin: 10px 0 0 50px;
	 background-color: #efefef;
}
.reply-pic{
    width: 100px;
    height: 100px;
}
</style>