// func to validate name
let validateName = (name) => {
    const nameRegex = /^[A-Za-z\s\-']+$/;

    try {

        if(name != "" && name.length > 2){ //check if name is empty and has valid length
            if (nameRegex.test(name)) { //match with the regex
                //valid name
                return true;
            }
        }
               
    } catch (error) {
        console.log("Error "+error);
    }

    return false;

}

// func to validate email 
let validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    try {

        if(email != ""){ //check if email is empty
            if (emailRegex.test(email)) { //match with the regex
                //valid email
                return true;
            }
        }
               
    } catch (error) {
        console.log("Error "+error);
    }

    return false;
}

// func to validate phone number
let validatePhone = (phone, blank=false) => {
    const phoneRegex = /^\d{10}$/;

    try {

        if(blank == true && phone == ""){ //check if phone is empty and blank is true (for optional field)
            return true;
        }

        if(phone != ""){ //check if phone is empty
            if (phoneRegex.test(phone)) { //match with the regex
                //valid phone
                return true;
            }
        }
               
    } catch (error) {
        console.log("Error "+error);
    }

    return false;
}


try{ 
    //contact me form
    var form = document.getElementById("contactForm");
    let formSubmitBtn = document.getElementById("contactForm-submit-btn");
    const FormSubmitBtnContent = formSubmitBtn.innerHTML;


    // adding event listener to form when submitted
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        //changing the submit button content
        formSubmitBtn.innerHTML = `<span class="py-3">Submitting...</span>`;

        //getting the form data
        var data = new FormData(form);
        var name = data.get('name').trim();
        var email = data.get('email').trim();
        var phone = data.get('phone').trim();
        var country = data.get('country');
        var message = data.get('message').trim();

        //validating the data
        if(validateName(name) && validateEmail(email) && validatePhone(phone, blank=true)){
            //validate message
            if(message.length > 10){
                if(message.length < 450){
            
                    var contactFormData = {
                        name: name,
                        email: email,
                        phone: phone,
                        country: country,
                        message: message
                    };
    
                    // Submit form using pageclip 
                    Pageclip.send('xOvO19qYNv6JtHECcq060hSxyq3JDD7T', 'contact', contactFormData, function (error, response) {
                        if(response["data"] == "ok" && error == null){
                            window.alert(`Your response has been recorded. \nI will get back to you soon.`);
                            formSubmitBtn.innerHTML = FormSubmitBtnContent; 

                            form.reset();
                                
                            //sliding down the contact me form
                            let container = document.getElementById('contactMeContainer');
                            
                            container.style.boxShadow = "0 0 145px -35px rgb(168,126,250)";
                            container.style.bottom = window.innerWidth > 768 ? "-13.55rem" : "-24rem";
                            document.getElementById('contactMeContainerOpenerBtn').style.display = "none";
                            document.getElementById('closeContactBtn').style.display = "block";
                        }else{
                            console.log(error);
                            window.alert(`Failed to submit your record. \nTry again later.`);
                            formSubmitBtn.innerHTML = FormSubmitBtnContent; 
                        }
                    })
                    
                }else{
                    formSubmitBtn.innerHTML = FormSubmitBtnContent; 
                    //invalid message
                    window.alert("Message too long...")
                }
            }else{
                formSubmitBtn.innerHTML = FormSubmitBtnContent; 
                //invalid message
                window.alert("Message too short...")
            }

        }else{
            formSubmitBtn.innerHTML = FormSubmitBtnContent; 
            //invalid data
            window.alert(`Invalid Data. \nPlease check the data you have entered.`)
        }

   });


}catch (error) {
    console.log("Error "+error);
}   
