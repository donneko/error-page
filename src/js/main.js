import{App}from"./app/app.js";

function boot(fn){
    if(document.readyState === "loading"){
        document.addEventListener("DOMContentLoaded",()=>{fn()},{once:true})
    }else{
        fn()
    }
}
boot(()=>{
    const app = new App;
    app.start();
})