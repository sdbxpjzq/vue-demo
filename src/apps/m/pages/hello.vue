<template>
    <div>
        name mm 1
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: '',
        };
    },
    filters: {},
    beforeCreate() {

    },

    created() {

    },
    beforeMount() {

    },

    mounted() {
        // 这里可以进行 DOM操作
    },

    beforeUpdate() {

    },
    updated() {

    },

    components: {
        // 组件
    },
    props: {},
    computed: {
        hello() {
            return '';
        },
    },
    watch: {
        // 不应该使用箭头函数来定义 watcher 函数
        a(val, oldVal) {
            console.log('new: %s, old: %s', val, oldVal);
        },
    },

    methods: {
        // methods 中不能使用箭头函数
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='css' scoped>

</style>
