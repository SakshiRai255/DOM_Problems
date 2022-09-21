
// question-no : 1
// Target the Top description div and change the DEV Community to <Your_Name> and description to your passion
let bodyCh = document.querySelector(".global-div");
console.log(bodyCh);

let changeHeadin = document.querySelector(".name-heading").innerHTML = `iNureon`;
console.log(changeHeadin);

let changePara = document.querySelector(".passion-para").innerHTML = 'I write Code';
console.log(changePara);

let removePara = document.querySelector(".remove-para").innerHTML = ' ';
console.log(removePara);


// question-no : 2
// Fetch all the product name and store in an array
let resultArray = [];
let Array = document.querySelectorAll(".as-imagegrid-item")
    Array.forEach((e) => {
    resultArray.push(e.innerText.replace('\nSupport',''))
});
console.log(resultArray);


// question-no : 3
// Add another FAQ 'My New FAQ' to the list
let addText = document.querySelector(".accordion-homepage")
let section =  document.createElement("section");
section.className = "parent";
let h3 = document.createElement("h3")
h3.textContent = "My New FAQ";
section.appendChild(h3);
addText.appendChild(section);


// question-no : 4
// change contact number using querySalector and innerText Method
let changeNumber  = document.querySelector(".one-tel-number").innerText = "+916366256689";
console.log(changeNumber);


// question-no : 5
// change the Button text to Check out
let changeButtonName =document.querySelectorAll(".diwali-deals-product-sale-btn")[6].innerText = "Check Out"
console.log(changeButtonName);


// question-no : 6
//  search box and on hover change the background color to red 
let input = document.querySelector(".searchinput___19uW0")
input.addEventListener('mouseenter',function(){
    input.style.backgroundColor = "red"
});
console.log(input);


// question-no : 8
// Remove alternate languages from the home page languages listed
let removeLanguage = document.querySelectorAll("#SIvCob a");
removeLanguage.forEach((e,i) => {
    if(i%2==0){
        removeLanguage[i].remove()}
});       
console.log(removeLanguage);


// question-no : 9
// Change the font family of the text to monospace and text color to the logo’s background color.
let changeHeadingColor = document.querySelector(".display-heading-1");
changeHeadingColor.style.fontfamily = "monospace"
changeHeadingColor.style.color = "#B1361E"
changeHeadingColor.style.backgroundColor = "#333C3C"
console.log(changeHeadingColor);


// question-no : 10
// Target the button and change background colour on mouseover
let changeBtnColor = document.querySelector(".btn-cta-big .login-btn-text");
function colorRed(){
    changeBtnColor.style.background ="red";
};
changeBtnColor.addEventListener("mouseover",colorRed);
console.log(changeBtnColor);


// question-no : 11
// change the background colour of the button to blue.
let changeLogo = document.querySelector(".wrapper .icon-logo");
changeLogo.style.background = "url(https://ineuron.ai/images/ineuron-logo.png)" 
console.log(changeLogo);


// question-no : 12
 // change the background colour of the button to blue.
 let btn = document.querySelector("#new_repository .btn");
 btn.style.backgroundColor = "#1E08F5"
 console.log(btn);

 // question-no : 13
 // Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.
let changeHeading = document.querySelector(".fl-heading .fl-heading-text").innerHTML = "JSBOOTCAMP";
console.log(changeHeading);

// question-no : 14
// change the fontsize of “Hot Deals” to 80px
let heading = document.querySelector(".HotDealsAll__HotCampaignsEventsContainer__FK0V2 .HotDealsAll__Heading__2fIbe");
heading.style.fontSize = "80px";
console.log(heading);


// question-no : 15
// Convert the text “G15 Gaming Laptop” from left to right
let changePostion = document.querySelector("#d560823win9b .ps-title");
changePostion.style.textAlign = "right";
console.log(changePostion);


// question-no : 16
 // change the heading “Start with the developer” to “Start with Scratch”
 let changeHeading2 = document.querySelector(".geist-container .section-title_title__VEDfK").innerHTML = "Start with Scratch"
 console.log(changeHeading2);

 
 // question-no : 17
 // change the button text To current Date.
 let changeBtn = document.querySelector(".mlp-inner .btn-container").innerHTML = new Date;
 console.log(changeBtn);

 
 // question-no : 18
 // change the background colour blue to orange
let changeBgColor = document.querySelector(".p-footer");
changeBgColor.style.backgroundColor = "orange";
console.log(changeBgColor);

// question-no : 19



// question-no : 20
// Change the description colour black to orange
let changeTextColor = document.querySelector(".index__three-products-1-mb .desc");
changeTextColor.style.color = "orange"
console.log(changeTextColor);