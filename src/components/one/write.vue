<template>
    <div id="write">
        <h3>编写日报</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">      
        <el-form-item label="项目时间" required>
            <el-col :span="11">
            <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-form-item prop="date2">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="人员id" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="a" name="type"></el-checkbox>
            <el-checkbox label="b" name="type"></el-checkbox>
            <el-checkbox label="c" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        
        <el-form-item label="项目日报" prop="content">
            <el-input type="textarea" v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      ruleForm: {
        date1: "",
        date2: "",
        type: [],
        content: "" //项目内容
      },
      rules: {
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [{ type: "array" }],
        content: [
          { required: true, message: "请填写项目简介", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //发送表单
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {

        if (valid) {
          var url = "http://192.168.61.40:9081/daily";
          //时间格式转换
          var date = new Date();
          date =
            date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate() +
            " " +
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds();
          //发送的数据
          var params = {
            content: this.ruleForm.content,
            date: date,
            personId: parseInt(this.ruleForm.type.length)
          };
          axios
            .post(url, JSON.stringify(params), {
              headers: {
                "Content-Type": "application/json"
              }
            })
            .then(res => {
              console.log(res);
              if (res.status == 200) {
                if (res.data.errorCode) {
                  this.$message(res.data.message);
                } else {
                  this.$message({
                    message: "恭喜你，添加单组成功",
                    type: "success"
                  });
                  this.addVisible = false;
                }
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
#write {
  width: 80%;
  margin: 100px auto;
}
#write h3 {
  font-size: 30px !important;
  text-align: center;
  line-height: 100px;
}
</style>