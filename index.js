// Import stylesheets
import './style.css';
var c= {
    title:{
        en:"Title",
        es:"título"
    },
    message:{
        en:"Message goes here",
        es:"El mensaje va aquí"
    }
}
var k=Object.values(c);
//console.log(k);
var x=document.getElementById("cmbMoreFunction")
x.addEventListener("click",function(v){
  //console.log(v.target.value);
  if(v.target.value=="english")
  {
k.map(x=>console.log(x.en));
x.selectedIndex=0;
  }
else if(v.target.value=="spanish")
{
k.map(x=>console.log(x.es));
x.selectedIndex=0;
}
  }
  );

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;