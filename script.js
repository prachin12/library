let addbk=document.querySelector(".addbk");
let toaddbk=document.querySelector(".toaddbk");
let submit=document.querySelector(".submit");
let library=document.querySelector("#table")
let mybook=[];
let n=0;
let sn=1;
let i=0;

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
        console.log('clicked');
        let book = new Book(sn,toaddbk.title.value, toaddbk.author.value, toaddbk.pages.value, toaddbk.status.value);
        mybook.push(book);
        let row=document.createElement("tr");
        
        let length=Object.keys(mybook[n]).length;

        console.log(mybook[0]);
        Object.entries(mybook[n]).forEach(([key, value]) => {
            if(i!=length){
                let detail=document.createElement("td");
                detail.innerText=value;
                i++;
                row.appendChild(detail);
            }
        });
        library.appendChild(row);
        console.log(row);
        i=0;
        
        event.preventDefault();

        toaddbk.classList.add("hide");
        toaddbk.classList.remove("show");
        sn++;
    })
})


