
// Funktion som kommer visa en bekräftelseruta när kunden fgör en beställning 

function orderOfConfirmation(message) {
    //Ett popup element kommer att skapas 
    const confirmView = document.createElement("div");
    confirmView.classList.add("confirmView");
    confirmView.textContent = message;

    //Popup logiken läggs till i HTML 
    document.body.appendChild(confirmView);

    //Rutan kommer bara visas i 3 sekunder
    setTimeout(() => {
        confirmView.remove();
    }, 3000);
}

});

function popup () {
        myPopup.classList.add("show");
    }
;
closePopup.addEventListener(
    "click",
    function () {
        myPopup.classList.remove(
            "show"
        );
    }
);
window.addEventListener(
    "click",
    function (event) {
        if (event.target == myPopup) {
            myPopup.classList.remove(
                "show"
            );
        }
    }
);

popup()
