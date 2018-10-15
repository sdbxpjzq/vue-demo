<template>
    <!--高度已知, 左右两列 300px,  中间自适应-->
    <div>
        <!--浮动解决方案-->
        <section class="one">
            <div class="parent clearfix">
                <div class="left"></div>
                <div class="right"></div>
                <!--上边2个脱离文本流了-->
                <div class="center">
                    <h1>浮动解决方案</h1>
                    xxxxx
                    yyyyyy
                </div>
            </div>
        </section>

        <!--table解决方案-->
        <section class="two">
            <div class="parent">
                <div class="left"></div>
                <div class="center">
                    <h1>table解决方案</h1>
                    xxxx
                    yyyyyy
                </div>
                <div class="right"></div>
            </div>
        </section>

        <!--网格布局解决-->
        <section class="three">
            <div class="parent">
                <div class="left"></div>
                <div class="center">
                    <h1>网格布局解决方案</h1>
                    xxxx
                    yyyyyy
                </div>
                <div class="right"></div>
            </div>
        </section>

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
<style lang='scss' scoped>
    .clearfix:after {
        content:"";
        display:block;
        height:0;
        clear:both;
    }
    div{
        height: 100px;
    }
    .left,.right{
        width: 300px;
        background: red;
    }

    .one{
        .parent{
            .left{
                float: left;
            }
            .right{
                float: right;
            }
            .center{
                background: pink;
            }
        }
    }

    .two{
        margin-top: 20px;
        .parent{
            width: 100%;
            display: table;
            .left, .right, .center{
                display: table-cell;
            }
            .center{
                background: pink;
            }
        }
    }

    .three{
        margin-top: 20px;
        .parent{
            display: grid;
            width: 100%;
            grid-template-rows: 100px;
            grid-template-columns: 300px auto 300px;
        }
        .center{
            background: pink;
        }
    }
</style>
