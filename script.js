
// Initialisera varukorgen som en tom array
let varukorg = JSON.parse(sessionStorage.getItem('varukorg')) || [];

// ======================= Förstasidans Funktioner =======================

// Funktion för att lägga till produkter i varukorgen
function addToCart(produktNamn, pris) {
  varukorg.push({ produktNamn, pris }); // Lägg till produkten i varukorgen
  sessionStorage.setItem('varukorg', JSON.stringify(varukorg)); // Spara i sessionStorage
  updateCart(); // Uppdatera varukorgens visning
}

// Funktion för att uppdatera varukorgens visning på förstasidan
function updateCart() {
  const totalDisplay = document.getElementById('total'); // Totalpris
  const cartSection = document.getElementById('cart');   // Varukorgssektionen
  const cartItems = document.getElementById('cart-items'); // Lista med produkter

  if (!totalDisplay || !cartSection || !cartItems) return; // Säkerställ att element finns

  // Töm tidigare innehåll
  cartItems.innerHTML = '';

  // Kontrollera om varukorgen är tom
  if (varukorg.length === 0) {
    cartSection.style.display = 'none'; // Dölj varukorgen
    totalDisplay.textContent = '0';
    return;
  }

  // Visa varukorgen när den har produkter
  cartSection.style.display = 'block';

  let total = 0;

  // Loopa igenom varukorgen och räkna totalpris
  varukorg.forEach((vara) => {
    total += vara.pris;
  });

  // Uppdatera totalpris i <span>
  totalDisplay.textContent = total;
}

// Funktion för att tömma hela varukorgen på förstasidan
function clearCart() {
  varukorg = []; // Återställ varukorgen
  sessionStorage.removeItem('varukorg'); // Ta bort från sessionStorage
  updateCart(); // Uppdatera varukorgens visning
}

// Funktion för att gå till kassasidan
function goToCheckout() {
  window.location.href = 'kassa.html'; // Navigera till kassasidan
}

// ======================= Kassasidans Funktioner =======================

// Funktion för att visa varukorgen på kassasidan
function renderCheckout() {
  const checkoutItems = document.getElementById('checkout-items'); // Lista med produkter
  const checkoutTotal = document.getElementById('checkout-total'); // Totalpris i <span>

  if (!checkoutItems || !checkoutTotal) return; // Säkerställ att vi är på kassasidan

  // Hämta varukorgen från sessionStorage
  let savedCart = JSON.parse(sessionStorage.getItem('varukorg')) || [];
  let total = 0;

  // Töm tidigare innehåll
  checkoutItems.innerHTML = '';

  // Loopa igenom varukorgen och skapa listor med "Ta bort"-knappar
  savedCart.forEach((vara, index) => {
    total += vara.pris; // Beräkna totalpris

    // Skapa listobjekt
    const li = document.createElement('li');
    li.textContent = `${vara.produktNamn} - ${vara.pris} kr`;

    // Skapa "Ta bort"-knapp för varje produkt
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Ta bort';
    removeButton.onclick = () => removeFromCheckout(index);
    li.appendChild(removeButton);

    checkoutItems.appendChild(li);
  });

  // Uppdatera totalpris i <span>
  checkoutTotal.textContent = total;

  // Uppdatera sessionStorage
  sessionStorage.setItem('varukorg', JSON.stringify(savedCart));
}

// Funktion för att ta bort en specifik produkt från varukorgen på kassasidan
function removeFromCheckout(index) {
  let savedCart = JSON.parse(sessionStorage.getItem('varukorg')) || [];
  savedCart.splice(index, 1); // Ta bort produkten vid angivet index
  sessionStorage.setItem('varukorg', JSON.stringify(savedCart)); // Uppdatera sessionStorage
  renderCheckout(); // Rendera om sidan
}

// Funktion för att tömma hela varukorgen på kassasidan
function clearCheckout() {
  sessionStorage.removeItem('varukorg'); // Ta bort varukorgen från sessionStorage
  varukorg = []; // Återställ arrayen lokalt
  renderCheckout(); // Rendera om sidan
}

// ======================= Initiering =======================

// Kör vid sidladdning
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes('kassa.html')) {
    // Om vi är på kassasidan
    renderCheckout();
  } else {
    // Om vi är på förstasidan
    updateCart();
  }
});



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

