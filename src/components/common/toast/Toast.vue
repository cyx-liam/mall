<template>
    <transition name="isToast">
        <div v-if="isShow" class="toast">
            <span>{{message}}</span>
        </div>
    </transition>
    
</template>

<script>
    export default {
        // props: {
        //     message: {
        //         type: String,
        //         default: "提示信息"
        //     },
        //     isShow: {
        //         type: Boolean,
        //         default:true
        //     },
        // },
        data() {
            return {
                message: "",
                isShow:false
            }
        },
        methods: {
            show(message,time=1000) {
                this.message = message
                this.isShow = true

                setTimeout(()=>{
                    this.isShow = false
                },time)
            }
        },
    }
</script>

<style scoped>
    .toast{
        display:inline-block;
        padding: 8px 13px;
        border-radius: 5px;
        z-index: 10;
        position:fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: rgba(0, 0, 0, 0.75);
        /* opacity: 0.75; */
        color: #fff;
        font-size: 18px;
    }
    .isToast-enter-active{
        animation: isShow .4s;
    }
    .isToast-leave-active{
        animation: isShow .4s reverse;
    }
    @keyframes isShow {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
</style>