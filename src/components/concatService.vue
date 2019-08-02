<template>
  <div class="customer-service">
    <el-dialog title="联系客服"
               :visible.sync="isDialog"
               center>
      <el-input v-model="item.input"
                placeholder="*填写注册的账号/电话号码"
                class="padding-bottom"></el-input>
      <el-input type="textarea"
                :rows="8"
                placeholder="*请说明您的情况"
                v-model="item.textarea"
                class="padding-bottom">
      </el-input>
      <el-input placeholder="请输入内容"
                v-model="item.input5"
                class="input-with-select">
        <el-select v-model="item.select"
                   slot="prepend"
                   placeholder="请选择">
          <el-option label="餐厅名"
                     value="1"></el-option>
          <el-option label="订单号"
                     value="2"></el-option>
          <el-option label="用户电话"
                     value="3"></el-option>
        </el-select>
      </el-input>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {
        input :'',
        textarea: '',
        input5: '',
        select:''
      },
      isDialog: this.dialogVisible
    }
  },
  props: ['dialogVisible'],
  watch: {
    'isDialog': {
      handler(newValue) {
        this.$emit('update', newValue)
      }
    },
    'dialogVisible': {
      handler(newValue) {
        this.isDialog = newValue
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .padding-bottom {
    margin-bottom: 24px;
  }
  /deep/.el-dialog {
    width: 400px;
  }
</style>
