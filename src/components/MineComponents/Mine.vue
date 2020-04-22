<template>
	<div class="Mine">
		<el-row class="demo-avatar demo-basic">
			<el-col :span="12">
				<div class="demo-basic--circle">
					<div class="block">
						<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
							<img v-if="imageUrl" :src="imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</div>
				</div>
			</el-col>
			<div class="el-inf">
				<p class="el-b" :id="fData.uuid">{{fData.title}}</p>
				<p class="el-w">微信号：TT__Online</p>
			</div>
		</el-row>
		<div class="el-con">
			<ul class="el-cart">
				<li v-for="(item, index) in pay" :key="index" @click="cutRouter(index)">
					<i></i>
					<span v-text="item.text"></span>
				</li>
			</ul>
			<p>{{this.mixin = 'mixins'}}</p>
			<p>{{date|filter1('yyyy-mm-dd')}}</p>
		</div>
		<!-- <Footer/> -->
	</div>

</template>
<script>
// import {mixin} from '../mixin/mixin1.js' //局部混入
export default {
	// mixins:[mixin],
	data() {
		return {
			date: '2020/04/21',
			abc: 'xuan',
			pay: [{
				text: '支付',
				url: 'pay'
			}, {
				text: '收藏',
				url: 'sc'
			}, {
				text: '相册',
				url: 'xc'
			}, {
				text: '卡包',
				url: 'kb'
			}, {
				text: '表情',
				url: 'bq'
			}, {
				text: '设置',
				url: 'sz'
			},],
			imageUrl:
				"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
		};
	},
	watch: {
		fData: {
			handler(newV, oldV) {
				console.log(newV)
			},
			immediate: true
		}

	},
	props: {
		fData: {
			type: Object,
			default: {
				title:'Hins',
        uuid:'xuan'
			}
		}
	},
	methods: {
		handleAvatarSuccess(res, file) {
			this.imageUrl = URL.createObjectURL(file.raw);
		},
		beforeAvatarUpload(file) {
			const isJPG = file.type === "image/jpeg";
			const isLt2M = file.size / 1024 / 1024 < 2;

			if (!isJPG) {
				this.$message.error("上传头像图片只能是 JPG 格式!");
			}
			if (!isLt2M) {
				this.$message.error("上传头像图片大小不能超过 2MB!");
			}
			return isJPG && isLt2M;
		},
		cutRouter(index) {
			this.$router.push({
				path: this.pay[index].url
			});
			this.$store.commit("change", this.pay[index].text);
		}
	}
};
</script>

<style scoped>
.Mine {
  height: 100%;
  background: #eee;
}
.demo-avatar {
  display: flex;
  background: white;
  padding: 15px 10px 15px 20px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
.el-col-12 {
  width: 80px;
}
.el-inf {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.el-inf p {
  padding-left: 20px;
}
.el-b {
  font-weight: bolder;
}

.el-cart li {
  background: white;
  height: 50px;
  line-height: 50px;
  display: flex;
}
.el-cart li:last-child,
.el-cart li:first-child {
  margin: 10px 0;
}
.el-cart li i {
  flex: 1.5;
}
.el-cart li span {
  flex: 8.5;
}
</style>


