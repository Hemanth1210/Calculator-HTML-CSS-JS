sum=0;
str="";
function by_sum(){
    a = parseInt(document.getElementById("t1").value);
    sum+=a;
    if(str.length==0){
        str+=a;
    }else{
        str+="+"+a;
    }
    document.getElementById("t3").value=sum;
    document.getElementById("t2").value=str;
}


function by_diff(){
    a = parseInt(document.getElementById("t1").value);
    sum-=a;
    if(str.length==0){
        str+=a;
    }else{
        str+="-"+a;
    }
    document.getElementById("t3").value=sum;
    document.getElementById("t2").value=str;
}


function by_mul(){
    a = parseInt(document.getElementById("t1").value);
    sum*=a;
    if(str.length==0){
        str+=a;
    }else{
        str+="*"+a;
    }
    document.getElementById("t3").value=sum;
    document.getElementById("t2").value=str;
}

function by_div(){
    a = parseInt(document.getElementById("t1").value);
    sum/=a;
    if(str.length==0){
        str+=a;
    }else{
        str+="/"+a;
    }
    document.getElementById("t3").value=sum;
    document.getElementById("t2").value=str;
}
