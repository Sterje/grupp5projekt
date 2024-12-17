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

//Funktionen ska användas när en order blivit bekräftad 
//Så när beställningslogiken blivit triggad av en bekräftelse 
document.getElementById("test").addEventListener("click", () => {
    orderOfConfirmation("din beställning har nu blivit bekräftad!");
});
