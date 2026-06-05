try {
    //getting the elements
    let contactMeContainer = document.getElementById("contactMeContainer");
    let contactMeContainerOpener = document.getElementById(
        "contactMeContainerOpener",
    );
    let closeContactBtn = document.getElementById("closeContactBtn");
    let contactMeContainerOpenerBtn = document.getElementById(
        "contactMeContainerOpenerBtn",
    );
    let headerContactMeBtn = document.getElementById("header-contactMe-btn");
    let sayHelloBtn = document.getElementById("say-hello-btn");

    //func to get bottom val based on device width
    let getBottomVal = () => {
        if (window.innerWidth > 768) {
            return "-13.55rem";
        } else {
            return "-24rem";
        }
    };

    //func to control the contact me container
    let contactMeController = () => {
        if (contactMeContainer.style.bottom != "0px") {
            contactMeContainer.style.boxShadow =
                "0 0 145px -35px rgb(168,126,250)";
            contactMeContainer.style.bottom = "0";
            contactMeContainerOpenerBtn.style.display = "none";
            closeContactBtn.style.display = "block";
        } else {
            contactMeContainer.style.boxShadow =
                "0 1px 85px -28px rgb(168,126,250)";
            contactMeContainer.style.bottom = getBottomVal();
            closeContactBtn.style.display = "none";
            contactMeContainerOpenerBtn.style.display = "flex";
        }
    };

    //shared click handler for opening the contact panel
    let openContactMe = function (e) {
        e.preventDefault();
        e.stopPropagation();
        contactMeController();
    };

    //adding event listeners to the contact me open triggers
    [
        headerContactMeBtn,
        contactMeContainerOpener,
        contactMeContainerOpenerBtn,
        sayHelloBtn,
    ].forEach(function (element) {
        // alert(element);
        element.addEventListener("click", openContactMe);
    });

    //adding event listeners to the close button of the contact me container
    closeContactBtn.addEventListener("click", function (e) {
        e.preventDefault();
        contactMeContainer.style.boxShadow =
            "0 1px 85px -28px rgb(168,126,250)";
        contactMeContainer.style.bottom = getBottomVal();
        closeContactBtn.style.display = "none";
        contactMeContainerOpenerBtn.style.display = "flex";
    });

    //when contactMeContainer is opened and body is clicked, then slide it down
    document
        .getElementsByTagName("main")[0]
        .addEventListener("click", function (e) {
            // e.preventDefault();
            if (contactMeContainer.style.bottom == "0px") {
                contactMeContainer.style.boxShadow =
                    "0 1px 85px -28px rgb(168,126,250)";
                contactMeContainer.style.bottom = getBottomVal();
                closeContactBtn.style.display = "none";
                contactMeContainerOpenerBtn.style.display = "flex";
            }
        });
} catch (error) {
    console.log("Contact Error " + error);
}
