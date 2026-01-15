import{Board}from"../ui/ui-board.js";
import{Navigation}from"../ui/ui-navigation.js";
import{Status}from"../ui/ui-status.js";
import{Theme}from"../ui/ui-theme.js";
import{getParam}from"../logic/get-param.js";
import{searchError}from"../domain/domain-error.js";
import{Page}from"../ui/ui-page.js";
import{boardData}from"../domain/domain-board.js";


export class App{
    constructor(){
        this.THEME = new Theme();
        this.BOARD = new Board();
        this.NAV = new Navigation();
        this.STATUS = new Status();
        this.PAGE = new Page();

        this.state ={
            code:"",
            title:"",
            message:"",
        }
    }
    start(){
        this.#getStatus();
        this.#renderStatus();
        this.#renderPage();
        this.#setBoard(this.state.code);
        this.#initNav();
    }
    #getStatus(){
        const code = getParam(location.search);
        const obj = searchError(code);
        this.state.code = code;
        this.state.message = obj.message;
        this.state.title = obj.title;
    }
    #renderStatus(){
        this.STATUS.setCode(String(this.state.code ?? "???"))
        this.STATUS.setText(this.state.message)
    }
    #renderPage(){
        this.PAGE.changeTitle(String(this.state.title ?? "???"));
    }
    #initNav(){
        this.NAV.setEventBackToPage(()=>{history.back()})
        this.NAV.setEventTopToPage(()=>{location.href = "/"})
    }
    #setBoard(code){
        const LIST = boardData(code);
        LIST.forEach((e)=>{
            this.BOARD.addBoard(e);
        })
    }
}