<template>
    <div>
        <h2>问卷调查填写</h2>
        <p>1.请问您的性别是：</p>
        <input v-model="sex" type="radio" value="男" /><label>男性</label>
        <input v-model="sex" type="radio" value="女" /><label>女性</label>
        <input v-model="sex" type="radio" value="保密" /><label>保密</label><br>
        <button @click="handleClick()">下一步</button>
        <button @click="reset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "sex",
        data(){
            return{
               sex:'保密'
            }
        },
        methods:{
            handleClick:function(){
                this.$store.commit("addsex",this.sex)
                this.$router.push('/aihao')
            },
            reset:function(){
                this.sex='保密'

            }
        }
    }
</script>

<style scoped>

</style>