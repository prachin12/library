let addbk=document.querySelector(".addbk");
let toaddbk=document.querySelector(".toaddbk");
let submit=document.querySelector(".submit");
let mybook=[];
let sn=1;
function Book(sn,title,author,pageno,status){
    this.sn=sn;
    this.title=title;
    this.author=author;
    this.page=pageno;
    this.status=status;
}

addbk.addEventListener('click',()=>{

    console.log("clicked");
    toaddbk.classList.add("show");
    toaddbk.classList.remove("hide");


    submit.addEventListener('click',()=>{

        let book = new Book(sn,toaddbk.title.value, toaddbk.author.value, toaddbk.pages.value, toaddbk.status.value);
        mybook.push(book);
        event.preventDefault();

        toaddbk.classList.add("hide");
        toaddbk.classList.remove("show");
        
        sn++;
    })
})


