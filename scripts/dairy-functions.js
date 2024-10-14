const infoButtonList = document.querySelectorAll(".user-answer-info"); //Selecting all the "question" buttons at the top corner
const popUpList = document.querySelectorAll(".pop-up-info"); //Selecting all pop-ups with additional info
infoButtonList.forEach((infoButton,i) => { //Adding the same event to all "question" button
    infoButton.addEventListener("click",() =>{ //When we click on a corner "question" button
        popUpList[i].classList.remove("hidden"); //A corresponding pop-up will appear on the screen
    });
});
const popUpBtnList = document.querySelectorAll(".pop-up-btn-close");//Selectig all closing buttons on pop-ups
popUpBtnList.forEach( //Adding the same event to all closing buttons
    (popUpBtn) => {
        popUpBtn.addEventListener("click", () => { //When we click on a closing button
            popUpBtn.parentElement.classList.add("hidden"); //The parent pop-up will be hidden
        });
    }
);

function optionChoice(popUp,elementList,dataList) { 
//A function that allows to choose an option on the pop-up and add it to the table
    let currentElement,currentData; //Variables for the chosen option and the clicked table cell or row
    elementList.forEach((element) => { //An event is added for every option i.e. emotion, distortion
        element.addEventListener("click", () => { //When we click on an option
            // currentElement = element.querySelector("span").textContent; //It't text will be saved in a variable
            currentElement = element.textContent;
            // element.parentElement.classList.add("hidden"); //parent pop-up will be closed
            popUp.classList.add("hidden");
            dataList[currentData].textContent = currentElement;//the chosen cell will be filled with the chosen option
        });
    });
    dataList.forEach((data,i) => {//An event is added for every rable cell or row
        data.addEventListener(("click"),() => {//When we click on a cell
            popUp.classList.remove("hidden");//A corresponding pop-up will appear
            data.classList.add("is-chosen");//A filled cell's style will be slightly changed
            currentData = i; //A chosen cell is saved in a variable so it can be filled with chosen option
        });
    });
}

const emotionList = document.querySelectorAll(".emotion-selection"); //Selecting all emotion options to add an event
const emotionDataList = document.querySelectorAll(".table-emotions-data");//Selecting all table cells for emotions to add an event
const popUpEmotion = document.querySelector(".pop-up-emotions"); //Selecting the pop-up with emotions
optionChoice(popUpEmotion,emotionList,emotionDataList); //Calling a function to fill table cells with chosen content

const distortionList = document.querySelectorAll(".distortion-selection span");//Selecting all distortion options to add an event
const distortionRowList = document.querySelectorAll(".table-distortion-row");//Selecting all table rows for distortions to add an event
const popUpDistortion = document.querySelector(".pop-up-distortions"); //Selecting the pop-up with distortions
optionChoice(popUpDistortion,distortionList,distortionRowList); //Calling a function to fill table rows with chosen content

let infoDistortionFlag = 1; //A infoDistortionFlag for opening and closing additional info for a distortion
function openingInfo(){
    if (infoDistortionFlag === 1){ //If the info is closed
        this.parentElement.nextElementSibling.classList.remove("hidden"); //the additional info will appear
        this.parentElement.classList.add("is-open-info"); //the style of the distortion will be modified
        infoDistortionFlag = 2;//the flag's value will be changed
    } else if (infoDistortionFlag === 2){ //If the info is opened
        this.parentElement.nextElementSibling.classList.add("hidden"); //the additional info will disappear
        this.parentElement.classList.remove("is-open-info");//the style of the distortion will be reversed back to default
        infoDistortionFlag = 1;//the flag's value will be changed
    }
}
const distortionInfoBtn = document.querySelectorAll(".distortion-selection-btn"); 
//Selecting all buttons for additional info for a distortion
distortionInfoBtn.forEach((button) => { //For every button for additional info
    button.addEventListener("click",openingInfo); //a function for opening and closinf additional info will be added
});

const langChange = document.querySelector(".btn-language-change"); //Selecting a button for a language change
let isLangOpen = false; //A flag to check if language options are displayed
function openingLang(){ //A function to open/close language options
    if (isLangOpen === false){ //If language menu are closed
        langChange.parentElement.classList.add("is-open"); //Language menu will open
        langChange.previousElementSibling.style.display = "flex"; // Language options will be shown
        isLangOpen = true; //language menu will be open
    } else{ //If language menu are open
        langChange.parentElement.classList.remove("is-open"); //Language menu will close
        langChange.previousElementSibling.style.display = "none"; // Language options will be hidden
        isLangOpen = false; //language menu will be closed
    }
}
langChange.addEventListener("click", openingLang); //An event is added to handle language menu opening/closing




