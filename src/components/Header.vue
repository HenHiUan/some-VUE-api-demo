<template>
    <div class="Header" v-show="contorlHeader">
        <el-row>
            <el-col :span="4" align="center" v-text="text"></el-col>
            <el-col :span="20"></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            path: '',
            text: ''
        }
    },
    computed: {
        contorlHeader() {
            if (this.$route.path == '/weChat') {
                this.text = "微信";
                return true;
            }
            if (this.$route.path == '/txl') {
                this.text = "通讯录";
                return true;
            }
            if (this.$route.path == '/fj') {
                this.text = "附近";
                return true;
            }
            return false;
        }
    },
    watch: {
        "$route.path"(v) {
            this.path = v;
        }
    },
}
</script>

<style lang="scss" scoped>
.Header {
  height: 50px;
  line-height: 50px;
  background: #eee;
  .el-row {
    height: 100%;
  }
  .el-col {
    height: 100%;
  }
}
</style>


