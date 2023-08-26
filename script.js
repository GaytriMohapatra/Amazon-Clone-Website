//sign-in and language dropdown
const dropdownbtn = document.querySelectorAll(".dropdownbtn")
const dropdownbox = document.querySelectorAll(".dropdownbox")

dropdownbtn.forEach((dropb, index) => {
    dropb.addEventListener("mouseover", () => {
        dropdownbox[index].classList.remove("active");
    });
});

dropdownbtn.forEach((dropb, index) => {
    dropb.addEventListener("mouseout", () => {
        dropdownbox[index].classList.add("active");
    });
});

//prime drop-down
const primeSelectBox = document.querySelector(".prime-select-box");
const primeDropDown = document.querySelector(".prime-drop-down");

primeSelectBox.addEventListener("mouseenter", () => {
    primeDropDown.style.display = "block";
});

primeSelectBox.addEventListener("mouseleave", () => {
    primeDropDown.style.display = "none";
});

//for sidebar
// const asidebg = document.querySelector(".aside-bg");
// const opensidebar = document.querySelector("#opensidebar")
// const closesidebar = document.getElementById("closesidebar")
// const sidebar = document.querySelector(".sidebar")
// opensidebar.addEventListener("click", () => {
//     sidebar.classList.add("active")
//     asidebg.classList.add("active")
//     document.body.classList.add("sidebaractive")
// })
// closesidebar.addEventListener("click", () => {
//     sidebar.classList.remove("active")
//     asidebg.classList.remove("active")
//     document.body.classList.remove("sidebaractive")
// })

function openNav() {
    document.getElementById("mySidenav").style.animation = "expand 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("closeBtn").style.animation = "show 0.3s";
    //Overlay
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.animation = "show 0.3s";

}

function closeNav() {
    document.getElementById("mySidenav").style.animation = "collapse 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.animation = "hide 0.3s";
    //Overlay
    document.getElementById("overlay").style.animation = "hide 0.3s";

    setTimeout(() => {
        document.getElementById("closeBtn").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        //Reset Menus
        document.getElementById("main-container").style.animation = "";
        document.getElementById("main-container").style.transform = "translateX(0px)";
        document.getElementById("sub-container").style.animation = "";
        document.getElementById("sub-container").style.transform = "translateX(380px)";
    }, 300)
}

let firstDropdownOpen = false;

function firstDropDown() {
    firstDropdownOpen = !firstDropdownOpen;
    if(firstDropdownOpen) {
        document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-up");
        document.querySelector("#firstDropDown div").innerHTML = "See Less";
        //Handle Container
        document.getElementById("firstContainer").style.display = "block";
        document.getElementById("firstContainer").style.animation = "expandDropDown 0.3s forwards";
        document.getElementById("firstContainer").style.transition = "height 0.3s";
        document.getElementById("firstContainer").style.height = "410px";
    }else{
        document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-down");
        document.querySelector("#firstDropDown div").innerHTML = "See More";
        //Handle Container
        document.getElementById("firstContainer").style.animation = "collapseDropDown 0.2s forwards";
        document.getElementById("firstContainer").style.transition = "height 0.2s";
        document.getElementById("firstContainer").style.height = "0px";
        setTimeout(() => {
            document.getElementById("firstContainer").style.display = "none";
        }, 200)
        
    }
}

let secondDropDownOpen = false;

function secondDropDown() {
    secondDropDownOpen = !secondDropDownOpen;

    if(secondDropDownOpen) {
        document.querySelector("#secondDropDown i").setAttribute("class", "fas fa-chevron-up");
        document.querySelector("#secondDropDown div").innerHTML = "See Less";
        //Handle Container
        document.getElementById("secondContainer").style.display = "block";
        document.getElementById("secondContainer").style.animation = "expandDropDown 0.3s forwards";
        document.getElementById("secondContainer").style.transition = "height 0.3s";
        document.getElementById("secondContainer").style.height = "260px";
    }else{
        document.querySelector("#secondDropDown i").setAttribute("class", "fas fa-chevron-down");
        document.querySelector("#secondDropDown div").innerHTML = "See More";
        //Handle Container
        document.getElementById("secondContainer").style.animation = "collapseDropDown 0.2s forwards";
        document.getElementById("secondContainer").style.transition = "height 0.2s";
        document.getElementById("secondContainer").style.height = "0px";
        setTimeout(() => {
            document.getElementById("secondContainer").style.display = "none";
        }, 200)
        
    }
}

document.querySelectorAll(".sidenavRow").forEach(row => {
    row.addEventListener("click", () => {
        document.getElementById("main-container").style.animation = "mainAway 0.3s forwards";
        document.getElementById("sub-container").style.animation = "subBack 0.3s forwards";
    });
});

document.getElementById("mainMenu").addEventListener("click", () => {
    document.getElementById("main-container").style.animation = "mainBack 0.3s forwards";
    document.getElementById("sub-container").style.animation = "subPush 0.3s forwards";
})

//subNavContent

function openPrimeVideo() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Prime Video</div>
    <a href="#"><div class="sidenavContent">All Videos</div></a>`;
}

function openAmazonMusic() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Amazon Music</div>
    <a href="#"><div class="sidenavContent">All Music</div></a>`;
}

// location-box popup
  const locationBoxHome = document.querySelector('.location-box-home');
  const addressBox = document.querySelector('.address.border-box-1');
  const signInButton = document.querySelector('.sign-in-location');
  const pincodeInput = document.getElementById('pincode-input');
  const applyButton = document.getElementById('apply-button');
  const countrySelect = document.getElementById('country-select');
  const closePopupButton = document.querySelector('.close-popup-button');

  // Function to show the location popup
  function showLocationPopup() {
    locationBoxHome.style.display = 'flex';
  }

  // Function to hide the location popup
  function hideLocationPopup() {
    locationBoxHome.style.display = 'none';
  }

  // Function to handle clicking the "Sign in to see your address" button
  signInButton.addEventListener('click', function () {
    showLocationPopup();
  });

  // Function to handle clicking the "Apply" button after entering a pincode
  applyButton.addEventListener('click', function () {
    const enteredPincode = pincodeInput.value.trim();
    if (enteredPincode) {
      alert('You entered pincode: ' + enteredPincode);
    }
  });

  // Function to handle selecting an option from the "Deliver outside India" dropdown
  countrySelect.addEventListener('change', function () {
    const selectedCountry = countrySelect.value;
    if (selectedCountry) {
      alert('You selected: ' + selectedCountry);
    }
  });

  // Show the location popup when "Hello, Select your address" is clicked
  addressBox.addEventListener('click', function () {
    showLocationPopup();
  });

  // Close the popup when the cross button is clicked
  closePopupButton.addEventListener('click', function () {
    hideLocationPopup();
  });

  // Close the popup when clicked anywhere outside it
  document.addEventListener('click', function (event) {
    const isLocationBoxClicked = locationBoxHome.contains(event.target);
    const isAddressBoxClicked = addressBox.contains(event.target);
    if (!isLocationBoxClicked && !isAddressBoxClicked) {
      hideLocationPopup();
    }
  });
