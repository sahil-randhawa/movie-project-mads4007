const showDate = localStorage.getItem('showDate');
const showTime = localStorage.getItem('showTime');

console.log("showdate : " + showDate);
console.log("Show time : " + showTime);

document.querySelector("#showDate-text").innerText = localStorage.getItem('showDate');
document.querySelector("#showTime-text").innerText = localStorage.getItem('showTime');



// Calculate and Display Ticket Price
const generalInput = document.getElementById("general-qty");
const generalDisplay = document.getElementById("general-display");
const specialInput = document.getElementById("special-qty");
const specialDisplay = document.getElementById("special-display");

let generalTotal = 0;
let specialTotal = 0;

const generalSelection = (e) => {
	const value = e.target.value;
	generalDisplay.innerHTML = value;
	console.log(`general tickets: ` + value);

	generalTotal = value * 8;
	document.getElementById("general-price").innerHTML = "$" + generalTotal;
	console.log(`general total: ` + generalTotal);

	calculate();
};

const specialSelection = (e) => {
	const value = e.target.value;
	specialDisplay.innerHTML = value;
	console.log(`special tickets: ` + value);

	specialTotal = value * 5;
	document.getElementById("special-price").innerHTML = "$" + specialTotal;
	console.log(`special total: ` + specialTotal);

	calculate();
};

const calculate = () => {
	let subTotal = generalTotal + specialTotal;
	document.getElementById("sub-total").innerHTML = "$" + subTotal;

	let tax = subTotal * 0.13;
	// tax = parseFloat(tax).toFixed(2);
	document.getElementById("tax").innerHTML = "$" +  tax.toFixed(2) ;

	let netAmount = subTotal + tax;
	// netAmount = parseFloat(netAmount).toFixed(2);
	document.getElementById("net-total").innerHTML = "$" + netAmount.toFixed(2);

	console.log(netAmount);
};

generalInput.addEventListener("change", generalSelection);
specialInput.addEventListener("change", specialSelection);

// payment method selection


const paymentMethodSelected = (e) => {
    console.log("payment method clicked")
    console.log(e)

    if (e.target.id === "pay-by-paypal"){
        document.querySelector(".paypal-fields-div").style.display = "block";
        document.querySelector(".cards-fields-div").style.display = "none";
        document.querySelector(".paypal-div").style.border = "2px dashed blue";
        document.querySelector(".cards-div").style.border = "1px dashed black";

    }else if (e.target.id === "pay-by-card"){
        document.querySelector(".cards-fields-div").style.display = "block";
        document.querySelector(".paypal-fields-div").style.display = "none";
        document.querySelector(".cards-div").style.border = "2px dashed blue";
        document.querySelector(".paypal-div").style.border = "1px dashed black";
    }
    
}

document.querySelector("#payment-method-container").addEventListener("click", paymentMethodSelected);




// pay now clicked

const sucessMessage = () => {
    
    alert("Tickets booked successfully !");

    window.location.reload();
    // document.querySelector("#general-qty").value = 0;
    // document.querySelector("#special-qty").value = 0;
    // document.querySelector("#pay-by-paypal").checked = false;
    // document.querySelector("#paypal-email").value = "";
    // document.querySelector("#paypal-password").value = "";
    // document.querySelector("#pay-by-card").checked = false;
    // document.querySelector("#ccnumber").value = "";
    // document.querySelector("#ccv").value = "";
}

const validatePaypal = () =>{
    console.log("validating paypal");
    const paypalEmail = document.querySelector("#paypal-email").value;
    const payalPassword = document.querySelector("#paypal-password").value;

    if(paypalEmail === ""){
        document.querySelector("#email-error").style.display = "block";
    }else{document.querySelector("#email-error").style.display = "none";}

    if(payalPassword == ""){
        document.querySelector("#password-error").style.display = "block";
    }else{
        document.querySelector("#password-error").style.display = "none";
    }

    if (paypalEmail === "" || payalPassword == ""){
        return;
    }

    sucessMessage();

}

const validateCard = () => {
    console.log("validating card")

    const ccnumber = document.querySelector("#ccnumber").value;
    const ccv = document.querySelector("#ccv").value;
    let ccnValid = false;
    let ccvValid =false;

    if(ccnumber === "" || isNaN(parseInt(ccnumber)) || (parseInt(ccnumber) < 1111111111111111) || (parseInt(ccnumber) > 9999999999999999) ){
        document.querySelector("#ccn-error").style.display = "block";
    }
    else{document.querySelector("#ccn-error").style.display = "none";
ccnValid=true;}

    if(ccv == "" || isNaN(parseInt(ccv)) || (parseInt(ccv) < 111) || (parseInt(ccv) > 999)){
        document.querySelector("#ccv-error").style.display = "block";
    }else{
        document.querySelector("#ccv-error").style.display = "none";
        ccvValid = true;
    }

    if (!ccnValid || !ccvValid){
        return;
    }
    // console.log ("all good")
    sucessMessage();

}

const validateTickets = () => {
        const generalQty = parseInt(document.querySelector("#general-qty").value);
        const specialQty = parseInt(document.querySelector("#special-qty").value);

        if(generalQty === 0 && specialQty === 0){
            document.querySelector("#ticket-error").style.display = "block";
            return false;
        }else{
            document.querySelector("#ticket-error").style.display = "none";
            return true;
        }
    }


const payNowClicked = (e) => {
    e.preventDefault();
    const ticketsCheck = validateTickets();
    if(!ticketsCheck){
        alert("Must select at least 1 ticket to checkout!")
        return};
    if(document.querySelector("#pay-by-paypal").checked === true){
        validatePaypal();
    }else if (document.querySelector("#pay-by-card").checked === true){
        validateCard();
    }else {
        alert("Select a Payment Method");
        return;
    }
}

document.querySelector("#pay-now").addEventListener("click", payNowClicked);