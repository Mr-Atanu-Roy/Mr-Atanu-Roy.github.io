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

    //getting the elements
    let contactMeContainer = document.getElementById('contactMeContainer');
    let contactMeContainerOpener = document.getElementById('contactMeContainerOpener');
    let closeContactBtn = document.getElementById('closeContactBtn');
    let contactMeContainerOpenerBtn = document.getElementById('contactMeContainerOpenerBtn');
    let headerContactMeBtn = document.getElementById('header-contactMe-btn');


    //func to get bottom val based on device width
    let getBottomVal = () => {
        if(window.innerWidth > 768){
            return "-13.55rem";
        }else{
            return "-24rem";
        }
    }

    //func to control the contact me container
    let contactMeController = () =>{
        if(contactMeContainer.style.bottom != "0px"){
            contactMeContainer.style.boxShadow = "0 0 145px -35px rgb(168,126,250)";
            contactMeContainer.style.bottom = "0";
            contactMeContainerOpenerBtn.style.display = "none";
            closeContactBtn.style.display = "block";
        }else{
            contactMeContainer.style.boxShadow = "0 1px 85px -28px rgb(168,126,250)";
            contactMeContainer.style.bottom = getBottomVal();
            closeContactBtn.style.display = "none";
            contactMeContainerOpenerBtn.style.display = "flex";
        }
        
    }

    //adding event listeners to the header contact me buttons
    headerContactMeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        contactMeController();
    });

    //adding event listeners to the header of the contact me container
    contactMeContainerOpener.addEventListener('click', function (e) {
        e.preventDefault();
        contactMeController();
    });

    //adding event listeners to the arrow of the contact me container
    contactMeContainerOpenerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        contactMeController();
    });
    
    //adding event listeners to the close button of the contact me container
    closeContactBtn.addEventListener('click', function (e) {
        e.preventDefault();
        contactMeContainer.style.boxShadow = "0 1px 85px -28px rgb(168,126,250)";
        contactMeContainer.style.bottom = getBottomVal();
        closeContactBtn.style.display = "none";
        contactMeContainerOpenerBtn.style.display = "flex";
        
    });

    //when contactMeContainer is opened and body is clicked, then slide it down
    document.getElementsByTagName('main')[0].addEventListener('click', function (e) {
        // e.preventDefault();
        if(contactMeContainer.style.bottom == "0px"){
            contactMeContainer.style.boxShadow = "0 1px 85px -28px rgb(168,126,250)";
            contactMeContainer.style.bottom = getBottomVal();
            closeContactBtn.style.display = "none";
            contactMeContainerOpenerBtn.style.display = "flex";
        }
    });

}catch (error) {
    console.log("Error "+error);
}   
