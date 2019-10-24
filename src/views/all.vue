<template>
    <div>
        <h2>问卷调查填写</h2>
        <div>您的性别是：{{this.$store.state.sex}}</div>
        <div>您的个人爱好是：{{this.$store.state.hobbies.join('、')}}</div>
        <div>个人简介：{{this.$store.state.xingxi}}</div>
    </div>
</template>

<script>
    export default {
        name: "all"
    }
</script>

<style scoped>

</style>