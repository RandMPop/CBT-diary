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
let currentEmotion; //A variable for chosen emotion
let currentEmotionData; //A variavle for chosen table cell in the Emotion table
const emotionList = document.querySelectorAll(".emotion-selection"); //Selecting all emotion options to add an event
const emotionDataList = document.querySelectorAll(".table-emotions-data"); //Selecting all table cells for emotions to add an event
emotionList.forEach((emotion) => {//Adding an event to all emotion options
    emotion.addEventListener("click",() => { //When we click on the emotion option
        currentEmotion = emotion.textContent; //the text of the chosen emotion will be saved in a variable
        emotion.parentElement.classList.add("hidden"); //the pop-up with emotion selection will be closed
        emotionDataList[currentEmotionData].textContent = currentEmotion; //the cell chosen by the user will be filled with chosen emotion.
    });
});
emotionDataList.forEach((emotionData,i) => { //Adding an event to all table cells with for emotions
    emotionData.addEventListener("click", () =>{ ////When we click on a table cell
        document.querySelector(".pop-up-emotions").classList.remove("hidden"); //A pop-up with emotion options will appear
        emotionData.classList.add("is-chosen");//Style of the chosen cell will be slightly changed
        currentEmotionData = i; //The position of the cell will be saved in order to put a chosen emotion in it
    });
});



