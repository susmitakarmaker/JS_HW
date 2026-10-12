let today = new Date();

let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

if (dd < 10) {
    dd = "0" + dd;
}

if (mm < 10) {
    mm = "0" + mm;
}

document.getElementById("date").innerHTML =
    "mm-dd-yyyy : " + mm + "-" + dd + "-" + yyyy +
    "<br>mm/dd/yyyy : " + mm + "/" + dd + "/" + yyyy +
    "<br>dd-mm-yyyy : " + dd + "-" + mm + "-" + yyyy +
    "<br>dd/mm/yyyy : " + dd + "/" + mm + "/" + yyyy;