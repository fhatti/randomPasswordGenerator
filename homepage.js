const generateButton = document.getElementById("generate-btn");
const firstPassword = document.getElementById("pass1-el");
const secondPassword = document.getElementById("pass2-el");
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
const copyPassword1 = document.getElementById("copy-pass1");
const copyPassword2 = document.getElementById("copy-pass2");
let hasGenerated = false;
let hasCopiedText1 = false;
let hasCopiedText2 = false;

function createRandomPassword()
{
    for (let i = 0; i <= 14; i++)
    {
     let password1 = Math.floor(Math.random() * characters.length);
        firstPassword.textContent += characters[password1]; 
        let password2 = Math.floor(Math.random() * characters.length)
            secondPassword.textContent += characters[password2];  
    }
    hasGenerated = true;
    hasCopiedText1 = false;
    hasCopiedText2 = false;
}

generateButton.addEventListener("click", function generate() {
    if (hasGenerated === false) {
        createRandomPassword();
        copyPassword1.style.visibility = "visible";
        copyPassword2.style.visibility = "visible";
    }
    else if (hasGenerated) {
        firstPassword.textContent = "";
        secondPassword.textContent = "";
        createRandomPassword();
        copyPassword1.innerHTML = `<span class="material-symbols-outlined">
            content_copy</span>`;
        copyPassword2.innerHTML = `<span class="material-symbols-outlined">
            content_copy</span>`;
        
    }

});

copyPassword1.addEventListener("click", function () {
    navigator.clipboard.writeText(firstPassword.innerText);
    console.log("a copiat");
    hasCopiedText1 = true;
    if (hasCopiedText1)
        copyPassword1.innerHTML = "Copied";
  
});

copyPassword2.addEventListener("click", function () {
    navigator.clipboard.writeText(secondPassword.innerText);
    copyPassword2.innerHTML = "Copied";
    hasCopiedText2 = true;

});

