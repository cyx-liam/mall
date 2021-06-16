export function debounce(func,delay){     //防抖
    let timer = null;
    return function (){
        if (timer) clearTimeout(timer)
        timer = setTimeout(()=>{
           func()
        },delay)
    }
}