let main=document.getElementById("main");
let arr=
["https://i.pinimg.com/736x/17/61/02/1761025e8afd02fce69971df143e80f0.jpg",
"https://i.pinimg.com/736x/d9/32/47/d932471a593ba1b67b3dea30859874fa.jpg",
"https://i.pinimg.com/736x/65/b5/3d/65b53dd2bf30d0ba33cf055e021c2445.jpg",
"https://i.pinimg.com/736x/ac/85/d7/ac85d765df9fbc59d420508be7e6ff8d.jpg",
"https://i.pinimg.com/736x/9c/31/ed/9c31ed709e8150d1f1c3ffebe058f5de.jpg",
"https://i.pinimg.com/736x/12/59/b1/1259b10fb4302cf3bd353c783aea9f02.jpg"]
let s="";
for(let i=1;i<=65;i++){
    let r=Math.floor(Math.random()*arr.length);
    s+=`<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML=s;
// "https://i.pinimg.com/736x/17/61/02/1761025e8afd02fce69971df143e80f0.jpg",
// "https://i.pinimg.com/736x/d9/32/47/d932471a593ba1b67b3dea30859874fa.jpg",
// "https://i.pinimg.com/736x/65/b5/3d/65b53dd2bf30d0ba33cf055e021c2445.jpg",
// "https://i.pinimg.com/736x/ac/85/d7/ac85d765df9fbc59d420508be7e6ff8d.jpg",
// "https://i.pinimg.com/736x/9c/31/ed/9c31ed709e8150d1f1c3ffebe058f5de.jpg",
// "https://i.pinimg.com/736x/12/59/b1/1259b10fb4302cf3bd353c783aea9f02.jpg"
