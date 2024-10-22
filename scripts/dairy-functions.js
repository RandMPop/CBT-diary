const infoButtonList = document.querySelectorAll(".user-answer-info"); //Selecting all the "question" buttons at the top corner
const popUpList = document.querySelectorAll(".pop-up-info"); //Selecting all pop-ups with additional info
infoButtonList.forEach((infoButton,i) => { //Adding the same event to all "question" button
    infoButton.addEventListener("click",() =>{ //When we click on a corner "question" button
        popUpList[i+1].classList.remove("hidden"); 
        //A corresponding pop-up will appear on the screen. i+1 to exclude pop-up that opens with info button at the begibibg of the
        //page
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
            currentElement = element.textContent; //Its text will be saved in a variable
            popUp.classList.add("hidden"); //and the parent pop-up will be closed
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


const popUpEmotion = document.querySelector(".pop-up-emotions"); //Selecting the pop-up with emotions
const emotionList = document.querySelectorAll(".emotion-selection"); //Selecting all emotion options to add an event
const emotionDataList = document.querySelectorAll(".table-emotions-data");//Selecting all table cells for emotions to add an event
const emotionPercentList = document.querySelectorAll(".table-emotions-percent"); //Selecting all table cells for percentage
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

const btnInfo = document.querySelector(".btn-info"); //Selecting a button for an info display
const generalInfo = document.querySelector(".pop-up.general-info"); //Selecting a pop-up with general info
btnInfo.addEventListener('click', () => { //When we click on the info button
    generalInfo.classList.remove("hidden"); //a pop-up appears
})

const langChange = document.querySelector(".btn-language-change"); //Selecting a button for a language change
let isLangOpen = false; //A flag to check if language options are displayed
function openingLang(){ //A function to open/close language options
    if (isLangOpen === false){ //If language menu are closed
        langChange.parentElement.classList.add("is-open"); //Language menu will open
        langChange.previousElementSibling.style.display = "flex"; // Language options will be shown
        btnInfo.style.display = "none"; //The info button is hidden
        isLangOpen = true; //language menu will be open
    } else{ //If language menu are open
        langChange.parentElement.classList.remove("is-open"); //Language menu will close
        langChange.previousElementSibling.style.display = "none"; // Language options will be hidden
        btnInfo.style.display = "block"; //The info button is shown
        isLangOpen = false; //language menu will be closed
    }
}
langChange.addEventListener("click", openingLang); //An event is added to handle language menu opening/closing


const addEmotionBtn = document.querySelector(".add-emotion-btn"); //Selecting a button for adding a row to the Emotions table
const deleteEmotionBtn = document.querySelector(".delete-emotion-btn"); //Selecting a button for deleting a row
const emotionsLimit = 12; //Setting a limit for a number of rows
let emotionsCount = 3; //Setting a current number of rows
addEmotionBtn.addEventListener("click", () => { //Adding an event after a click on the button
    if (emotionsCount < emotionsLimit) { //If the current number of rows is below the limit
        emotionDataList[emotionsCount].classList.remove('is-data-hidden'); //Then we will add a table cell for an emotions choice
        emotionPercentList[emotionsCount].classList.remove('is-data-hidden');// And a table cell for am emotion intensity
        emotionsCount++; //Increasing a variable responsible for how many rows were added
    } else { //If the number of rows reaches the limit
        alert('Добавлено максимальное количество строк'); //An alert about that will appear on the screen
    }
    if (emotionsCount > 3) {//If the number of rows is greater than 3,
        deleteEmotionBtn.classList.remove("is-button-hidden");//a button for row removal appears
    }
});
deleteEmotionBtn.addEventListener("click", () =>{//Adding an event to delete o row of the table after a click
    if (emotionsCount > 3){ //If number of rows is more than 3
        emotionsCount--; //We will reduce the count of rows by one
        emotionDataList[emotionsCount].classList.add('is-data-hidden'); //Then we will remove a table cell for an emotions choice
        emotionPercentList[emotionsCount].classList.add('is-data-hidden');// And a cell for am emotion intensity
    } else {
        alert('Достигнуто минимальное количество строк'); //An alert about minimal number of rows being reached
    }
    if (emotionsCount === 3) { //If a number of rows equals 3 (minimal number of rows)
        deleteEmotionBtn.classList.add("is-button-hidden");//the delete button will be hidden
    }
});

const addDistortionBtn = document.querySelector(".add-distortion-btn"); //Selecting a button for adding a row to the Disrortions table
const deleteDistortionBtn = document.querySelector(".delete-distortion-btn"); //Selecting a button for deleting a row
const distortionsLimit = 12; //Setting a limit for a number of rows
let distortionsCount = 3; //Setting a current number of rows
addDistortionBtn.addEventListener("click", () => { //Addind an event after a click on the button
    if (distortionsCount < distortionsLimit) {  //If the current number of rows is below the limit
        distortionRowList[distortionsCount].classList.remove('is-data-hidden'); //Then we will add a table cell for a distortion choice
        distortionsCount++; //Increasing a variable responsible for how many rows were added
    } else { //If the number of rows reaches the limit
        alert('Добавлено максимальное количество строк'); //An alert about that will appear on the screen
    }
    if (distortionsCount > 3) { //If a number of rows is bigger than 3
        deleteDistortionBtn.classList.remove("is-button-hidden"); //a delete button for rows will appear
    }
});
deleteDistortionBtn.addEventListener("click", () =>{ //An event for clicking a 'delete row' button
    if (distortionsCount > 3){ //If there are more than 3 rows
        distortionsCount--; //the count of rows will be reduced
        distortionRowList[distortionsCount].classList.add('is-data-hidden'); //the last row will be hidden
    } else {
        alert('Достигнуто минимальное количество строк'); //An alert about reaching a minimum number of rows
    }
    if (distortionsCount === 3) {//If the number of rows equals 3
        deleteDistortionBtn.classList.add("is-button-hidden"); //the 'delete' button will be hidden
    }
});

