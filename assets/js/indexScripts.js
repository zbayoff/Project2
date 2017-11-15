// Send "Email" when user signs up for newsletter. 

    document.querySelector("#news-email-btn").onclick = function (e) {

        e.preventDefault();
        newletterEmail = document.querySelector("#news-email-input").value;

        if (newletterEmail.indexOf("@") > 0 && newletterEmail.indexOf(".") > 1) {
            alert("Thank you for signing up for our newsletter. A confirmation email has been sent to: " + newletterEmail);
            document.querySelector("#news-email-input").value = "";
        } else {
            alert("Please enter a valid email. Something like: zack@bayoff.com");
        };
    };
