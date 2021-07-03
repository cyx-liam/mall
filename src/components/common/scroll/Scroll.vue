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
            probeType: {    //是否派发滚动事件
                type: Number,
                default: 3
            },
            click:{         //是否支持点击事件
                type:Boolean,
                default:true
            },
            pullUpLoad:{    //是否支持上拉加载
                type:Boolean,
                default:true
            },
            bounceTop:{     //是否支持顶部弹动
                type:Boolean,
                default:true
            },
            bounceBottom:{  //是否支持底部弹动
                type:Boolean,
                default:true
            },
            scrollbar:{     //是否显示滚动条
                type:Boolean,
                default:true
            },
            mouseWheel:{    //是否支持鼠标滚动滚动
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
                scrollbar: this.scrollbar,
                mouseWheel:this.mouseWheel,
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