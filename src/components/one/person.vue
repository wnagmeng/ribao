<template>

    <div id="manage">
        前端
        <el-table
            :data="data"
            style="width: 100%">
            <el-table-column
            prop="groupId"
            label="组别id"
            >
            </el-table-column>  
            <el-table-column
            fixed
            prop="id"
            label="人员id"
            >
            </el-table-column>
            <el-table-column
            prop="name"
            label="人员名称"
            >
            </el-table-column>         
        </el-table>
      
       
          总数：{{this.total}}
        
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [
        {
          id: "",
          name: "",
          groupId: ""
        }
      ],
      total: ""
    };
  },
  created() {
    let groupId = 1;
    axios({
      url: "http://192.168.61.40:9081/persons?groupId=" + groupId,
      //url: "http://192.168.61.40:9081/persons" + "?" + "groupId=" + groupId ,
      methods: "get"
    }).then(response => {
      this.data = response.data.data;
    });
    
  }
};
</script>
<style scoped>
#manage {
  width: 80%;
  margin: 100px auto;
}
p {
  padding: 20px;
}
</style>