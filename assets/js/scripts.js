// Send "Email" when user signs up for newsletter. 


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


// Run a loop to add a style property when a button is clicked; to each button element with the class .button-amounts

// Run a loop to find the donation amount button that has been clicked and store it in a variable.








//Loops through array of donation amounts and adds an onclick event to each.

//Assigns a variable to the chosen dollar amount using the text (string and splice) within the <button> tag. 

var btnAmounts = document.querySelectorAll(".button-amounts > button");

assignDonationAmount = 0;


for (i = 0; i < btnAmounts.length; ++i) {
    btnAmounts[i].onclick = function () {
        this.style.backgroundColor = "red";
        assignDonationAmount = document.activeElement.textContent.slice(1);
        console.log(assignDonationAmount);
    };
};

//Loops through array of donation frequency and adds an onclick event to each.

//Assigns a variable to the chosen frequency amount.

var btnFreq = document.querySelectorAll(".button-frequency > button");

assignFreqAmount = "";


for (i = 0; i < btnFreq.length; ++i) {
    btnFreq[i].onclick = function () {
        this.style.backgroundColor = "red";
        assignFreqAmount = document.activeElement.textContent;
        console.log(assignFreqAmount);
    };
};













//
//    var btnAmounts = document.querySelectorAll(".button-amounts > button");
//    console.log(btnAmounts);
//
//    btnAmounts.addEventListener("click", donateBtnChoose, false);
//
//    function donateBtnChoose() {
//
//    };



//var headerHeight = document.querySelector(".masthead").clientHeight;
//
//console.log(headerHeight);
//
//var main = document.querySelector("main");
//
//mainHeight = main.style.height = 'calc(100vh - ' + headerHeight +'px)';
//console.log(mainHeight);

