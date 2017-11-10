var btnAmounts = document.querySelectorAll(".button-amounts > button");



console.log(btnAmounts);


// Run a loop to add a style property when a button is clicked; to each button element with the class .button-amounts


for (i=0; i<btnAmounts.length; ++i) {
    
    

    btnAmounts[i].onclick = function () {
        
        
        // Why do I need to create another variable here? Why can't I write:
        // btnAmounts[i].style.backgroundColor = "red";
//        var btnAmountbg = this;
//        
//        
//        btnAmountbg.style.backgroundColor = "red";
        
        
        
        console.log("You've chosen " + document.activeElement.textContent);
        
        
        
    };

};
