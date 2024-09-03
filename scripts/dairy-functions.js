const infoButtonList = document.querySelectorAll(".user-answer-info");
const popUpList = document.querySelectorAll(".pop-up-info");
infoButtonList.forEach((infoButton,i) => {
    infoButton.addEventListener("click",() =>{
        popUpList[i].classList.remove("hidden");
    });
});
const popUpBtnList = document.querySelectorAll(".pop-up-btn-close");
popUpBtnList.forEach(
    (popUpBtn,i) => {
        popUpBtn.addEventListener("click", () => {
            popUpList[i].classList.add("hidden");
        });
    }
);

