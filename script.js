let addbk=document.querySelector(".addbk");
let toaddbk=document.querySelector(".toaddbk");
let submit=document.querySelector(".submit");
let library=document.querySelector("#table")
let mybook=[];
let n=0;
let sn=0;
let i;

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

    //submitting

    submit.addEventListener('click',()=>{
        sn=sn+1;
        let book = new Book(sn,toaddbk.title.value, toaddbk.author.value, toaddbk.pages.value, toaddbk.status.value);
        mybook.push(book);

        let length= Object.keys(mybook[n]).length;
console.log(length);
        let detail;
        let row=document.createElement("tr");

        Object.entries(mybook[n]).forEach(([key, value]) => {
            if(i!=length){
                detail=document.createElement("td");
                detail.innerText=value;
                row.appendChild(detail);
                i++;
            }
        });

        library.appendChild(row);
        event.preventDefault();
        toaddbk.classList.add("hide");
        toaddbk.classList.remove("show"); 
    })
    n=n+1;
    i=0;
   
    
})


