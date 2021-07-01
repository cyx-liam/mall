<template>
    <div>
        <div class="selector" :class="{'selector-active':active}"><img src="../../../assets/img/cart/tick.svg" alt=""></div>
    </div>
</template>

<script>
    export default {
        props: {
            active: {
                type:Boolean,
                default: false
            },
        },
    }
</script>

<style scoped>
    .selector{
        border-radius: 50%;
        height: 20px;
        width: 20px;
        border:2px solid #ccc
    }
    .selector-active{
        background-color: var(--color-high-text);
        border:2px solid var(--color-high-text)
    }
</style>