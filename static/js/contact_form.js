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
        if(message.length > 10){
            if(message.length < 450){
                if(validateName(name) && validateEmail(email) && validatePhone(phone, blank=true)){
                    //valid data
                    // Convert the to a JSON string
                    var jsonData = JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone,
                        country: country,
                        message: message
                    });
    
                    // Send the data using post
                    //setting the url
                    var url = "./api/contact_form.php";
    
                    // Create an options object for the fetch request
                    var requestOptions = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: jsonData
                    };
                    // Send the POST request
                    fetch(url, requestOptions)
                    .then(response => {
                        if (response.status == 405) {
                            formSubmitBtn.innerHTML = FormSubmitBtnContent; 

                            window.alert(`Error Occurred: Network response was NOT OK. \nTry again later.`);
                            return null;
                        }else{
                            return response.json(); // Parse the response body as JSON
                        }
                    })
                    .then(data => {
                        // Handle the JSON response data
                        if(data != null){
                            if(data["status"] == 201 && data["message"] == "Record added" && data["error"] == null){
                                formSubmitBtn.innerHTML = FormSubmitBtnContent; 
                                //success
                                window.alert(`Your response has been recorded. \nI will get back to you soon.`);
                                form.reset();
                                
                                //sliding down the contact me form
                                let container = document.getElementById('contactMeContainer');
                                
                                container.style.boxShadow = "0 0 145px -35px rgb(168,126,250)";
                                container.style.bottom = window.innerWidth > 768 ? "-13.55rem" : "-24rem";
                                document.getElementById('contactMeContainerOpenerBtn').style.display = "none";
                                document.getElementById('closeContactBtn').style.display = "block";
                            }else{
                                formSubmitBtn.innerHTML = FormSubmitBtnContent; 
                                console.log(data)
                                //error
                                window.alert(`Error: ${data["error"]}... \n${data["message"]}`);
                            }
                        }
                    })
                    .catch(error => {
                        formSubmitBtn.innerHTML = FormSubmitBtnContent; 
                        console.log("Error: "+error)
                        // Handle errors
                        window.alert(`Some error occurred. \nTry again later.`);
                    });
                }else{
                    formSubmitBtn.innerHTML = FormSubmitBtnContent; 
                    //invalid data
                    window.alert(`Invalid Data. \nPlease check the data you have entered.`)
                }
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

   });


}catch (error) {
    console.log("Error "+error);
}   
