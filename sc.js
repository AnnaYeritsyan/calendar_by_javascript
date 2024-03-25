let th = document.getElementsByClassName("thead")[0]
let td = document.getElementsByClassName("td")[0]
let table = document.getElementsByClassName("table")
let dayBtn = document.getElementsByClassName("day")[0]
let newth;
let newtd;
let nav = 0;
let heading = document.getElementsByClassName("heading")
let contentCalendar = document.getElementsByClassName("contentCalendar")[0]
let wek = document.getElementsByClassName("wek")[0]
let trbody = document.getElementsByClassName("trbody")
let title = document.getElementsByClassName("title")
let flx = document.getElementsByClassName("flx")
let dh = document.getElementsByClassName("dh")
let daytitle = document.getElementsByClassName("daytitle")
let rightDays = document.getElementsByClassName("right")[0]
let leftDays = document.getElementsByClassName("left")[0]
let daysName = document.getElementsByClassName("daysName")
let dayOne = document.getElementsByClassName("dayOnetext")
let weektd = document.getElementsByClassName("weektd")
let onedaycol = document.getElementsByClassName("nctd")
let tc
let name;
let dd = document.getElementsByClassName("dh")  

  let dateTimeFunction = ()=>{
for (let i = 0; i < dd.length; i++) {
    // console.log(dd[i].textContent);
    let dname = dd[i].textContent
    let splitName = dname.slice(0, 3)
    let splitm = dname.slice(5, 8)
    let ddnum = dname.slice(10, 12)

    switch (splitm) {
        case "Jan":
            splitm = "Հնվ"
            break;
        case "Feb":
            splitm = "Փտր"
            break;
        case "Mar":
            splitm = "Մրտ"
            break;
        case "Apr":
            splitm = "Ապր"
            break;
        case "May":
            splitm = "Մայ"
            break;
        case "Jun":
            splitm = "Հնս"
            break;
        case "Jul":
            splitm = "Հլս"
            break;
        case "Aug":
            splitm = "Օգս"
            break;
        case "Sep":
            splitm = "Սեպ"
            break;
        case "Oct":
            splitm = "Հոկ"
            break;
        case "Nov":
            splitm = "Նոյ"
            break;
        case "Dec":
            splitm = "Դեկ"
            break;
    }

    switch (splitName) {

        case "Mon":
            splitName = "Երկ"
            dd[i].textContent = splitName + "/" + splitm + "/" + ddnum
            break;
        case "Tue":
            splitName = "Երե"
            dd[i].textContent = splitName + "/" + splitm + "/" + ddnum
            break;
        case "Wed":
            splitName = "Չոր"
            dd[i].textContent = splitName + "/" + splitm + "/" + ddnum
            break;
        case "Thu":
            splitName = "Հնգ"
            dd[i].textContent = splitName + "/" + splitm + "/" + ddnum

            break;
        case "Fri":
            splitName = "Ուրբ"
            dd[i].textContent = splitName + "/" + splitm + "/" + ddnum

            break;
        case "Sat":
            splitName = "Շբթ"
            dd[i].textContent = splitName + "/" + splitm + "/" + ddnum

            break;
        case "Sun":
            splitName = "Կրկ"
            dd[i].textContent = splitName + "/" + splitm + "/" + ddnum

            break;

    }

}

}
let time = new Date()
time.setHours(0, 0, 0, 0)

let yearfunction = ()=>{


let tame1 =  time.toString()
console.log(tame1);
console.log(tame1.slice(11,15))
let year = document.getElementsByClassName("year")

year[0].textContent = tame1.slice(11,15)
}
yearfunction()
function getMonday(d) {
    console.log();
    let day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}
getMonday(time)






let dncreate = document.createElement("div")
dncreate.classList = "daysName"
flx[0].appendChild(dncreate)
for (let i = 0; i < 7; i++) {

    let divhid = document.createElement("div")
    divhid.classList = "dh"
    let dh = document.getElementsByClassName("dh")
    // time.setHours(time.getMinutes())
    divhid.innerHTML = time
    tc = divhid.textContent
    let dateParts = tc.split(" ");
    let extractedDate = dateParts.slice(0, 3).join(" /");
    divhid.innerHTML = extractedDate

    daysName[0].appendChild(divhid)
    // time.setHours(time.getMinutes() + 24)
    time.setDate(time.getDate() + 1);
    // console.log(time);
}


for (let g = 0; g < 97; g++) {

    newtrbody = document.createElement("tr")
    newtrbody.classList = "trbody"
    newtd = document.createElement("td")
    newtd.style.backgroundColor = "#EFFDDE"
    newtd.classList = "firsttd"
    time.setMinutes(time.getMinutes());
    newtd.innerHTML = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', })
    time.setMinutes(time.getMinutes() + 15);
    table[0].appendChild(newtrbody)
    newtrbody.appendChild(newtd)
    for (let i = 0; i < 7; i++) {

        newth = document.createElement("td");
        newth.classList = "weektd"
        newtrbody.appendChild(newth)
    }
    for (let k = 0; k < 1; k++) {
        let nt = document.createElement("td");
        nt.classList = "nctd"
        nt.style.display = "none"
        newtrbody.appendChild(nt)
    }
}

// add event
let firsttd = document.getElementsByClassName("trbody")
let person;
let c5;
let t5;
for (let w = 0; w < weektd.length; w++) {

    weektd[w].onclick = function () {

        person = prompt("Մուտքագրեք ձեզ հարմար ժամերը", "");
        console.log(person);
        var rowIndex = Array.prototype.indexOf.call(this.parentNode.children, this);
        console.log(rowIndex);
        console.log(weektd[w].parentNode.textContent)
        // console.log(dh[rowIndex-1].textContent) 
        t5 = weektd[w].parentNode.textContent
        c5 = dh[rowIndex - 1].textContent
        console.log(c5);
        let ev = weektd[w]
        ev.style.backgroundColor = "red"
        ev.style.width = "15%"
        ev.innerHTML = weektd[w].parentNode.textContent + " " + person
        // console.log(ev);
    }

}


// event add


let d15;

let newdateOneday = new Date()
console.log(newdateOneday);
let yearonedayfunction = ()=>{


    let tame1 =  newdateOneday.toString()
    console.log(tame1);
    console.log(tame1.slice(11,15))
    let year = document.getElementsByClassName("year")
    
    year[0].textContent = tame1.slice(11,15)
    }
    yearonedayfunction()
dayBtn.onclick = function () {
    yearonedayfunction()
    console.log("aa");
    console.log(c5, t5);

    dayOne[0].textContent = newdateOneday
    // divhid.innerHTML = time
    tc = dayOne[0].textContent
    let dateParts = tc.split(" ");
    let extractedDate = dateParts.slice(0, 3).join(" /");
    dayOne[0].innerHTML = extractedDate

    for (let z = 0; z < weektd.length; z++) {
        weektd[z].style.display = "none";
        // console.log(weektd[z]);
    }

    for (let t = 0; t < onedaycol.length; t++) {
        onedaycol[t].style.display = ""
        d15 = onedaycol[t].parentNode.textContent
        // console.log(t5);
        // console.log(d15);
        let sld = d15.slice(0, 5);
        console.log(dayOne[0].textContent);
        // console.log(onedaycol[t].parentNode.textContent);
        if (sld == t5 && c5 == dayOne[0].textContent) {
            // console.log(d15);
            console.log(onedaycol[t]);

            onedaycol[t].style.backgroundColor = "red"
            onedaycol[t].innerHTML = person
        }
    }
    daysName[0].style.display = "none"
    daytitle[0].style.display = "block"
    flx[0].style.display = "none"
    flx[1].style.display = ""
// /////////////////
dateTimeFunction();

// ///////////////
}

wek.onclick = function () {
    for (let z = 0; z < weektd.length; z++) {
        weektd[z].style.display = "";
        flx[0].style.display = ""
        flx[1].style.display = "none"
    }
    for (let t = 0; t < onedaycol.length; t++) {
        onedaycol[t].style.display = "none"
    }
    daysName[0].style.display = ""
    daytitle[0].style.display = "none"
    location.reload()
    dateTimeFunction();
}

//  left-y araj petqa tanel

let tm = new Date()
tm.setHours(0, 0, 0, 0)

function getMondaytm(d) {
    console.log();
    let day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is monday
    return new Date(d.setDate(diff));
}

getMondaytm(tm)

let tdy = new Date()
tdy.setHours(0, 0, 0, 0)
console.log(tdy);


function getMondaytm(d) {
    console.log();
    let day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is monay
    return new Date(d.setDate(diff));
}
getMondaytm(tdy)
// /////////////////
dateTimeFunction()

// ///////////////

tm.setDate(tm.getDate() + 7)
leftDays.onclick = function () {

    let yearTmfunction = ()=>{


        let tame1 =  tm.toString()
        console.log(tame1);
        let slyear = tame1.slice(11,15)
        console.log(slyear)
        let year = document.getElementsByClassName("year")
        
        year[0].textContent = slyear
        }
        yearTmfunction()
    yearonedayfunction()
    if (daytitle[0].style.display === "block") {
        newdateOneday.setDate(newdateOneday.getDate() + 1);
        dayOne[0].textContent = newdateOneday
        // divhid.innerHTML = time
        tc = dayOne[0].textContent
        let dateParts = tc.split(" ");
        let extractedDate = dateParts.slice(0, 3).join(" /");
        dayOne[0].innerHTML = extractedDate


    }
    else {
        for (let k = 0; k < 7; k++) {
            dh[k].innerHTML = tm
            let tc = dh[k].textContent
            let dateParts = tc.split(" ");
            let extractedDateA = dateParts.slice(0, 3).join(" /");
            dh[k].innerHTML = extractedDateA
            tm.setDate(tm.getDate() + 1)
        }
    }
    tdy.setDate(tdy.getDate() + 7)
    // /////////////////
dateTimeFunction()

// ///////////////
}


tdy.setDate(tdy.getDate() - 7)
rightDays.onclick = function () {
    let yearTdyfunction = ()=>{


        let tame1 =  tdy.toString()
        console.log(tame1);
        console.log(tame1.slice(11,15))
        let year = document.getElementsByClassName("year")
        
        year[0].textContent = tame1.slice(11,15)
        }
        yearTdyfunction()
    if (daytitle[0].style.display === "block") {
        newdateOneday.setDate(newdateOneday.getDate() - 1)
        dayOne[0].textContent = newdateOneday
        tc = dayOne[0].textContent
        let dateParts = tc.split(" ");
        let extractedDate = dateParts.slice(0, 3).join(" /");
        dayOne[0].innerHTML = extractedDate
    }
    else {
        for (let k = 0; k < 7; k++) {
            dh[k].innerHTML = tdy
            let tc = dh[k].textContent
            let dateParts = tc.split(" ");
            let extractedDateA = dateParts.slice(0, 3).join(" /");
            dh[k].innerHTML = extractedDateA
            tdy.setDate(tdy.getDate() - 1)
        }
    }
    tm.setDate(tm.getDate() - 7)
    // /////////////////
dateTimeFunction()
yearonedayfunction()
// ///////////////
}

contentCalendar.scrollTop = 790




dateTimeFunction()


