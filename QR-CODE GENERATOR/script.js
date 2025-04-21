let url=document.getElementById("url");
let url_btn=document.getElementById("url_btn")
url_btn.addEventListener("click",()=>{
    let qrlink=`https://image-charts.com/chart?
chs=150x150&cht=qr&chl=${url.value}`;
let url_img=document.getElementById("url_img")
   url_img.src=qrlink;
})