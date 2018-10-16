<template>
    <div id="write">
        <h3>编写日报</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="项目名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="项目人员" prop="region">
            <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="A" name="type"></el-checkbox>
            <el-checkbox label="B" name="type"></el-checkbox>
            <el-checkbox label="C" name="type"></el-checkbox>
            <el-checkbox label="D" name="type"></el-checkbox>
            <el-checkbox label="E" name="type"></el-checkbox>
            <el-checkbox label="F" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
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
        <el-form-item label="项目性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="公司重要项目" name="type"></el-checkbox>
            <el-checkbox label="推广项目" name="type"></el-checkbox>
            <el-checkbox label="内部项目" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        
        <el-form-item label="项目日报" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { type: 'array', required: true, message: '请至少选择一位成员', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个项目性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写项目简介', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
    #write{
        width:80%;
        margin:100px auto;
    }
    #write h3{
        font-size: 30px !important;
        text-align: center;
        line-height: 100px;
    }
</style>