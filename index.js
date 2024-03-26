let randomText = document.getElementById("randomText");
let textInput = document.getElementById("textInput");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

let data = ["In england,the speaker of the house is not working if a statue in the park of a person on a horse has both", "A girl in peru tribe of delhi, to prepare her for marriage at the age of 12,is placed in a basket in the hut", "Dentists have recommended that a toothbrush have kept atleast 6 feet away from a toilet to avoid particles", "babies are born without knee caps. they dont't appear until child recover"]

let randomValue = Math.floor(Math.random() * data.length);
let starttime;
let endtime;
let string="";
const myfun = () => {
    let wordLength = textInput.value.split(" ").length;
    
    // let time=new Date();
    // endtime=time.getTime();
    let completetime = Math.floor((endtime - starttime) / 1000);
    // console.log(completetime);
    let speed = (wordLength / completetime) * 60;
    result.innerHTML = "You Write" + " " + wordLength + " " + "Word in " + " " + completetime + " " + "seconds : Your Typing speed is " + Math.floor(speed) + " " + "WPM"
}
btn.addEventListener("click", () => {
    if (btn.innerText == "Start") {
        let time = new Date();
        starttime = time.getTime();
        btn.innerText = "Done";
        textInput.disabled = false;
        textInput.style.backgroundColor = "white"
        textInput.style.color = "black"
        randomText.innerHTML = data[randomValue]
    }
    else if (btn.innerText == "Done") {
        let time = new Date();
        endtime = time.getTime();
        btn.innerText = "Start";
        textInput.disabled = true;
        textInput.style.backgroundColor = "white";
        textInput.style.border = "1 px solid black"
        randomText.innerHTML = string
        

            myfun();
    }
})