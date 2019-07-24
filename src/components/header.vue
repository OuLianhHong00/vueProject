<template>
    <header>
        <p>vue后台管理系统</p>
        <div class="setter">
        <span class="all-set welcome" >欢迎您：{{username}}</span>
        <ul class="all-set langu">
            <li id="f">{{language}}</li>
            <li id="en" @click="choseEnglish">英文</li>
            <li id='china' @click="choseChinese">中文</li>
       </ul>
      
      <ul class="all-set setting">
            <li id="s">设置</li>
            <li id='unload' @click="unLoad">退出登录</li>
            <li id='switch'>切换账号</li>
       </ul> 
       </div>
    </header>
</template>
<script>
export default {
props: {
    'username': String
  },
    data(){
        return {
           language:'中文'
        }
    },
    methods:{
        choseEnglish(){
            this.language='英文'
        },
        choseChinese(){
            this.language='中文'
        },
        unLoad(){
            this.$router.push({name:'login'})
        }
    }
}
</script>
<style scoped>
header{
    height: 70px;
    background-color: rgb(16, 37, 61);
    border:1px solid black;
}
header p{
    color: white;
    width: 180px;
    float: left;
}
header P::before{
    content: url('../img/first.png');
    margin-left: 10px;
    margin-right: 10px;
}
.setter{
    width: 570px;
    float: right;
    display: flex;
    font-size: 16px;
    justify-content: space-around;
}
.setter ul{
    padding: 0;
    margin: 0;
    outline: none;
    width: 100px;
    list-style: none;
    height: auto;
    text-align: left;
}
.all-set{
color: #fff;
display:inline-block;
width: 180px;
margin-left: 5px;
}
.welcome::before{
    content:url('../img/self.png');
    margin-right: 10px;
}
.all-set li{
    line-height: 70px;
    background-color:   rgb(16, 37, 61);
    cursor: pointer;
}
.all-set li:hover{
    color: red;
}
.setter span{
    line-height: 70px;
}
#en,#unload,#switch,#china{
    display: none;
}
.langu:hover #en,
.langu:hover #china{
    display: block;
    
}
.setting:hover #unload,
.setting:hover #switch{
    display: block;
}
.langu li{
    list-style: url('../img/language.png');
}
.setting li{
    list-style: url('../img/setting.png')
}
#f~li{
    text-align: center;
}
#s~li{
    text-align: center;
}
</style>

