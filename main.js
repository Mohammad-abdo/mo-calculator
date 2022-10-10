let display1El =document.querySelector(".display-1");
let display2El =document.querySelector(".display-2");
let temp_resultEl =document.querySelector(".temp-result");
let numberEl =document.querySelectorAll(".number");
let operationEl =document.querySelectorAll(".operation");
let last_entity_clearEl =document.querySelector(".last-entity-clear");
let all_clearEl =document.querySelector(".all-clear");
let  equalEl =document.querySelector(".equal");
let dotEl =document.querySelector(".dot");
let btn_0El =document.querySelector(".btn-0");


let dis1Num = "";
let dis2Num = "";
let result = null;
let lastoperation = "";
let haveDot = false;

numberEl.forEach(number =>{
    number.addEventListener("click", (e) =>{
        if(e.target.innerText === `. ` && !haveDot ){
            haveDot= true;
        }else if( e.target.innerText === `.` && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    })
})
operationEl.forEach(number =>{
    number.addEventListener("click", (e) =>{
        if(!dis2Num) result;
      haveDot= false;
      const operationName =  e.target.innerText;
      if(dis2Num && dis2Num &&lastoperation){
        mathoperation();
      }else{
        result =parseFloat(dis2Num)
      }
    clearvar(operationName);
    lastoperation= operationName;
    })
})


function clearvar(name = ''){
    dis1Num += dis2Num+ ``+ name + ``;
    display1El.innerText= dis1Num;
    display2El.innerText= '';
    dis2Num = '';
    temp_resultEl.innerText =result;

}


function mathoperation(){
    if(lastoperation === `-`){
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if(lastoperation === `%`){
        result = parseFloat(result) % parseFloat(dis2Num);
    }else if(lastoperation === `+`){
        result = parseFloat(result) +parseFloat(dis2Num);
    }else if(lastoperation === `/`){
        result = parseFloat(result) / parseFloat(dis2Num);
    }else if(lastoperation === `x`){
        result = parseFloat(result)* parseFloat(dis2Num);
    }
   
}

equalEl.addEventListener("click",(e) =>{
    if(!dis1Num || !dis2Num)return;
    haveDot=false;
    mathoperation();
    clearvar();
    display2El.innerText = result;
    temp_resultEl.innerText = '';
    dis2Num = result;
    dis1Num = '';

})

all_clearEl.addEventListener("click",(e) =>{
    display2El.innerText = '0';
    display1El.innerText = '0';
    temp_resultEl.innerText = '0';
    dis2Num = '';
    dis1Num = '';
    result ='';
    lastoperation ='';
})
last_entity_clearEl.addEventListener("click",(e) =>{
    display2El.innerText = '0';
    dis2Num = '0';
})
   

window.addEventListener("keydown",(e) =>{
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' ||
        e.key === last_entity_clearEl ||
        e.key === all_clearEl 
    
    ){
        clickButton(e.key);
    }else if(
        e.key === '*' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '+' ||
        e.key === '%' 
    ){
        clickoperation(e.key)
    }else if(e.key === '*' ){
        clickoperation('x');
    }else if(e.key === `Enter` || e.key === '='){
        clickequal('=');
    }else if(e.key === `Delet` ||  e.key === all_clearEl ){
        clickall('=');
    }
});


function clickButton(key){
    numberEl.forEach(button =>{
  if(button.innerText === key){
    button.click();
  }
    })
}
function clickoperation(key){
    operationEl.forEach(button =>{
  if(button.innerText === key){
    button.click();
  }
    })
}
function clickequal(key){
    equalEl.click();
  
}
function clickall(key){
    all_clearEl.click();
  
}

