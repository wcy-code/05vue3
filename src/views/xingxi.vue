<template>
    <div>

        <h2>问卷调查表填写</h2>
        <p>3.请介绍一下自己</p>
        <textarea v-model="xingxi"></textarea><br>
        <button @click="handleClick()">提交</button>
        <button @click="lastClick()">上一步</button>
        <button @click="reset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "xingxi",
        data(){
            return{
                xingxi:''
            }
        },
        methods:{
            handleClick(){
                this.$router.push('/all');
                this.$store.commit("addxingxi",this.xingxi);
            },
            lastClick(){
                this.$router.push('/aihao');
            },
            reset(){
                this.xingxi='';
            },
        }
    }
</script>

<style scoped>

</style>