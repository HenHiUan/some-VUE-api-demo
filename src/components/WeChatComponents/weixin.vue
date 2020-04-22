<template>
    <div id="wcCare">
        <el-row v-for="(item,i) in friends" :key="i" class="card">
            <el-col :span="4" class="toux" justify="center" align="middle">
                {{item.id}}
            </el-col>
            <el-col :span="20" class="xinxi">
                <el-col :span="20" class="czjz" :gutter="10">
                    <el-row class="wxm">{{item.name}}</el-row>
                    <el-row class="hua lsj">嗯嗯</el-row>
                </el-col>
                <el-col :span="4" class="czjz">
                    <el-row class="time">15:15</el-row>
                    <el-row class="sy lsj">
                        <div class="el-icon-bell"></div>
                    </el-row>
                </el-col>
            </el-col>
        </el-row>
        <p>{{this.mixin}}</p>
        <input type="text" v-model="text">
        <ul v-show="text">
            <li v-for="(item, index) in filterShoppingList" :key="index">
                {{ item }}
            </li>
        </ul>
        <!-- <Footer/> -->
    </div>
</template>
<script>
// import Footer from '../Footer'
export default {
    // components: {
    //     Footer
    // },
    computed: {
        filterShoppingList: function () {
            var text = this.text;
            var shoppingList = this.shoppingList;
            return shoppingList.filter(function (item) {
                return item.toLowerCase().indexOf(text.toLowerCase()) != -1
            });
        },
        key() {
            if (this.text) {
                return true
            }
            return false
        }
    },
    data() {
        return {
            text: '',
            shoppingList: ['abc', 'cba', 'nba', 'abn'],
            friends: [{
                name: 'Xuan',
                id: '123'
            }, {
                name: 'jerry',
                id: '456'
            }]
        };
    }
}
</script>

<style scoped>
.card {
  height: 60px;
}
.toux {
  height: 100%;
  line-height: 60px;
}
.xinxi {
  height: 100%;
  border-bottom: 1px solid #ccc;
}
.czjz {
  padding-top: 8px;
}
.lsj {
  padding-top: 5px;
}
.sy {
  padding-right: 13px;
  text-align: right;
}
</style>


