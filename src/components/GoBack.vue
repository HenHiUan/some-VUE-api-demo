<template>
    <el-row>
        <el-col :span="2" align="center" @click.native="goback" class="el-icon-arrow-left"></el-col>
        <el-col :span="8"><div v-text="text"></div></el-col>
        <el-col :span="14"></el-col>
    </el-row>
</template>
<script>
export default {
    computed: {
        text() {
            return this.$store.getters.getHeaderTitle
        }
    },
    methods: {
        goback(){
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped>
.el-icon-arrow-left {
  font-size: 22px;
}
</style>

