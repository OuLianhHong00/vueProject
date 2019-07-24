<template>
<!-- 侧边栏 -->
  <div id="vueapp" class="sidebar">
    <kendo-treeview animation-expand-effects='expand:vertical'>
      <li>{{comList[0]}}
        <ul>
          <li v-for="ilist in fcomList" :key="ilist.index" @click="toRouter(ilist.name)">
            {{ilist.title}}
          </li>
        </ul>
      </li>
       <li>{{comList[1]}}
        <ul>
          <li v-for="i in tcomList" :key="i.index" @click="toRouter(i.name)">
            {{i.title}}
          </li>
        </ul>
      </li>
      <li>{{comList[2]}}
        <ul>
          <li v-for="i in treeComList" :key="i.index" @click="toRouter(i.name)">
            {{i.title}}
          </li>
        </ul>
      </li>
      <li>{{comList[3]}}
        <ul>
          <li v-for="i in fourComList" :key="i">
            {{i}}
          </li>
        </ul>
      </li>
    </kendo-treeview>
</div>
<!-- 头上的动态菜单 -->
</template>

<script>
export default {
  data(){
    return{
      comList:['首页','成员管理','数据分析','成绩管理'],
      fcomList:[{title:'欢迎',name:'welcome',path:'welcome'}],
      tcomList:[{title:'成员增加',name:'memberadd',path:'memberadd'},
      {title:'成员删除',name:'memberdelete',path:'memberdelete'},
      {title:'成员修改',name:'memberupdate',path:'memberdelete'}],
      treeComList:[
        {title:'柱状图分析',name:'chartanalyst',path:'chartanalyst'},
        {title:'图表分析',name:'sparkline',path:'sparkline'},
        {title:'折线图分析',name:'stockChart',path:'stockChart'}],
      fourComList:['成绩列表','成绩分析']

    }
  },
  methods:{
    toRouter(name){
         this.$router.push({name:name})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar{
  width: 200px;
  height: 800px;
  background-color: rgb(16, 37, 61);
}
.sidebar li{
  color: aliceblue;
  font-size: 17px;
  line-height: 40px;
  margin-left: 20px;
}
</style>
