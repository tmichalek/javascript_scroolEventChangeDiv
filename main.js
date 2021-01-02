
document.body.style.height=10000 + "px";
let size=10 ;
const div=document.createElement("div");
document.body.appendChild(div);
div.style.position="fixed";
div.style.left=0;
div.style.top=0;
div.style.width= 100 +"%";
div.style.height=size +"px";
div.style.backgroundColor="Green";
let grow =true;
//const shrink =false;

const changeHeight =function(){
   
    if(size > window.innerHeight/2)
        {
            grow=false;
            div.style.backgroundColor="Red";
            
        }

    else if (size <= 0){
        grow=true;
        div.style.backgroundColor="Green";
    }
    
    if (grow){
        size += 10;    
    }

    else{
        size -= 10;
    } 

    div.style.height=size + "px";
}

window.addEventListener("scroll", changeHeight)