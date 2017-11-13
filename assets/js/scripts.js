// Send "Email" when user signs up for newsletter. 

//window.onload = function () {
//    document.querySelector("#news-email-btn").onclick = function (e) {
//
//        e.preventDefault();
//        newletterEmail = document.querySelector("#news-email-input").value;
//
//        if (newletterEmail.indexOf("@") > 0 && newletterEmail.indexOf(".") > 1) {
//            alert("Thank you for signing up for our newsletter. A confirmation email has been sent to: " + newletterEmail);
//            document.querySelector("#news-email-input").value = "";
//        } else {
//            alert("Please enter a valid email. Something like: zack@bayoff.com");
//        };
//    };
//};

// Run a loop to add a style property when a button is clicked; to each button element with the class .button-amounts

// Run a loop to find the donation amount button that has been clicked and store it in a variable.








//Loops through array of donation amounts and adds an onclick event to each.
//Assigns a variable to the chosen dollar amount using the text (string and splice) within the <button> tag. 

//var assignDonationAmount = function (arg) {
//
//    chosenDonation = arg;
//    console.log(chosenDonation);
//};
//
//for (i = 0; i < btnAmounts.length; ++i) {
//
//    var chosenDonation = 0;
//
//    btnAmounts[i].onclick = function () {
//
//        //console.log(this);
//
//        // Why do I need to create another variable here? Why can't I write:
//        // btnAmounts[i].style.backgroundColor = "red";
//        //        var btnAmountbg = this;
//        //        btnAmountbg.style.backgroundColor = "red";
//        //console.log("You've chosen " + document.activeElement.textContent.slice(1));
//
//        assignDonationAmount(document.activeElement.textContent.slice(1));
//    };
//};





//
//    var btnAmounts = document.querySelectorAll(".button-amounts > button");
//    console.log(btnAmounts);
//
//    btnAmounts.addEventListener("click", donateBtnChoose, false);
//
//    function donateBtnChoose() {
//
//    };



var headerHeight = document.querySelector(".masthead").clientHeight;

console.log(headerHeight);

var mainHeight = document.querySelector("main");

mainHeight.style.height = '"calc(100vh - " + headerHeight)';
console.log(mainHeight);

























