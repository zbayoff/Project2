// ----------------Breadcrumb Displays--------------------------

// When carousel item is active, display the breadcrumb and hide those ahead of it, but keep the previous ones. 

var carouselItems = document.querySelectorAll('.carousel-item');
var breadcrumbItems = document.querySelectorAll('.breadcrumb-item');

//Set the display of the all breadcrumbs, except the first, to "disabled".
(function () {
    for (var j = 0; j < breadcrumbItems.length; j++) {
        breadcrumbItems[j].setAttribute(
            "style", "opacity: .65; pointer-events: none; ");
    }
    breadcrumbItems[0].setAttribute(
        "style", "opacity: 1.0; pointer-events: auto; ");
})();

function displayBreadcrumbs(a) {

    for (var j = 0; j < breadcrumbItems.length; j++) {
        breadcrumbItems[j].setAttribute(
            "style", "opacity: .65; pointer-events: none; ");
    }
    breadcrumbItems[0].setAttribute(
        "style", "opacity: 1.0; pointer-events: auto; ");
    y = 0;
    for (x = 0; x < carouselItems.length; x++) {
        //if carousel item has a class of active, loop through and display all breadcrumbs up to and including that carousel item.
        //loop through all elements after the active element and set to display "none"
        if (carouselItems[x].classList.contains("active") == true) {
            if (a == "Next") {
                y = x + 1;
            } else {
                y = x - 1;
            };
        };
        for (r = 0; r <= y; r++) {
            breadcrumbItems[r].setAttribute(
                "style", "opacity: 1.0; pointer-events: auto;");
        };
    };
};
var slideButtons = document.querySelectorAll('.slideBtn');
for (f = 0; f < slideButtons.length; f++) {
    (function (index) {
        slideButtons[index].addEventListener("click", function () {
            a = this.innerHTML;
            displayBreadcrumbs(a);
        });
    })(f);
};

// ----------------Select Amount--------------------------

// Run a loop to add a style property when a button is clicked; to each button element with the class .button-amounts

// Run a loop to find the donation amount button that has been clicked and store it in a variable.

var btnAmounts = document.querySelectorAll(".button-amounts > button");

clickedPosition = 0;
DonationAmount = 0;

var clickedArray = [];

for (j = 0; j < btnAmounts.length; j++) {
    clickedArray[j] = false;
}

//Loops through array of donation amounts and adds an onclick event to each.
//Assigns a variable to the chosen dollar amount using the text (string and splice) within the <button> tag. 

var otherAmountInput = document.querySelector("#other-amount");
var inputSelected = false;
otherAmountInput.addEventListener("mouseup", onMouseUp, false);

function onMouseUp() {
    otherAmountInput = document.activeElement;
    clearButtons();
    inputSelected = true;
    checkInputs();
}

// Function to Clear Buttons
function clearButtons() {
    for (z = 0; z < btnAmounts.length; z++) {
        btnAmounts[z].style.backgroundColor = "#007bff";
    }
}

// Check which option is selected, a button amount or Other Amount input field.
function checkInputs() {
    if (inputSelected == true) {
        otherAmountInput.onkeyup = function () {
            DonationAmount = otherAmountInput.value;
        }
    } else {
        for (i = 0; i < btnAmounts.length; ++i) {
            (function (index) {
                btnAmounts[i].onclick = function () {
                    inputSelected = false;
                    otherAmountInput.value = "";
                    for (a = 0; a < btnAmounts.length; a++) {
                        clickedArray[a] = false;
                    }
                    clickedArray[index] = true;
                    for (z = 0; z < btnAmounts.length; z++) {
                        if (clickedArray[z] == true) {
                            btnAmounts[z].style.backgroundColor = "red";
                            clickedPosition = z;
                            DonationAmount = btnAmounts[z].textContent.slice(1);
                        } else {
                            btnAmounts[z].style.backgroundColor = "#007bff";
                        }
                    }
                };
            })(i); 
        };
    };
};

checkInputs();

//Loops through array of donation frequency and adds an onclick event to each.
//Assigns a variable to the chosen frequency amount.

var btnFreq = document.querySelectorAll(".button-frequency > button");
//
//assignFreqAmount = "";
//

var freqArray = [];
FreqAmount = 0;

for (j = 0; j < btnFreq.length; j++) {
    freqArray[j] = false;
}

for (i = 0; i < btnFreq.length; ++i) {
    (function (index) {
        btnFreq[i].onclick = function () {
            for (a = 0; a < btnFreq.length; a++) {
                freqArray[a] = false;
            }
            freqArray[index] = true;
            for (z = 0; z < btnFreq.length; z++) {
                if (freqArray[z] == true) {
                    btnFreq[z].style.backgroundColor = "red";
                    clickedPosition = z;
                    FreqAmount = btnFreq[z].textContent;
                } else {
                    btnFreq[z].style.backgroundColor = "#007bff";
                }
            }
        };
    })(i); // use different variable for scoping? 
};

// Check values of inputs. If not filled, display alert saying values must be filled out.



// ----------------Mailing Address--------------------------

// Store all values from input and select fields into variables

var mailingFirstName = document.querySelector("#mail-first-name");
var mailingLastName = document.querySelector("#mail-last-name");
var mailingEmail = document.querySelector("#mail-email");
var mailingAddress = document.querySelector("#mail-address");
var mailingAddress2 = document.querySelector("#mail-address-2");
var mailingCity = document.querySelector("#mail-city");
var mailingState = document.querySelector("#mail-state");
var mailingZip = document.querySelector("#mail-zip-code");
var mailingCountry = document.querySelector("#mail-country");

// ----------------Billing Address--------------------------

// Store all values from input and select fields into variables

var billingFirstName = document.querySelector("#bill-first-name");
var billingLastName = document.querySelector("#bill-last-name");
var billingEmail = document.querySelector("#bill-email");
var billingAddress = document.querySelector("#bill-address");
var billingAddress2 = document.querySelector("#bill-address-2");
var billingCity = document.querySelector("#bill-city");
var billingState = document.querySelector("#bill-state");
var billingZip = document.querySelector("#bill-zip-code");
var billingCountry = document.querySelector("#bill-country");

// ----------------Payment Info--------------------------

var creditCardName = document.querySelector("#credit-name");
var creditCardNumber = document.querySelector("#credit-number");
var creditCVV = document.querySelector("#credit-cvv");
var creditExp = document.querySelector("#credit-exp");

// Store all values from input and select fields into variables

var radioCheckAddress = document.querySelector("#radio-check-address");

// set onlick for checkbox to then fill all required inputs and disable them. 

radioCheckAddress.onclick = function () {
    if (radioCheckAddress.checked == true) {
        billingFirstName.value = mailingFirstName.value;
        billingFirstName.disabled = true;
        billingLastName.value = mailingLastName.value;
        billingLastName.disabled = true;
        billingEmail.value = mailingEmail.value;
        billingEmail.disabled = true;
        billingAddress.value = mailingAddress.value;
        billingAddress.disabled = true;
        billingAddress2.value = mailingAddress2.value;
        billingAddress2.disabled = true;
        billingCity.value = mailingCity.value;
        billingCity.disabled = true;
        billingState.value = mailingState.value;
        billingState.disabled = true;
        billingZip.value = mailingZip.value;
        billingZip.disabled = true;
        billingCountry.value = mailingCountry.value;
        billingCountry.disabled = true;
    }
    if (radioCheckAddress.checked == false) {
        billingFirstName.value = "";
        billingFirstName.disabled = false;
        billingLastName.value = "";
        billingLastName.disabled = false;
        billingEmail.value = "";
        billingEmail.disabled = false;
        billingAddress.value = "";
        billingAddress.disabled = false;
        billingAddress2.value = "";
        billingAddress2.disabled = false;
        billingCity.value = "";
        billingCity.disabled = false;
        billingState.value = "State";
        billingState.disabled = false;
        billingZip.value = "";
        billingZip.disabled = false;
        billingCountry.value = "Country";
        billingCountry.disabled = false;
    }
}

//    var headerHeight = document.querySelector(".masthead").clientHeight;
//    
//    console.log(headerHeight);
//    
//    var main = document.querySelector("main");
//    
//    mainHeight = main.style.height = 'calc(100vh - ' + headerHeight +'px)';
//    console.log(mainHeight);

// ----------------Payment Info--------------------------

var donateBtn = document.querySelector("#btn-donate");

donateBtn.onclick = function () {

    var modalBody = document.querySelector("#donation-modal-body");

    var personalInfoName = document.querySelector("#personal-name").appendChild(document.createElement("p"));
    personalInfoName.innerHTML = mailingFirstName.value + " " + mailingLastName.value + "<br>";
    personalInfoName.style.fontWeight = 600;
    personalInfoName.style.backgroundColor = "#D3D3D3";

    var personalInfoEmail = document.querySelector("#personal-email").appendChild(document.createElement("p"));
    personalInfoEmail.innerHTML = mailingEmail.value;
    personalInfoEmail.style.fontWeight = 600;
    personalInfoEmail.style.backgroundColor = "#D3D3D3";

    var personalInfoAddress = document.querySelector("#personal-address").appendChild(document.createElement("p"));
    personalInfoAddress.innerHTML = mailingAddress.value + " " + "<br>" + mailingAddress2.value + "<br>" + mailingCity.value + "," + " " + mailingState.value + " " + mailingZip.value + "<br>" + mailingCountry.value;
    personalInfoAddress.style.fontWeight = 600;
    personalInfoAddress.style.backgroundColor = "#D3D3D3";

    var donationAmt = document.querySelector("#donation-amt").appendChild(document.createElement("p"));
    donationAmt.innerHTML = "$" + DonationAmount + ".00";
    donationAmt.style.fontWeight = 600;
    donationAmt.style.backgroundColor = "#D3D3D3";

    var donationFreq = document.querySelector("#donation-freq").appendChild(document.createElement("p"));
    donationFreq.innerHTML = FreqAmount;
    donationFreq.style.fontWeight = 600;
    donationFreq.style.backgroundColor = "#D3D3D3";

    var ccName = document.querySelector("#credit-card-name").appendChild(document.createElement("p"));
    ccName.innerHTML = creditCardName.value;
    ccName.style.fontWeight = 600;
    ccName.style.backgroundColor = "#D3D3D3";

    var ccNo = document.querySelector("#credit-card-no").appendChild(document.createElement("p"));
    ccNo.innerHTML = creditCardNumber.value;
    ccNo.style.fontWeight = 600;
    ccNo.style.backgroundColor = "#D3D3D3";

    var ccExp = document.querySelector("#exp-date").appendChild(document.createElement("p"));
    ccExp.innerHTML = creditExp.value;
    ccExp.style.fontWeight = 600;
    ccExp.style.backgroundColor = "#D3D3D3";

    var ccCVV = document.querySelector("#cvv").appendChild(document.createElement("p"));
    ccCVV.innerHTML = creditCVV.value;
    ccCVV.style.fontWeight = 600;
    ccCVV.style.backgroundColor = "#D3D3D3";
}
