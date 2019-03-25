const companyName= document.getElementById("companyName");

const companyDescript= document.getElementById("companyDescript");

const compdate= document.getElementById("compdate");

const button=document.getElementById("button");

const myId=document.getElementById("myId");


button.onclick=function (){

    const myList1=companyname.value;
    const myval1=projedescri.value;
    const date=compdate.value;

    

    console.log(myList1);
    console.log(myval1);
    console.log(date);

    if(myList1&&myval1){

        localStorage.setItem(myList1,myval1);
    
        location.reload();
    }
    
h3{
    
};
for(let i=0; i<localStorage.length; i++){
    const myList1=localStorage.key(i);
    const myval1=localStorage.getItem(myList1);
    function display(){
        myId.innerHTML+=`${myval1}`;
    }
    myList1.onclick=display();

    myId.innerHTML +=`${myList1}: ${myval1}<br>`;
}
}