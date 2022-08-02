let bigdivEl=document.querySelector(".bigdiv")
let btnEl=document.getElementById("btn")
btnEl.addEventListener("click",function(){
    for(let i=0;i<6;i++){
        let imgEl=document.createElement("img")
        let random=Math.floor(Math.random()*1000)
        imgEl.src=`https://picsum.photos/200/300?random=${random}`
        imgEl.classList.add("img")
        bigdivEl.append(imgEl)
        console.log(random)
    }
})