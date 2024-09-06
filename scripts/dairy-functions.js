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
const emotionDataList = document.querySelectorAll(".table-emotions-data"); //Selecting all table cells for emotions to add an event
const popUpEmotion = document.querySelector(".pop-up-emotions"); //Selecting the pop-up with emotions
optionChoice(popUpEmotion,emotionList,emotionDataList); //Calling a function to fill table cells with chosen content

// const distortionList = document.querySelectorAll(".distortion-selection");//Selecting all distortion options to add an event
const distortionList = document.querySelectorAll(".distortion-selection span");
const distortionRowList = document.querySelectorAll(".table-distortion-row"); 
//Selecting all table rows for distortions to add an event
const popUpDistortion = document.querySelector(".pop-up-distortions"); //Selecting the pop-up with distortions
optionChoice(popUpDistortion,distortionList,distortionRowList); //Calling a function to fill table rows with chosen content




