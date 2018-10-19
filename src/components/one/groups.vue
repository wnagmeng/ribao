<template>
    <div id="manage">
        <el-table
            :data="data"
            style="width: 100%">
            <el-table-column
            fixed
            prop="id"
            label="小组id"
            >
            </el-table-column>
            <el-table-column
            prop="name"
            label="小组名称"
            >
            </el-table-column>        
        </el-table>
        <p>
          总数：{{this.total}}
        </p>
    </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      data: [
        {
          id: "",
          name: ""
        }
      ],
      total: ""
    };
  },
  created() {
    axios({
      url: "http://192.168.61.40:9081/groups",
      methods: "get"
    }).then(response => {
      this.data = response.data.data;
      this.total = response.data.total;
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