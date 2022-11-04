function f1(){
    var max=0;
    var minstring,maxstring;
    str=document.getElementById("s").value;
    console.log(str);
    a=str.split(' ');
    console.log(a);
    var min=a[0].length
    a.forEach(s => {
        if (s.length>max){
            max=s.length
            maxstring=s;
        }
        if(s.length<min){
            min=s.length
            minstring=s;
        }
    });
    document.getElementById("min").innerHTML=minstring;
    document.getElementById("max").innerHTML=maxstring;
}
function f2_calculate(){
    h=parseFloat(document.getElementById("height").value);
    w=parseFloat(document.getElementById("weight").value);
    BMI=w/(h*h);
    document.getElementById("score").innerHTML=BMI.toFixed(2);
    if(BMI<18){
        document.getElementById("Type").innerHTML="UNDERWEIGHT";
    }
    else if(BMI<25){
        document.getElementById("Type").innerHTML="NORMAL";
    }
    else if(BMI<30){
        document.getElementById("Type").innerHTML="OVERWEIGTH";
    }
    else{
        document.getElementById("Type").innerHTML="OBESE";
    }
}
function f3_grow(){
    rows=document.getElementById("rows").value
    columns=document.getElementById("columns").value
    var arr = ["orange.jpg","apple.jpg"];
    rand=arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("garden").innerHTML="<img src="+rand+" width="+columns+" height="+rows+">";
}
function f4_convert(){
    data=parseInt(document.getElementById("data").value);
    var index1 = document.getElementById("from").selectedIndex;
    var index2 = document.getElementById("to").selectedIndex;
    if(index1==0 && index2==0){
        console.log(data*0.013)
        document.getElementById("con").innerHTML=data*0.013;
    }
    else if(index1==1 && index2==1){
        document.getElementById("con").innerHTML=data*79.88;
    }
    else if(index1!=index2){
        document.getElementById("con").innerHTML=data;
    }
}
var count1=0,count2=0;
function f5_flipFunction(){
    var arr = ["Heads.png","Tails.png"];
    
    rand=arr[Math.floor(Math.random() * arr.length)];
    if(rand==="Heads.png"){
        count1+=1
    }
    else{
        count2+=1
    }
    document.getElementById("img").src=rand;
    document.getElementById("img").width=150
    document.getElementById("img").height=150
    document.getElementById("heads").innerHTML=count1;
    document.getElementById("tails").innerHTML=count2
}
function f6(){
    small=parseInt(document.getElementById("small").value)*100
    medium=parseInt(document.getElementById("medium").value)*200
    large=parseInt(document.getElementById("large").value)*400
    radio=parseInt(document.querySelector("input[name='tip']:checked").value)
    price=small+medium+large
    tax=price*9/100
    tip=(price+tax)*radio/100
    total=price+tax+tip
    document.getElementById("price").innerHTML="Cost of Cake : "+price
    document.getElementById("price").innerHTML+="<br>Tax : "+tax
    document.getElementById("price").innerHTML+="<br>Tip : "+tip
    document.getElementById("price").innerHTML+="<br>Total Cost Of The Order : "+total
}