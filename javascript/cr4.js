const img=document.getElementById('img')
const range=document.getElementById('range')

const ArrayImg = [
    "./img/cr4_1.png",
    "./img/cr4_2.png",
    "./img/cr4_3.png",
    "./img/cr4_4.png",
    "./img/cr4_5.png",
    "./img/cr4_6.png",
];

img.setAttribute('src',ArrayImg[0])

range.addEventListener('input',(e)=>{
let value=e.target.value;
console.log(value);
img.setAttribute('src',ArrayImg[value]);
})