//accessing dom and creating variables for the code
let addbk=document.querySelector(".addbk");
let toaddbk=document.querySelector(".toaddbk");
let submit=document.querySelector(".submit");
let library=document.querySelector("#table");
let statusadd=0;
let mybook=[];
let sn=0;
let i;
let num=0;
let count=0;
let a=0;

//constructor
function Book(sn,title,author,pageno,status){
    this.sn=sn;
    this.title=title;
    this.author=author;
    this.page=pageno;
    this.status=status;
    
}
//showing form
addbk.addEventListener('click',e=>{

    //adding class show and removing hide so that form is visible when the button is clicked
    toaddbk.classList.add("show");
    toaddbk.classList.remove("hide");
})

//submitting
submit.addEventListener('click',e=>{
    //keeping track of number of books
    if(toaddbk.title.value.length==0 || toaddbk.author.value.length==0 || toaddbk.pages.value.length==0 || toaddbk.status.value.length==0){
        window.alert('Field cannot be blank');
        event.preventDefault();
    }
    else{

    sn=sn+1;

    //adding to values constructor
    let book = new Book(sn,toaddbk.title.value, toaddbk.author.value, toaddbk.pages.value, toaddbk.status.value);
    mybook.push(book);


    //calculating the no of datas in the object
    let length= Object.keys(mybook[num]).length;
    let detail;//to create element td
    let row=document.createElement("tr"); //tr create element
    Object.entries(mybook[num]).forEach(([key, value]) => {
            //adding a logic so that status is a button
            detail=document.createElement("td");
            if(a==4){
                let bt=document.createElement("button")
                bt.innerText=value;
                bt.className="changestatus";
                detail.appendChild(bt);
                row.appendChild(detail);
            }
            //displaying innertextvalue with corresponding value and appending a child to the tr
            else{
            detail.innerText=value;
            row.appendChild(detail);
            a++;
            }
    });
    detail=document.createElement("td");
    let del=document.createElement("button")
    del.innerText="delete";
    del.className="delete";
    row.id=sn;
    detail.appendChild(del);
    row.appendChild(detail);
    //appending the row to the table

    library.appendChild(row);

    //this two lines below prevents from refreshing and clears the form for the next input

    toaddbk.reset();
    e.preventDefault();

    //this adds and removes the class from the form so its hidden after submitting the input data
    toaddbk.classList.add("hide");
    toaddbk.classList.remove("show"); 

    //to keep track of the array data it helps to itterate through every object stored in the array
    num=num+1;
    a=0;
    statusadd=1;
    
}
}) 

//changing the status of read and unread in the table, also updating the value in the array
library.addEventListener('click', e => {
   
    
    if (e.target.classList.contains('changestatus')) {
        // You can add additional logic here, such as toggling the status
        // For example, toggling between 'Read' and 'Unread'
        let index=parseInt(e.target.parentElement.parentElement.id);
        if (e.target.innerText === 'Read') {
            e.target.innerText = 'Unread';
            console.log(mybook[index-1].status);
            mybook[index-1].status="Unread";
        } 
        else {
            e.target.innerText = 'Read';
            mybook[index-1].status="Read";
        }
    }

    if (e.target.classList.contains('delete')){
        let index=parseInt(e.target.parentElement.parentElement.id);
        console.log(mybook[index-1]);
    }
});



