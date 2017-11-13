// Run a loop to add a style property when a button is clicked; to each button element with the class .button-amounts

// Run a loop to find the donation amount button that has been clicked and store it in a variable.

var btnAmounts = document.querySelectorAll(".button-amounts > button");

//Loops through array of donation amounts and adds an onclick event to each.
//Assigns a variable to the chosen dollar amount using the text (string and splice) within the <button> tag. 

var assignDonationAmount = function (arg) {
    
    chosenDonation = arg;
    console.log(chosenDonation);
};

for (i=0; i<btnAmounts.length; ++i) {
    
    var chosenDonation = 0;
    
    btnAmounts[i].onclick = function () {
        
        //console.log(this);
        
        // Why do I need to create another variable here? Why can't I write:
        // btnAmounts[i].style.backgroundColor = "red";
//        var btnAmountbg = this;
//        btnAmountbg.style.backgroundColor = "red";
        //console.log("You've chosen " + document.activeElement.textContent.slice(1));
        
        assignDonationAmount(document.activeElement.textContent.slice(1));
    };
};






//
//
//
//for (i = 0; i < btnAmounts.length; ++i) {
//    
//        
//        btnAmounts[i].onclick = chosenDonationAmount(document.activeElement.textContent.slice(1));
//   
//};
//
//console.log(chosenDonationAmount);
////



















