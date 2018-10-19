<template>  
  <div>
    <div class="main-div">
        <keep-alive>
          <router-view />
        </keep-alive>
    </div>
    <div>
      <nav>
        <el-menu
            v-model="active" @change="changeTabbar(active)" 
            :default-active="activeIndex2"
            class="el-menu-demo fl"
            mode="horizontal"
            @select="handleSelect"
            background-color="#4c92d4"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1"><router-link to="/">日报系统</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="groups">小组列表</router-link></el-menu-item>
          <el-menu-item index="5">
            <router-link to="person">人员列表</router-link>
          </el-menu-item>
          <el-menu-item index="2"><router-link to="write">编写日报</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="manage">日报列表</router-link> </el-menu-item>
        </el-menu>
      </nav>
    </div>
  </div>    
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      active: 0,
      nowPath: "" //当前路径
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
nav {
  width: 100%;
  background: #4c92d4;
  position: fixed;
  top: 0;
}
</style>
