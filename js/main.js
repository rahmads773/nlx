// slider show

let right = document.querySelector(".testemonials .arrows .fa-arrow-right")
let boxes = document.querySelector(".testemonials .boxes")

let box = [
    ` <div class="box">
    <div class="content d-flex  align-items-center gap-3">
        <img src="img/avatar.png" alt="avatar">
        <div class="text-con ">
            <h4 class="m-0 fs-6">Seamull roben</h4>
            <p>CEO Cryptoganda</p>
        </div>
    </div>
    <p class="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima nemo odio sit saepe, 
 ducimus autem doloremque possimus veniam esse. Eum dignissimos praesentium hic accusantium similique.
  Nobis a similique tempora?</p>
</div>`,
    ` <div class="box">
<div class="content d-flex  align-items-center gap-3">
    <img src="img/avatar (2).png" alt="avatar">
    <div class="text-con ">
        <h4 class="m-0 fs-6">Mark</h4>
        <p>CEO Facebook</p>
    </div>
</div>
<p class="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima nemo odio sit saepe, 
ducimus autem doloremque possimus veniam esse. Eum dignissimos praesentium hic accusantium similique.
Nobis a similique tempora?</p>
</div>`,
`  <div class="box">
<div class="content d-flex  align-items-center gap-3">
    <img src="img/avatar (3).png" alt="avatar">
    <div class="text-con ">
        <h4 class="m-0 fs-6">Mark</h4>
        <p>CEO Facebook</p>
    </div>
</div>
<p class="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima nemo odio sit saepe, 
ducimus autem doloremque possimus veniam esse. Eum dignissimos praesentium hic accusantium similique.
Nobis a similique tempora?</p>
</div>`

]

let i = 0;

right.addEventListener("click",(eo) => {
    if(i === 0){
        boxes.innerHTML = box[1]
        i++
            }
    if(i === box.length){
        i = 0
    } 
    boxes.innerHTML = box[i]
    i++
    console.log(i);

    
})


window.onload = () => {
    document.querySelector(".loading").style.transform = "translateY(-100%)"
}