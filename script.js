//url of API- where you're pulling from

const countryBaseURL = "https://api.nationalize.io";

const genderBaseURL = "https://api.genderize.io";

const ageBaseURL = "https://api.agify.io";

//Connecting to html via variables

let genderListElement = document.getElementById("name-gender-info");

let countryListElement = document.getElementById("name-country-info");

let ageListElement = document.getElementById("name-age-info");

let buttonElement = document.getElementById("name-button");

let inputElement = document.getElementById("name-input");

let name = "";

//Accessing Data

//Returns Country Data 
function fetchNameCountry(name) { 
   console.log(name);
    event.preventDefault()
    fetch(`${countryBaseURL}?name=${name}`) 
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);
       //for ( let countryData in jsonData) {
            displayNameCountryData(jsonData);
       // }                                           //Currently I have initialized the same nameData variable in all 3 functions-should work because of local scope?
                                                    //Also, potentially not the correct parameter to have inputed. Would like to do one display function for all three fetch functions, but 
                                                     //may need to do three separate ones.
    })
}

//Returns Gender Data
function fetchNameGender(name) {
    console.log(name);
    event.preventDefault()
    fetch(`${genderBaseURL}?name=${name}`)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);
        //for ( let genderData in jsonData) {
            displayNameGenderData(jsonData);
       // }
    })
}

//Returns Age Data
function fetchNameAge(name) {
    console.log(name);
    event.preventDefault()
    fetch(`${ageBaseURL}?name=${name}`)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);
        //for ( let ageData in jsonData) {
            displayNameAgeData(jsonData); //not sure if this is the correct parameter or if there is a way to loop all together.
        //} //Do not loop over objects!- need to step into with notation directly.
    })
} // Originally had same variables and parameters for the display function in all 3 functions-figured since it was created in local scope it would be fine
  // Have since changed all of the functions to separate names, parameters, and variable arguments, and nothing has changed.

//Display Functions

//Country Data
function displayNameCountryData(countryInfo) {
    console.log(countryInfo.country[0].country_id);

    
    let nameCountryOne = document.createElement("li");
    let nameCountryTwo = document.createElement("li");
    let nameCountryThree = document.createElement("li");


//If statement: 
//Note: If statement became necessary because data would not display when the array would only go up to an index of 0 or 1. So, in the case of names that were only prevalent in one country, none of the data would display. 
    if (countryInfo.country.length == 3) {

        nameCountryOne.innerText = countryInfo.country[0].country_id; 
        nameCountryTwo.innerText = countryInfo.country[1].country_id; //Think that it gets mad when there isn't a value at the indexes it's calling// Need fixed- to exemplify, try rebuscado name
        nameCountryThree.innerText = countryInfo.country[2].country_id;

    } else if (countryInfo.country.length == 2) {

        nameCountryOne.innerText = countryInfo.country[0].country_id; 
        nameCountryTwo.innerText = countryInfo.country[1].country_id; 
    } else {
        nameCountryOne.innerText = countryInfo.country[0].country_id;
    }
    

    
    nameCountryOne.classList.add("name-country-one");
    nameCountryTwo.classList.add("name-country-two");
    nameCountryThree.classList.add("name-country-three");

    countryListElement.innerHTML = '';              //removes info from previous entry
                                                   // while (countryListElement.firstChild) {removeChild}; //While countryListElement has a first child, remove it
    countryListElement.appendChild(nameCountryOne);
    countryListElement.appendChild(nameCountryTwo);
    countryListElement.appendChild(nameCountryThree);

//Calling changeCountryKeys functions 3 times with different variable arguments inputed

changeCountryKeys(nameCountryOne);
changeCountryKeys(nameCountryTwo);
changeCountryKeys(nameCountryThree);
}

//Changes country keys to country names
                                        //Note: parameter of function is "nameCountryOne" because I originally did it inside the display function, meaning it would only work with nameCountryOne variable;
                                        //Lack of foresight on my part- for some reason thought I could change everything with a magic loop. Otherwise, would have chosen a different parameter to lessen confusion.

function changeCountryKeys(nameCountryOne) { //Because this exists outside display function, computer can recognize nameCountryOne as parameter and not as nameCountryOne the variable- has to do with scope- variable is created locally in displayfunction.
    switch (nameCountryOne.innerText) {
        case "FR":
            nameCountryOne.innerText = "France";
        break;
        case "IT":
            nameCountryOne.innerText = "Italy";
        break;
        case "ES":
            nameCountryOne.innerText = "Spain";
        break;
        case "TR":
            nameCountryOne.innerText = "Turkey";
        break;
        case "DE":
            nameCountryOne.innerText = "Germany";
        break;
        case "PL":
            nameCountryOne.innerText = "Poland";
        break;
        case "GB":
            nameCountryOne.innerText = "United Kingdom";
        break;
        case "RU":
            nameCountryOne.innerText = "Russia";
        break;
        case "CZ":
            nameCountryOne.innerText = "Czech Republic";
        break;
        case "PT":
            nameCountryOne.innerText = "Portugal";
        break;
        case "NL":
            nameCountryOne.innerText = "Netherlands";
        break;
        case "BE":
            nameCountryOne.innerText = "Belgium";
        break;
        case "MA":
            nameCountryOne.innerText = "Morocco";
        break;
        case "PH":
            nameCountryOne.innerText = "Philippines";
        break;
        case "US":
            nameCountryOne.innerText = "United States";
        break;
        case "RO":
            nameCountryOne.innerText = "Romania";
        break;
        case "DZ":
            nameCountryOne.innerText = "Algeria";
        break;
        case "NG":
            nameCountryOne.innerText = "Nigeria";
        break;
        case "CH":
            nameCountryOne.innerText = "Switzerland";
        break;
        case "HU":
            nameCountryOne.innerText = "Hungary";
        break;
        case "TH":
            nameCountryOne.innerText = "Thailand";
        break;
        case "SE":
            nameCountryOne.innerText = "Sweden";
        break;
        case "ID":
            nameCountryOne.innerText = "Indonesia";
        break;
        case "IN":
            nameCountryOne.innerText = "India";
        break;
        case "UA":
            nameCountryOne.innerText = "Ukraine";
        break;
        case "MY":
            nameCountryOne.innerText = "Malaysia";
        break;
        case "TN":
            nameCountryOne.innerText = "Tunisia";
        break;
        case "SA":
            nameCountryOne.innerText = "Saudi Arabia";
        break;
        case "GR":
            nameCountryOne.innerText = "Greece";
        break;
        case "CI":
            nameCountryOne.innerText = "Ivory Coast";
        break;
        case "AT":
            nameCountryOne.innerText = "Austria";
        break;
        case "ZA":
            nameCountryOne.innerText = "South Africa";
        break;
        case "KR":
            nameCountryOne.innerText = "South Korea";
        break;
        case "CN":
            nameCountryOne.innerText = "China";
        break;
        case "RS":
            nameCountryOne.innerText = "Serbia";
        break;
        case "JP":
            nameCountryOne.innerText = "Japan";
        break;
        case "EG":
            nameCountryOne.innerText = "Egypt";
        break;
        case "SK":
            nameCountryOne.innerText = "Slovakia";
        break;
        case "SN":
            nameCountryOne.innerText = "Senegal";
        break;
        case "DK":
            nameCountryOne.innerText = "Denmark";
        break;
        case "FI":
            nameCountryOne.innerText = "Finland";
        break;
        case "CM":
            nameCountryOne.innerText = "Cameroon";
        break;
        case "IR":
            nameCountryOne.innerText = "Iran";
        break;
        case "AR":
            nameCountryOne.innerText = "Argentina";
        break;
        case "CA":
            nameCountryOne.innerText = "Canada";
        break;
        case "SG":
            nameCountryOne.innerText = "Singapore";
        break;
        case "PK":
            nameCountryOne.innerText = "Pakistan";
        break;
        case "GH":
            nameCountryOne.innerText = "Ghana";
        break;
        case "LB":
            nameCountryOne.innerText = "Lebanon";
        break;
        case "IE":
            nameCountryOne.innerText = "Ireland";
        break;
        case "AO":
            nameCountryOne.innerText = "Angola";
        break;
        case "NO":
            nameCountryOne.innerText = "Norway";
        break;
        case "BY":
            nameCountryOne.innerText = "Belarus";
        break;
        case "BR":
            nameCountryOne.innerText = "Brazil";
        break;
        case "MX":
            nameCountryOne.innerText = "Mexico";
        break;
        case "CO":
            nameCountryOne.innerText = "Colombia";
        break;
        case "KE":
            nameCountryOne.innerText = "Kenya";
        break;
        case "CL":
            nameCountryOne.innerText = "Chile";
        break;
        case "KW":
            nameCountryOne.innerText = "Kuwait";
        break;
        case "AL":
            nameCountryOne.innerText = "Albania";
        break;
        case "VE":
            nameCountryOne.innerText = "Venezuela";
        break;
        case "RE":
            nameCountryOne.innerText = "Reunion";
        break;
        case "BA":
            nameCountryOne.innerText = "Bosnia and Herzegovina";
        break;
        case "IL":
            nameCountryOne.innerText = "Israel";
        break;
        case "TW":
            nameCountryOne.innerText = "Taiwan";
        break;
        case "SI":
            nameCountryOne.innerText = "Slovenia";
        break;
        case "KZ":
            nameCountryOne.innerText = "Kazakhstan";
        break;
        case "PE":
            nameCountryOne.innerText = "Peru";
        break;
        case "AZ":
            nameCountryOne.innerText = "Azerbaijan";
        break;
        case "AE":
            nameCountryOne.innerText = "United Arab Emirates";
        break;
        case "CY":
            nameCountryOne.innerText = "Cyprus";
        break;
        case "LT":
            nameCountryOne.innerText = "Lithuania";
        break;
        case "DO":
            nameCountryOne.innerText = "Dominican Republic";
        break;
        case "JO":
            nameCountryOne.innerText = "Jordan";
        break;
        case "MD":
            nameCountryOne.innerText = "Moldova";
        break;
        case "BJ":
            nameCountryOne.innerText = "Benin";
        break;
        case "BG":
            nameCountryOne.innerText = "Bulgaria";
        break;
        case "CD":
            nameCountryOne.innerText = "Democratic Republic of the Congo";
        break;
        case "HR":
            nameCountryOne.innerText = "Croatia";
        break;
        case "LV":
            nameCountryOne.innerText = "Latvia";
        break;
        case "HK":
            nameCountryOne.innerText = "Hong Kong";
        break;
        case "MZ":
            nameCountryOne.innerText = "Mozambique";
        break;
        case "AU":
            nameCountryOne.innerText = "Australia";
        break;
        case "LU":
            nameCountryOne.innerText = "Luxembourg";
        break;
        case "UG":
            nameCountryOne.innerText = "Uganda";
        break;
        case "ML":
            nameCountryOne.innerText = "Mali";
        break;
        case "BF":
            nameCountryOne.innerText = "Burkina Faso";
        break;
        case "MU":
            nameCountryOne.innerText = "Mauritius";
        break;
        case "OM":
            nameCountryOne.innerText = "Oman";
        break;
        case "TG":
            nameCountryOne.innerText = "Togo";
        break;
        case "QA":
            nameCountryOne.innerText = "Qatar";
        break;
        case "MK":
            nameCountryOne.innerText = "Macedonia";
        break;
        case "MG":
            nameCountryOne.innerText = "Madagascar";
        break;
        case "VN":
            nameCountryOne.innerText = "Vietnam";
        break;
        case "GA":
            nameCountryOne.innerText = "Gabon";
        break;
        case "EE":
            nameCountryOne.innerText = "Estonia";
        break;
        case "IQ":
            nameCountryOne.innerText = "Iraq";
        break;
        case "MT":
            nameCountryOne.innerText = "Malta";
        break;
        case "BH":
            nameCountryOne.innerText = "Bahrain";
        break;
        case "TZ":
            nameCountryOne.innerText = "Tanzania";
        break;
        case "EC":
            nameCountryOne.innerText = "Ecuador";
        break;
        case "GE":
            nameCountryOne.innerText = "Georgia";
        break;
        case "AM":
            nameCountryOne.innerText = "Armenia";
        break;
        case "SD":
            nameCountryOne.innerText = "Sudan";
        break;
        case "ET":
            nameCountryOne.innerText = "Ethiopia";
        break;
        case "MM":
            nameCountryOne.innerText = "Myanmar";
        break;
        case "ME":
            nameCountryOne.innerText = "Montenegro";
        break;
        case "SY":
            nameCountryOne.innerText = "Syria";
        break;
        case "UZ":
            nameCountryOne.innerText = "Uzbekistan";
        break;
        case "ZW":
            nameCountryOne.innerText = "Zimbabwe";
        break;
        case "DJ":
            nameCountryOne.innerText = "Djibouti";
        break;
        case "LK":
            nameCountryOne.innerText = "Sri Lanka";
        break;
        case "BD":
            nameCountryOne.innerText = "Bangladesh";
        break;
        case "SH":
            nameCountryOne.innerText = "Saint Helena";
        break;
        case "BW":
            nameCountryOne.innerText = "Botswana";
        break;
        case "CV":
            nameCountryOne.innerText = "Cape Verde";
        break;
        case "BO":
            nameCountryOne.innerText = "Bolivia";
        break;
        case "YE":
            nameCountryOne.innerText = "Yemen";
        break;
        case "RW":
            nameCountryOne.innerText = "Rwanda";
        break;
        case "IS":
            nameCountryOne.innerText = "Iceland";
        break;
        case "LY":
            nameCountryOne.innerText = "Libya";
        break;
        case "NE":
            nameCountryOne.innerText = "Niger";
        break;
        case "AD":
            nameCountryOne.innerText = "Andorra";
        break;
        case "GM":
            nameCountryOne.innerText = "Gambia";
        break;
        case "CG":
            nameCountryOne.innerText = "Republic of the Congo";
        break;
        case "ZM":
            nameCountryOne.innerText = "Zambia";
        break;
        case "AF":
            nameCountryOne.innerText = "Afghanistan";
        break;
        case "NA":
            nameCountryOne.innerText = "Namibia";
        break;
        case "MR":
            nameCountryOne.innerText = "Mauritania";
        break;
        case "UY":
            nameCountryOne.innerText = "Uruguay";
        break;
        case "CR":
            nameCountryOne.innerText = "Costa Rica";
        break;
        case "KG":
            nameCountryOne.innerText = "Kyrgyzstan";
        break;
        case "PA":
            nameCountryOne.innerText = "Panama";
        break;
        case "NP":
            nameCountryOne.innerText = "Nepal";
        break;
        case "GN":
            nameCountryOne.innerText = "Guinea";
        break;
        case "GP":
            nameCountryOne.innerText = "Guadeloupe";
        break;
        case "GQ":
            nameCountryOne.innerText = "Equatorial Guinea";
        break;
        case "MQ":
            nameCountryOne.innerText = "Martinique";
        break;
        case "SC":
            nameCountryOne.innerText = "Seychelles";
        break;
        case "CU":
            nameCountryOne.innerText = "Cuba";
        break;
        case "NZ":
            nameCountryOne.innerText = "New Zealand";
        break;
        case "GT":
            nameCountryOne.innerText = "Guatemala";
        break;
        case "MC":
            nameCountryOne.innerText = "Monaco";
        break;
        case "MV":
            nameCountryOne.innerText = "Maldives";
        break;
        case "MW":
            nameCountryOne.innerText = "Malawi";
        break;
        case "SV":
            nameCountryOne.innerText = "El Salvador";
        break;
        case "GF":
            nameCountryOne.innerText = "French Guiana";
        break;
        case "SL":
            nameCountryOne.innerText = "Sierra Leone";
        break;
        case "LR":
            nameCountryOne.innerText = "Liberia";
        break;
        case "NI":
            nameCountryOne.innerText = "Nicaragua";
        break;
        case "KH":
            nameCountryOne.innerText = "Cambodia";
        break;
        case "TJ":
            nameCountryOne.innerText = "Tajikistan";
        break;
        case "PR":
            nameCountryOne.innerText = "Puerto Rico";
        break;
        case "BI":
            nameCountryOne.innerText = "Burundi";
        break;
        case "PY":
            nameCountryOne.innerText = "Paraguay";
        break;
        case "KM":
            nameCountryOne.innerText = "Comoros";
        break;
        case "LS":
            nameCountryOne.innerText = "Lesotho";
        break;
        case "SO":
            nameCountryOne.innerText = "Somalia";
        break;
        case "HN":
            nameCountryOne.innerText = "Honduras";
        break;
        case "TD":
            nameCountryOne.innerText = "Chad";
        break;
        case "GI":
            nameCountryOne.innerText = "Gibraltar";
        break;
        case "BN":
            nameCountryOne.innerText = "Brunei";
        break;
        case "SM":
            nameCountryOne.innerText = "San Marino";
        break;
        case "JE":
            nameCountryOne.innerText = "Jersey";
        break;
        case "SZ":
            nameCountryOne.innerText = "Swaziland";
        break;
        case "TM":
            nameCountryOne.innerText = "Turkmenistan";
        break;
        case "NC":
            nameCountryOne.innerText = "New Caledonia";
        break;
        case "MN":
            nameCountryOne.innerText = "Mongolia";
        break;
        case "LI":
            nameCountryOne.innerText = "Liechtenstein";
        break;
        case "GL":
            nameCountryOne.innerText = "Greenland";
        break;
        case "BT":
            nameCountryOne.innerText = "Bhutan";
        break;
        case "PF":
            nameCountryOne.innerText = "French Polynesia";
        break;
        case "ST":
            nameCountryOne.innerText = "Sao Tome and Principe";
        break;
        case "YT":
            nameCountryOne.innerText = "Mayotte";
        break;
        case "FO":
            nameCountryOne.innerText = "Faroe Islands";
        break;
        case "JM":
            nameCountryOne.innerText = "Jamaica";
        break;
        case "HT":
            nameCountryOne.innerText = "Haiti";
        break;
        case "BS":
            nameCountryOne.innerText = "Bahamas";
        break;
        case "GW":
            nameCountryOne.innerText = "Guinea-Bissau";
        break;
        case "FJ":
            nameCountryOne.innerText = "Fiji";
        break;
        case "GG":
            nameCountryOne.innerText = "Guernsey";
        break;
        case "LA":
            nameCountryOne.innerText = "Laos";
        break;
        case "TL":
            nameCountryOne.innerText = "East Timor";
        break;
        case "TT":
            nameCountryOne.innerText = "Trinidad and Tobago";
        break;
        case "AG":
            nameCountryOne.innerText = "Antigua and Barbuda";
        break;
        case "EH":
            nameCountryOne.innerText = "Western Sahara";
        break;
        case "CF":
            nameCountryOne.innerText = "Central African Republic";
        break;
        case "PW":
            nameCountryOne.innerText = "Palau";
        break;
        case "IM":
            nameCountryOne.innerText = "Isle of Man";
        break;
        case "AW":
            nameCountryOne.innerText = "Aruba";
        break;
        case "BZ":
            nameCountryOne.innerText = "Belize";
        break;
        case "AS":
            nameCountryOne.innerText = "American Samoa";
        break;
        case "AI":
            nameCountryOne.innerText = "Anguilla";
        break;
        case "MP":
            nameCountryOne.innerText = "Northern Mariana Islands";
        break;
        case "BM":
            nameCountryOne.innerText = "Bermuda";
        break;
        case "ER":
            nameCountryOne.innerText = "Eritrea";
        break;
        case "SR":
            nameCountryOne.innerText = "Suriname";
        break;
        case "VG":
            nameCountryOne.innerText = "British Virgin Islands";
        break;
        case "VI":
            nameCountryOne.innerText = "U.S. Virgin Islands";
        break;
        case "GY":
            nameCountryOne.innerText = "Guyana";
        break;
        case "BB":
            nameCountryOne.innerText = "Barbados";
        break;
        case "MH":
            nameCountryOne.innerText = "Marshall Islands";
        break;
        case "MO":
            nameCountryOne.innerText = "Macao";
        break;
        case "PG":
            nameCountryOne.innerText = "Papua New Guinea";
        break;
        case "KY":
            nameCountryOne.innerText = "Cayman Islands";
        break;
        case "KI":
            nameCountryOne.innerText = "Kiribati";
        break;
        case "AN":
            nameCountryOne.innerText = "Netherlands Antilles";
        break;
        case "CK":
            nameCountryOne.innerText = "Cook Islands";
        break;
        case "GU":
            nameCountryOne.innerText = "Guam";
        break;
        case "WF":
            nameCountryOne.innerText = "Wallis and Futuna";
        break;
        case "PS":
            nameCountryOne.innerText = "Palestine";
        break;
        case "TC":
            nameCountryOne.innerText = "Turks and Caicos Islands";
        break;
        case "VU":
            nameCountryOne.innerText = "Vanuatu";
        break;
        case "LC":
            nameCountryOne.innerText = "Saint Lucia";
        break;
        case "TO":
            nameCountryOne.innerText = "Tonga";
        break;
        case "CC":
            nameCountryOne.innerText = "Cocos Islands";
        break;
        case "WS":
            nameCountryOne.innerText = "Samoa";
        break;
        case "GD":
            nameCountryOne.innerText = "Grenada";
        break;
        case "VA":
            nameCountryOne.innerText = "Vatican";
        break;
        case "IO":
            nameCountryOne.innerText = "British Indian Ocean Territory";
        break;
        case "FM":
            nameCountryOne.innerText = "Micronesia";
        break;
        case "NU":
            nameCountryOne.innerText = "Niue";
        break;
        case "BL":
            nameCountryOne.innerText = "Saint Barthelemy";
        break;
        case "KN":
            nameCountryOne.innerText = "Saint Kitts and Nevis";
        break;
        case "PM":
            nameCountryOne.innerText = "Saint Pierre and Miquelon";
        break;
        case "FK":
            nameCountryOne.innerText = "Falkland Islands";
        break;
        case "AQ":
            nameCountryOne.innerText = "Antarctica";
        break;
        case "PN":
            nameCountryOne.innerText = "Pitcairn";
        break;
        case "MF":
            nameCountryOne.innerText = "Saint Martin";
        break;
        case "TV":
            nameCountryOne.innerText = "Tuvalu";
        break;
        case "VC":
            nameCountryOne.innerText = "Saint Vincent and the Grenadines";
        break;
        case "DM":
            nameCountryOne.innerText = "Dominica";
        break;
        case "SB":
            nameCountryOne.innerText = "Solomon Islands";
        break;
        case "TK":
            nameCountryOne.innerText = "Tokelau";
        break;
        case "NF":
            nameCountryOne.innerText = "Norfolk Island";
        break;
        case "CX":
            nameCountryOne.innerText = "Christmas Island";
        break;
        case "NR":
            nameCountryOne.innerText = "Nauru";
        break;
        case "SJ":
            nameCountryOne.innerText = "Svalbard and Jan Mayen";
        break;
        case "MS":
            nameCountryOne.innerText = "Montserrat";
        break;
        case "KP":
            nameCountryOne.innerText = "North Korea";
        break;
        case "GS":
            nameCountryOne.innerText = "South Georgia and Sandwich Isl.";
        break;
        case "BV":
            nameCountryOne.innerText = "Bouvet Island";
        break;
        default:
            nameCountryOne.innerText = "Unknown";
    }
}

// Display Gender Data
function displayNameGenderData(genderInfo) {
    console.log(genderInfo.gender);
     let nameGender = document.createElement("li");

     nameGender.innerText = genderInfo.gender;

     nameGender.classList.add("name-gender");

     genderListElement.innerHTML = '';

     genderListElement.appendChild(nameGender);
}

//Display Age Data
function displayNameAgeData(ageInfo) {

    let nameAge = document.createElement("li");

    nameAge.innerText = ageInfo.age;

    nameAge.classList.add("name-age");

    ageListElement.innerHTML = '';

    ageListElement.appendChild(nameAge);
}

//CALLING FETCH FUNCTIONS 

//Making user input change value of variable:
inputElement.addEventListener("keyup", (event) => {
     name = event.target.value;
    
     
 })
 //Calling functions only once button is pressed:
 buttonElement.addEventListener("click", () => {
    fetchNameCountry(name);
    fetchNameGender(name);
    fetchNameAge(name);
 });