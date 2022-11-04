function main(n){
    if(n==0){
        window.f1_interval=setInterval(() => { f1() }, 1000);
    }
    if(n==1){
        window.f2_interval=setInterval(() => { f2() }, 1000);
    }
}
function Stop(n){
    if(n==0){
        clearInterval(f1_interval)
    }
    if(n==1){
        clearInterval(f2_interval)
    }
    }
function f1(){  
    var d= new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    document.getElementById("time").innerHTML=h+":"+m+":"+s;
}

function f2(){
    var red= Math.floor(Math.random()*255);
    var green= Math.floor(Math.random()*255);
    var blue= Math.floor(Math.random()*255);
    var color="rgb("+red+","+green+","+blue+");"
    document.getElementById("bg").style="background-color:"+color+" height:200px; margin: 0; padding: 0%;"
}
function f3_incsize(){
    document.getElementById("para").style="font-size:20px"
}
function f3_dscsize(){
    document.getElementById("para").style="font-size:16px"
}
function f4(){
    imgobj=document.getElementById("image")
    imgobj.style.position='relative';
    imgobj.style.left='0px';
}
function moveRight()
{
    imgobj.style.left=parseInt(imgobj.style.left)+1+'px';
    if(imgobj.style.left===(document.body.clientWidth-50)+'px'){
        imgobj.style.left='0px';
    }
    animate=setTimeout('moveRight()',10);
}
function STop(){
    clearTimeout(animate);
    
}
window.onload=f4();

function f5(){
    var student = [{name:"Reneesh Denny",reg_no:"URK20CS2075",dob:"15-03-2003"}
    ,{name:"D Alan Daniels",reg_no:"URK20CS2065",dob:"11-07-2002"}
    ,{name:"Jason Devadoss",reg_no:"URK20CS2062",dob:"22-03-2002"}
    ,{name:"Klaus Hargreeves",reg_no:"URK89CS1069",dob:"01-08-1989"}
    ,{name:"Niklaus Mikaelson",reg_no:"URK98CS1666",dob:"30-08-0980"}];
    for(var i=0;i<student.length;i++){
        if(parseInt(student[i].dob.slice(-4))>2000){
            document.getElementById("after2000").innerHTML+=student[i].name+"'s register number is "+student[i].reg_no+"<br>"
        }
        else{
            document.getElementById("before2000").innerHTML+=student[i].name+"'s register number is "+student[i].reg_no+"<br>"
        }
    }
}
function f5_clear(){
    document.getElementById("after2000").innerHTML="<h6>Before 2000 : </h6><br>";
    document.getElementById("before2000").innerHTML="<h6>Before 2000 : </h6><br>";
}
