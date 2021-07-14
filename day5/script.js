buttons=document.getElementsByClassName("cube")
input=document.getElementsByTagName("input")
totalvalue=input[0].value;
Array.from(buttons).forEach((div,i) => {
    div.addEventListener("click",()=>{
    if(div.value=="="){
        try{
        var ans=eval(totalvalue);
        input[0].value=ans;
        }catch{
           alert("error")
           totalvalue=""
           input[0].value=totalvalue;
        }
    }
    else if (div.value==="AC") {
        totalvalue=""
        input[0].value=totalvalue;
    }
    else if (div.value==="clear") {
        totalvalue=totalvalue.substr(0,totalvalue.length-1)
        input[0].value=totalvalue;
    }
    else{
        totalvalue+=div.value;
        input[0].value=totalvalue;
    }
    })
    
})