<template>
  <div class="home">
    <Header :username="username"/>
    <div class="content">
    <Sidebar />
    <div class="riigt-content">
     <OpendMenu/>
     <router-view/>
     </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import Sidebar from "@/components/sidebar.vue";
import OpendMenu from '@/components/opendmenu.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  components: {
    Header,
    Sidebar,
    OpendMenu
  },
  data(){
    return{
 
    }
  },
  computed:{
   ...mapState({
     username:state=>state.login.username
   })
  }
};
</script>
<style scoped>
.content{
  display: flex;
}
</style>

