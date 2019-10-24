<template>
    <div>
        <h2>问卷调查填写</h2>
        <p>请选择您的兴趣爱好</p>
        <input type="checkbox"  value="看书" v-model="hobby"/><label>看书</label>
        <input type="checkbox"  value="游泳"v-model="hobby"/><label>游泳</label>
        <input type="checkbox"  value="跑步" v-model="hobby"/><label>跑步</label>
        <input type="checkbox"  value="看电影" v-model="hobby"/><label>看电影</label>
        <input type="checkbox"  value="听音乐" v-model="hobby"/><label>听音乐</label>
        <input type="checkbox"  value="动漫" v-model="hobby"/><label>动漫</label><br/>
        <button @click="NextClick()">下一步</button>
        <button @click="lastClick()">上一步</button>
        <button type="reset" @click="doClear" v-model="flag">重置</button>
    </div>
</template>

<script>
    export default {
        name: "aihao",
        data(){
            return{
             flag:false,
                hobby:[]
            }
        },
        methods:{
           doClear(){
              if(!this.flag){
                  this.hobby=[]
              }

           },
            NextClick(){
                this.$router.push('/xingxi');
                this.$store.commit("addhobbies",this.hobby)
            },
            lastClick(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>