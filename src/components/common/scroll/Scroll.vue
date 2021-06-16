<template>
    <div ref="wrapper" class="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        data() {
            return {
                scroll: null
            }
        },
        props: {
            probeType: {
                type: Number,
                default: 3
            },
            click:{
                type:Boolean,
                default:false
            },
            pullUpLoad:{
                type:Boolean,
                default:false
            },
            bounceTop:{
                type:Boolean,
                default:true
            },
            bounceBottom:{
                type:Boolean,
                default:true
            }
        },
        mounted () {
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:this.click,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad,
                scrollY: true,
                scrollbar: true,
                mouseWheel:{},
                bounce: {
                    top: this.bounceTop,
                    bottom:this.bounceBottom
                }
            })
            this.scroll.on("scroll",(position)=>{
                this.$emit("scroll",position)
            })

            this.scroll.on("pullingUp",()=>{
                // console.log("上拉加载");
                this.$emit("pullUpLoad")
                this.scroll.finishPullUp()
            })
        },
        methods: {
            refresh(){
                this.scroll.refresh();
                // console.log("刷新");
            },
            scrollTo(x,y,time=300) {
                this.scroll.scrollTo(x,y,time);
            }
        },
    }
</script>

<style scoped>
    .wrapper {
        overflow: hidden;
    }
</style>