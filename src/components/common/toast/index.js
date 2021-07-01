import Toast from './Toast.vue';
export default function(vue) {
    // 创建组件构造器
    const toastconstructor = vue.extend(Toast)

    //创建一个组件对象
    const toast= new toastconstructor()

    //挂载组件
    toast.$mount(document.createElement("div"))

    document.body.appendChild(toast.$el)



    vue.prototype.$toast=toast
};
