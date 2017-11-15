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
            })(i); // use different variable for scoping? 
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
assignFreqAmount = 0;

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
                    assignFreqAmount = btnFreq[z].textContent;
                } else {
                    btnFreq[z].style.backgroundColor = "#007bff";
                }
            }
        };
    })(i); // use different variable for scoping? 
};


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

var radioCheckAddress = document.querySelector("#radio-check-address");


// set onlick for checkbox to then fill all required inputs and disable them. 



        radioCheckAddress.onclick = function() {
            if (radioCheckAddress.checked == true){
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
            if (radioCheckAddress.checked == false){
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
            




    // mailingFirstName.onkeyup = function () {
    //            var mailingFirstNameTyped = mailingFirstName.value;
    //            console.log(mailingFirstNameTyped);
    //        }






    //var headerHeight = document.querySelector(".masthead").clientHeight;
    //
    //console.log(headerHeight);
    //
    //var main = document.querySelector("main");
    //
    //mainHeight = main.style.height = 'calc(100vh - ' + headerHeight +'px)';
    //console.log(mainHeight);

    // ----------------Payment Info--------------------------


    var donateBtn = document.querySelector("#btn-donate");

    donateBtn.onclick = function () {
        
        alert(
        "Thank you for donating! The information you provided is summarized below: \n Amount Donated: " + "$" + DonationAmount + ".00"
        
        
        
        )
        
        
        
        
        
        
        
        
        
        
    }



    //text = [];
    //
    //donateBtn.onclick = function() {
    //    var donationForm = document.querySelector("#donation-form");
    //    
    //
    //    for (i=0; i<donationForm.length; i++) {
    //        text = text.concat(donationForm.elements[i].value);
    //    }
    //    alert(text);
    //}
