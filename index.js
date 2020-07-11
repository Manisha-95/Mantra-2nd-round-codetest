// Import stylesheets
import './style.css';

// Write Javascript code!
var a=document.getElementsByTagName("option")[0];
console.log(a);
var m=document.getElementById("mm");
console.log(m);
document.getElementById("mm").onclick=function()
{
  console.log("mmk");
// for(var i=0;i<m;i++)
// {
// if(document.getElementById("mm"))
// }
}
//a.onclick=function(){console.log("mmm")}
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;