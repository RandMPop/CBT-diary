const infoButtonList = document.querySelectorAll(".user-answer-info"); //Selecting all the "question" buttons at the top corner
const popUpList = document.querySelectorAll(".pop-up-info"); //Selecting all pop-ups with additional info
infoButtonList.forEach((infoButton,i) => { //Adding the same event to all "question" button
    infoButton.addEventListener("click",() =>{ //When we click on a corner "question" button
        popUpList[i].classList.remove("hidden"); //A corresponding pop-up appears on the screen
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
let currentEmotion;
let currentEmotionData;
const emotionList = document.querySelectorAll(".emotion-selection");
const emotionDataList = document.querySelectorAll(".table-emotions-data");
emotionList.forEach((emotion) => {
    emotion.addEventListener("click",() => {
        currentEmotion = emotion.textContent;
        console.log(currentEmotion);
        emotion.parentElement.classList.add("hidden");
        emotionDataList[currentEmotionData].textContent = currentEmotion;
    });
});
emotionDataList.forEach((emotionData,i) => {
    emotionData.addEventListener("click", () =>{
        document.querySelector(".pop-up-emotions").classList.remove("hidden");
        emotionData.classList.add("is-chosen");
        currentEmotionData = i;
        console.log(currentEmotionData);
    });
});


