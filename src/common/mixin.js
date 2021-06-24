import BackTop from '../components/content/backTop/BackTop.vue';
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isBackTop:false,
        }
    },
    methods: {
        backTop(){
            this.$refs.scroll.scrollTo(0, 0)
        }
    }
}