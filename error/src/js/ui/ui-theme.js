export class Theme{
    constructor(){
        this.media = window.matchMedia('(prefers-color-scheme: dark)');
        this.#init()
    }
    #init(){
        this.#changeTheme();
        this.media.addEventListener("change",()=>{this.#changeTheme()})
    }
    #changeTheme(){
        const isDark = this.media.matches;
        document.documentElement.dataset.theme = isDark ? "dark" :"";
    }
}
