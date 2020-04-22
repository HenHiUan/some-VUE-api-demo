<template>
    <div class="el-foot" v-show="contorlFooter">
        <ul class="el-foo">
            <li v-for="(item, index) in footer" :key="index" @click="tabs(index)" :class="{'active':item.url === tabBarPath}">
                <i></i>
                <span v-text="item.name"></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            path:'/',
            footer: [{
                name:'微信',
                url:'/weChat'
            },{
                name:'通讯录',
                url:'/txl'
            },{
                name:'附近',
                url:'/fj'
            },{
                name:'我的',
                url:'/'
            }],
        };
    },
    methods: {
        tabs(key) {
            this.$router.push({
                path: this.footer[key].url
            });
            this.showToast(key)
        },
        showToast(key) {
           this.$toast({
                text: this.footer[key].name,
                // type: 'wraning',
                duration: 3000
           })
        },
    },
    computed: {
        tabBarPath(){
            return this.$route.path;
        },
        contorlFooter(){
            if(this.tabBarPath == '/' || this.tabBarPath == '/weChat' || this.tabBarPath == '/txl' || this.tabBarPath == '/fj') {
                return true;
            } else {
                return false;
            }
        }
    },
    watch: {
      "$route.path"(v){
          this.path = v;
      }

    },
    mounted() {
        
    },
        
}
</script>

<style scoped>
.el-foot {
  width: 100%;
  background: white;
  padding-bottom: 5px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.el-foo {
  display: flex;
  height: 50px;
}
.el-foo li {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.el-foo li i {
  flex: 7;
}
.el-foo li span {
  flex: 3;
  text-align: center;
  font-size: 14px;
}
.active {
  color: #58bc58;
}
</style>
