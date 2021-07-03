<template>
    <div>
        <nav-bar class="nav"><div slot="conter"><span>购物车</span>({{cartLength}})</div></nav-bar>
        <scroll ref="scroll" class="scroll" :click="true" :pullUpLoad="true" :bounceTop="false" :bounceBottom="false">
            <cart-list></cart-list>
        </scroll>
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
    import NavBar from '../../components/common/navbar/NavBar.vue';
    import Scroll from '../../components/common/scroll/Scroll.vue';
    import CartList from './childComps/CartList.vue';
    import CartBottomBar from './childComps/CartBottomBar.vue';
    import {mapGetters} from 'vuex';
    export default {
        components: {
            NavBar,
            Scroll,
            CartList,
            CartBottomBar
        },
        computed: {
            ...mapGetters(['cartLength','cartList'])
        },
        activated(){
            this.$refs.scroll.refresh()
        },
        watch: {
            cartLength(){
                setTimeout(()=>{
                    this.$refs.scroll.refresh()
                },0)
            }
            
        },
    }
</script>

<style scoped>
    .nav{
        background-color:var(--color-tint);
        color: #fff;
    }
    .nav span{
        letter-spacing:5px;
    }
    .scroll{
        position:absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: calc(49px + 44px);
        overflow: hidden;

    }
</style>