//let fullname=document.getElementById('fname');

//element by form name and field name
let formBox=document.contact_form;
//let fullName= document.contact_form.name;
let fullName=formBox.fname;
let email=formBox.email;
//event listening method :addEventListner()
formBox.addEventListener("submit",function(e){
    if(fullName.value==''){
        //console.log("Fullname is empty.");
        fullName.nextElementSibling.innerText="Fullname is empty.";
        e.preventDefault();//stops submission
    }
    if(email.value==''){
        //console.log("Email is empty.");
        email.nextElementSibling.innerText="Email is empty.";
        e.preventDefault();//stops submission
    }
});
/*
Email validation
*/

email.addEventListener("keyup",function(){
    /* Regular expression(REGEX)
    -regexr.com./regexr101.com(sites)
    -A pattern string to validate the string or character of form field.
    */
    let emailRegex=/[A-Za-z]+(@)[a-z]+(.com)/g;
    if(emailRegex.test(email.value)==false){
       //console.log("Our @ symbol is required.");
       this.nextElementSibling.innerText="Email invalid."
    }
    else{
        this.nextElementSibling.innerText="";
    }
    });

//-1 is refers to empty case of the value or character     