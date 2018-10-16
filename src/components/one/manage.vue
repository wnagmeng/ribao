<template>

    <div id="manage">
        
        <el-table
            :data="tableData4"
            style="width: 100%">
            <el-table-column
            fixed
            prop="date"
            label="项目日期"
            >
            </el-table-column>
            <el-table-column
            prop="name"
            label="项目成员"
            >
            </el-table-column>
            <el-table-column
            prop="province"
            label="项目名称"
            >
            </el-table-column>
            <el-table-column
            prop="city"
            label="项目性质"
            >
            </el-table-column>
            <el-table-column
            prop="address"
            label="项目介绍"
            >
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            >
            <template slot-scope="scope">
                <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData4)"
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
    
    export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData4: [{
          date: '2018-10-16',
          name: 'A组',
          province: '日报系统',
          city: '内部测试',
          address: '一个前端日报',
        }, {
          date: '2018-10-16',
          name: 'A组',
          province: '日报系统',
          city: '内部测试',
          address: '一个前端日报',
        },{
          date: '2018-10-16',
          name: 'A组',
          province: '日报系统',
          city: '内部测试',
          address: '一个前端日报',
        },{
          date: '2018-10-16',
          name: 'A组',
          province: '日报系统',
          city: '内部测试',
          address: '一个前端日报',
        },{
          date: '2018-10-16',
          name: 'A组',
          province: '日报系统',
          city: '内部测试',
          address: '一个前端日报',
        },{
          date: '2018-10-16',
          name: 'A组',
          province: '日报系统',
          city: '内部测试',
          address: '一个前端日报',
        },{
          date: '2018-10-16',
          name: 'A组',
          province: '日报系统',
          city: '内部测试',
          address: '一个前端日报',
        },{
          date: '2018-10-16',
          name: 'A组',
          province: '日报系统',
          city: '内部测试',
          address: '一个前端日报',
        },{
          date: '2018-10-16',
          name: 'A组',
          province: '日报系统',
          city: '内部测试',
          address: '一个前端日报',
        },{
          date: '2018-10-16',
          name: 'A组',
          province: '日报系统',
          city: '内部测试',
          address: '一个前端日报',
        }]
      }
    }
  }
</script>
<style scoped>
    #manage{
        width:80%;
        margin:100px auto;
    }
</style>