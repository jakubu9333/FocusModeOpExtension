let changeColor = document.getElementById("startButton");
let green= '#00ff00';
let red ='#ff0000';

basic()

function basic(){
    chrome.storage.local.get("def", ({ def }) => {
        if (def==0){
            changeColor.style.backgroundColor = green;
            chrome.storage.local.set({def:1});
        }
        else{
            changeColor.style.backgroundColor = red;
            chrome.storage.local.set({def:0});
        }
    });
}

changeColor.addEventListener("click", async () => {
    basic()
})