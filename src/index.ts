import type {App} from 'vue'

//MutationObserver  监听子集的变化、属性的变化，以及增删改查
//ResizeObserver 监听元素宽高的变化
function useResize(el:HTMLElement,cb:Function){

    let resize = new ResizeObserver((entries)=>{
        cb(entries[0].contentRect)
    })

    resize.observe(el)
}

const install = (app:App)=>{
    app.directive('resize',{
        mounted(el,binding){
            useResize(el,binding.value)
        }
    })
}

useResize.install = install;

export default useResize;