<template>

    <div id="manage">
        
        <el-table
            :data="data"
            style="width: 100%">
            
            <el-table-column
            prop="groupId"
            label="组别id"
            >
            </el-table-column>
            <el-table-column
            prop="personName"
            label="人员名称"
            >
            </el-table-column>
            <el-table-column
            prop="content"
            label="日报内容"
            >                        
            </el-table-column>
             <el-table-column
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, scope.row)"
                  type="text"
                  size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>  
        </el-table>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      key: "123456"
    };
  },
  methods: {
    //请求删除
    deleteRow(index, rows) {
      axios
        .delete("http://192.168.61.40:9081/daily", {
          data: { "id": rows.id, "key": this.key },
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          if (res) {
            this.$message({
              message: "恭喜你，删除组别成功",
              type: "success"
            });
          }
        })
        .catch(function(res) {
          console.log("请求失败");
          console.log(res);
        });
    }
  },

  created() {
    axios({
      //请求数据
      url: "http://192.168.61.40:9081/dailies",
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
</style>