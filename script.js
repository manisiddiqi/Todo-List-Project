// Ye hum nay task add kernay kay liye constant banaya hai 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// Ye hum nay function banaya hai kay wo kaam kesay karay ga
function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!');  // Yeh hum nay alert daala hai kay agar hum nay field khali chori hai
    }
    // Ye hum nay banaya hai kay jab hum us field main kuch likhain tou wo add kesay ho ga
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); // Ye cross ka nishan laganay kay liye banaya hai aur neechay us ki working likhi hai wo kaam kesay karay ga
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); 
}
// Yeh hum nay jab kaam complete ho jaye ga aur us per click karain tou us ki working banaye hai
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    // Aur us kay liye hai kay jab nay delete kerna ho task 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); 
    }
}, false);
// Yeh function hum nay data ko save kernay kay liye banaya hai 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// Yeh function hum nay data ko show kernay kay liye banaya kay jab hun browser refresh karain ya phir us ko band ker kay dubara open karain.
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();