let addbk=document.querySelector(".addbk");
let toaddbk=document.querySelector(".toaddbk");
let submit=document.querySelector(".submit");
let mybook=['','','',''];

function Book(title,author,pageno,status){
    this.title=title;
    this.author=author;
    this.page=pageno;
    this.status=status;
}

addbk.addEventListener('click',()=>{

    console.log(clicked);
    toaddbk.classList.add("show");
    toaddbk.classList.remove("hide");

})
submit.addEventListener('click',()=>{
    toaddbk.classList.add("hide");
    toaddbk.classList.remove("show");
    event.preventDefault();
})

