
let usDollars=[10,20,30,40]

let audDollars=usDollars.map( (element)=>{
    return element=element*1.5;
} )

console.log(audDollars)

let users=[
    {
        email:"example1@gmail.com",
        password:"123",
        name:"example",
        discord:"1212",
        lessonsCompleted:[1,2,3]
    }
]
function signUp(user){
    users.push(user)
}

signUp(
    {
        email:"example2@gmail.com",
        password:"1234",
        name:"example2",
        discord:"121212",
        lessonsCompleted:[1,3]
    }
)
console.log(users)

// 1st method to access html document element

console.log(document.querySelector("#heading"))
//in current config , null is o/p as in html js file is 
//loaded before the rest of the page is loaded
//to fix this , we can put our <script> tag in end of body
//tag instead of in the heading tag 

//2nd method (recommended)
console.log(document.querySelector("#heading").innerHTML="HKV")
//instead of putting script tag in body , keep it in 
//head just add defer in <script src="app.js" defer></script>

//3rd method
console.log(document.getElementById("heading"))

//HKV
document.getElementById("heading").innerHTML+=" HELLO"
//HKV HELLO

document.getElementById("heading").style.color="red"

let count1=0
let count2=1
let colors=["green","brown","pink","aquamarine","cyan","purple","blueviolet","aqua","chocolate"]
function changeColor(){
    document.querySelector("body").style.backgroundColor=colors[count1%colors.length];
    document.getElementById("heading").style.color=colors[count2%colors.length]
    count1++;
    count2++;
    // if(count%3 ===0){
    //     document.querySelector("body").style.backgroundColor="green";
    //     count++;
    // }else if(count%2 ===0){
    //     document.querySelector("body").style.backgroundColor="brown";
    //     count++
    // }else{
    //     document.querySelector("body").style.backgroundColor="pink";
    //     count++
    // }
}

function toggleSideBar(){
    document.querySelector("body").classList.toggle("open")
}

const toggleButton=document.querySelector("#toggleButton")

toggleButton.addEventListener("mouseover",()=>{
    document.querySelector("body").classList.toggle("open")
})
toggleButton.addEventListener("mouseleave",()=>{
    document.querySelector("body").classList.toggle("open")
})