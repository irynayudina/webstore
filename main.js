
//////////////////////////////////////////////////////////////////       THEME CHANGE
function pageThemeDark() {
    let header = document.getElementsByTagName('header');
    header[0].style.backgroundColor = "var(--brown)";
    let profileIcon = document.getElementById('profile');
    profileIcon.style.backgroundColor = "var(--gold)";
    let basketIcon = document.getElementById('basket');
    basketIcon.style.backgroundColor = "var(--gold)";
}
function pageThemeLight() {
    let header = document.getElementsByTagName('header');
    header[0].style.backgroundColor = "#fff";
    let profileIcon = document.getElementById('profile');
    profileIcon.style.backgroundColor = "#fff";
    let basketIcon = document.getElementById('basket');
    basketIcon.style.backgroundColor = "#fff";
}
//////////////////////////////////////////////////////////////////// WINDOWS MANAGING
var windows = {};
function openWindow(url, name, features) {
    if( windows[name]){
        delWindControl(name);
    }
    windows[name] = window.open(url, name, features);
    addWindControl(url, name, features);
    return false;
}
function closeWindow(name) {
    let window = windows[name];
    if(window) {
        window.close();
        delWindControl(name);
        delete windows[name];
    }
}
function addWindControl (url, name, features){
    let w = document.createElement("div");
    w.className = "wind";
    w.id = name;
    let n = document.createElement("div");
    n.className = "name";
    n.onclick =  function() {openWindow(url, name, features)};
    n.appendChild(document.createTextNode(name));
    w.appendChild(n);
    let c = document.createElement("div");
    c.className = "close";
    c.onclick =  function() {closeWindow(name)};
    c.appendChild(document.createTextNode("X"));
    w.appendChild(c);
    document.getElementById("openedWindows").appendChild(w);
}
function delWindControl(name) {
    let w = document.getElementById(name);
    w.remove();
}
function delAllWind(){
    for (var key in windows) 
    {
        closeWindow(key);
    }
}
window.onunload = function() {delAllWind()};
////////////////////////////////////////////////////////////////////////////////////  SITE APPEARANCE CHANGE
function changeFont(f) {
    document.getElementsByTagName("body")[0].style.fontFamily = f;  
    document.getElementsByTagName("header")[0].style.fontFamily = f;  
}
function changeColor(c) {
    document.getElementsByTagName("body")[0].style.color = c; 
}
function changeSize(s) {
    if(s == "small"){
        document.getElementsByTagName("body")[0].style.fontSize = "10px";
        let h1 = document.getElementsByTagName("h1");
        for (i = 0; i < h1.length; i++) {
            h1[i].style.fontSize = "17px";
        }
        let h2 = document.getElementsByTagName("h2");
        for (i = 0; i < h2.length; i++) {
            h2[i].style.fontSize = "15px";
        }
        let h3 = document.getElementsByTagName("h3");
        for (i = 0; i < h3.length; i++) {
            h3[i].style.fontSize = "13px";
        }
        let p = document.getElementsByTagName("p");
        for (i = 0; i < p.length; i++) {
            p[i].style.fontSize = "10px";
        }
    }
    if(s == "middle"){
        document.getElementsByTagName("body")[0].style.fontSize = "1em";
        let h1 = document.getElementsByTagName("h1");
        for (i = 0; i < h1.length; i++) {
            h1[i].style.fontSize = "2em";
        }
        let h2 = document.getElementsByTagName("h2");
        for (i = 0; i < h2.length; i++) {
            h2[i].style.fontSize = "1.5em";
        }
        let h3 = document.getElementsByTagName("h3");
        for (i = 0; i < h3.length; i++) {
            h3[i].style.fontSize = "1.2em";
        }
        let p = document.getElementsByTagName("p");
        for (i = 0; i < p.length; i++) {
            p[i].style.fontSize = "1em";
        }
    }
    if(s == "large"){
        document.getElementsByTagName("body")[0].style.fontSize = "1.5";
        let h1 = document.getElementsByTagName("h1");
        for (i = 0; i < h1.length; i++) {
            h1[i].style.fontSize = "3em";
        }
        let h2 = document.getElementsByTagName("h2");
        for (i = 0; i < h2.length; i++) {
            h2[i].style.fontSize = "2em";
        }
        let h3 = document.getElementsByTagName("h3");
        for (i = 0; i < h3.length; i++) {
            h3[i].style.fontSize = "1.7em";
        }
        let p = document.getElementsByTagName("p");
        for (i = 0; i < p.length; i++) {
            p[i].style.fontSize = "1.5em";
        }
    }
}
function changeBacground(c){
    document.getElementsByTagName("header")[0].style.backgroundColor = c; 
    if( c == "#000" || c == "#2b0d05"){
        document.getElementById("profile").style.backgroundColor = "#ff9100";        
        document.getElementById("basket").style.backgroundColor = "#ff9100";
    }
    else{        
        document.getElementById("profile").style.backgroundColor = "#fff";
        document.getElementById("basket").style.backgroundColor = "#fff";
    }
}
function changeMainBackground(c) {
    document.getElementsByTagName("body")[0].style.background = c;
}
function saveStyle() {
    alert("Styles are saved!");
    let fontFam = document.getElementById("font");
    localStorage.setItem('fontFam', fontFam.value);
    let fontColor = document.getElementById("mainCol");
    localStorage.setItem('fontColor', fontColor.value);

    let fontSize = document.getElementById("fontsize");
    localStorage.setItem('fontSize', fontSize.value);
    let headerBackC = document.getElementById("headerback");
    localStorage.setItem('headerBackC', headerBackC.value);
    let backC = document.getElementById("mainBr");
    localStorage.setItem('backC', backC.value);
}
function loadPage() {
    let ff = localStorage.getItem('fontFam');
    let fc = localStorage.getItem("fontColor");
    let fs = localStorage.getItem("fontSize");
    let hb = localStorage.getItem("headerBackC");
    let b = localStorage.getItem("backC");
    changeFont(ff);
    changeColor(fc);
    changeSize(fs);
    changeBacground(hb);
    changeMainBackground(b);
}
function toDefault() {
    changeFont("Prosto One");
    changeColor("var(--avocado)");
    changeSize("middle");
    changeBacground("#fff");
    changeMainBackground("linear-gradient(90deg, rgba(67,251,134,1) 0%, rgba(68,69,251,1) 46%, rgba(252,70,101,1) 100%)");
    localStorage.setItem('fontFam', "Prosto One");
    localStorage.setItem('fontColor', "var(--avocado)");
    localStorage.setItem('fontSize', "middle");
    localStorage.setItem('headerBackC', "#fff");
    localStorage.setItem('backC',"linear-gradient(90deg, rgba(67,251,134,1) 0%, rgba(68,69,251,1) 46%, rgba(252,70,101,1) 100%)");
}
////////////////////////////////////////////////////////////////////////////////////////////      FORM VALIDATION /////////////////////////////////////////
function mainPf()  {
    let myInput = document.getElementById("password");
    let letter = document.getElementById("letter");
    let capital = document.getElementById("capital");
    let number = document.getElementById("number");
    let length = document.getElementById("length");
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }  
  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  // Validate numbers
  let numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
function match() {
    let myInput = document.getElementById("password");
    let repeated = document.getElementById("pass2");
    if(myInput.value != repeated.value){
        document.getElementById("p2l").style.display = "block";
        document.getElementById("registerB").disabled = "disabled";
    }
    else {
        document.getElementById("p2l").style.display = "none";
        document.getElementById("registerB").disabled = false;
    }
}
function saveUser() {
    let userLast = document.getElementById("lastname");
    localStorage.setItem('userLast', userLast.value);
    let userName = document.getElementById("name");
    localStorage.setItem('userName', userName.value);
    let userMiddle = document.getElementById("middlename");
    localStorage.setItem('userMiddle',  userMiddle.value);
    let email = document.getElementById("email");
    localStorage.setItem('email',  email.value); 
    let phone = document.getElementById("phone");
    localStorage.setItem('phone',  phone.value);
    let password = document.getElementById("password");
    localStorage.setItem('password',  password.value);
}
function validateLogin() {  
    let userEmail = localStorage.getItem('email');
    let userPass =  localStorage.getItem('password');
    let loginEmail = document.getElementById("emailL").value;
    let loginPass =  document.getElementById("passwordL").value;
    if(userPass ==  loginPass && userEmail ==  loginEmail){ 
        sessionStorage.removeItem('logEmail');
        
        window.open("profile.html");
        window.close();
    }else{
       sessionStorage.setItem('logEmail', loginEmail);
        alert("incorrect");
    }
}
function loadForLogin(){
    loadPage();
    document.getElementById("emailL").value = sessionStorage.getItem('logEmail');
}
function userExit(url) {
    localStorage.removeItem('userLast');
    localStorage.removeItem('userName');
    localStorage.removeItem('userMiddle');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    localStorage.removeItem('password');
    window.open(url, '_self');
}
function loadUser() {    
    let u =localStorage.getItem('userLast');
    alert(u);
    let n = localStorage.getItem('userName');
    alert(n);
    let m = localStorage.getItem('userMiddle');
    alert(m);
    let e = localStorage.getItem('email');
    alert(e);
    let p = localStorage.getItem('phone');
    alert(p);
    let ps = localStorage.getItem('password');
    alert(ps);
}
function loadForProfile() {
    loadPage();
    let l = localStorage.getItem('userLast');
    let n = localStorage.getItem('userName');
    let m = localStorage.getItem('userMiddle');
    let e = localStorage.getItem('email');
    let p = localStorage.getItem('phone');
    let pn = document.getElementById("profName");
    if(l!= null && n!=null && m !=null){
        pn.innerHTML=l+' '+n+' '+m;
    }
    let pe = document.getElementById("profEmail");
    if(e!=null){
        pe.innerHTML =e;
    }
    let pp = document.getElementById("profPhone");
    if(p!=null){
        pp.innerHTML=p;
    }
}
// ///////////////////////////////////////////////////////////////////////////                transfers localStorage from one tab to another
// var localStorage_transfer = function(event) {
//     if(!event) { event = window.event; } // ie suq
//     if(!event.newValue) return;          // do nothing if no value to work with
//     if (event.key == 'getlocalStorage') {
//       // another tab asked for the localStorage -> send it
//       localStorage.setItem('localStorage', JSON.stringify(localStorage));
//       // the other tab should now have it, so we're done with it.
//       localStorage.removeItem('localStorage'); // <- could do short timeout as well.
//     } else if (event.key == 'localStorage' && !localStorage.length) {
//       // another tab sent data <- get it
//       var data = JSON.parse(event.newValue);
//       for (var key in data) {
//         localStorage.setItem(key, data[key]);
//       }
//     }
//   };
  
//   // listen for changes to localStorage
//   if(window.addEventListener) {
//     window.addEventListener("storage", localStorage_transfer, false);
//   } else {
//     window.attachEvent("onstorage", localStorage_transfer);
//   };
  
  
//   // Ask other tabs for local storage (this is ONLY to trigger event)
//   if (!localStorage.length) {
//     localStorage.setItem('getlocalStorage', 'foobar');
//     localStorage.removeItem('getlocalStorage', 'foobar');
//   };