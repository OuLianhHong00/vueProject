<template>
  <div class="about">
   <form action="" id="loginForm"  @submit.prevent="onSubmit">
   <p class="title">欢迎来到VUE管理系统</p>
    <div><input type="text" id="account" class="login" placeholder="请输入你的账号" @blur="sureAccount"/></div>
    <div><input type="password" id="password1" placeholder="请输入你的密码"/></div>
    <div><input type="password" id="password"  placeholder="请确认你的密码" @blur="surePsw"/></div>
    <p id="sure" class="valid">{{promotewords}}</p>
         <div>
            <button class="k-primary" type="submit">登录</button>
        </div>
        <div id="vueapp" class="vue-app" v-if="seen">
    <kendo-dialog ref="dialog" :modal="false" 
                  :width="180"
                  :title="'提示'">
        登录失败
        <kendo-dialog-action :text="'确定'"  :action="sure"></kendo-dialog-action>
    </kendo-dialog>
</div>
   </form>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  data(){
    return{
      promotewords:'两次密码不一致',
      seen:false
    }

  },

  methods:{
    //账号检测
    sureAccount(){
      var status=document.getElementById('sure')
      var account=document.getElementById('account').value;
       if(account==''){
        this.promotewords="账号不能为空";
        status.classList.remove('valid');
        status.classList.add('invalid') 
      }else{
        status.classList.remove('invalid')
        status.classList.add('valid')
      }
    },
    //密码检验
    surePsw(){
      var status=document.getElementById('sure')
      var psw=document.getElementById('password1').value;
      var psw2=document.getElementById('password').value;
      if(psw==psw2){
        status.classList.remove('invalid')
        status.classList.add('valid')
     
         }else{
        this.promotewords="两次密码不一致";
        status.classList.remove('valid')
        status.classList.add('invalid')
      }
    },
    //表单提交
    onSubmit:function(){
      var account=document.getElementById('account').value;
      var psw=document.getElementById('password1').value;
      var psw2=document.getElementById('password').value;
      if(account==123&&psw==123){
        this.$store.commit('setUserName',account)
        this.$router.push('/home')
      }else{
        // var vueapp=document.getElementById('vueapp');
         //vueapp.classList.add('k-rtl')
         this.seen=true;
      }
  },
  sure(){
   // var vueapp=document.getElementById('vueapp');
    //     vueapp.classList.remove('k-rtl')
    this.seen=false
  }
},
}
</script>
<style scoped>
.about{
  position: relative;
  height: -webkit-fill-available;
  height: -moz-fill-available;
  background-image: url('../img/login-bg.jpg');
}
.about form{
  position: absolute;
  width: 380px;
  height: 427px;
  top: 30%;
  right: 20%;
  border: 1px solid rgb(190, 186, 186);
  background-color: rgb(250, 250, 249);
  border-radius: 5px;
}
.title{
  font-size: 25px;
  line-height: 65px;
  border-bottom: 5px solid aqua; 
  margin-bottom: 60px;
  font-weight: 200px;
}
.about form div{
  margin-top: 20px;
}

.about form input{
  width: 250px;
  height: 30px;
  font-size: 16px;
  line-height: 18px;
  border-radius: 5px;
}
.about form button{
  width: 256px;
  height: 40px;
  margin: 0;
  padding: 0;
  outline: none;
  margin-top: 25px;
  background-color: aqua;
  border-radius: 5px;
}
.k-tooltip:not(.k-tooltip-closable) {
    font-size: 14px;
    display: block;
}
.invalid{
  font-size: 14px;
  display: block;
  color: red;
}
.valid{
  display: none;
}
</style>
