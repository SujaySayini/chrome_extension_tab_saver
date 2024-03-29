// async function fetchData() {
//     const res = await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//     const record = await res.json();
//     console.log(record);
//     document.getElementById("date").innerHTML=record.data[0].date;
//     document.getElementById("areaName").innerHTML=record.data[0].areaName;
//     document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//     document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
// }

let myTabs = [];

async function getAllWindows() {
  let windows = await chrome.windows.getAll();
  //let count = 0;
  for (let i = 0; i < windows.length; i++) {
    let id = windows[i].id;
    let currTabs = await getAllTabs(id);
    currTabs.forEach((tab) => {
      myTabs.push(tab.url);
    });
    //count = count + currTabs.length;
  }
  //document.getElementById("tabs").innerHTML=count;
  document.getElementById("myTabs").innerHTML = myTabs.length;
}

async function getAllTabs(id) {
  let queryOptions = { windowId: id };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs;
}
getAllWindows();

document
  .getElementById("myButton")
  .addEventListener("click", save_tabs_to_storage);
function save_tabs_to_storage() {
  if (confirm("Are you sure you want rewrite your Chrome Tabs?")) {
    localStorage.setItem("myTabs", myTabs);
  }
}

document.getElementById("openButton").addEventListener("click", open_tabs);
async function open_tabs() {
  await chrome.windows.create({ url: myTabs });
}

async function open_one_tab(url) {
  // let tabs = localStorage.getItem("myTabs");
  // total_tabs = tabs.split(",");
  await chrome.windows.create({ url: url });
}

function get_tabs_from_storage() {
  let tabs = localStorage.getItem("myTabs");
  total_tabs = tabs.split(",");
  document.getElementById("inStorage").innerHTML = total_tabs.length;

  const myList = document.getElementById("myList");
  myList[0] = new Option("Open a Saved Tab:", 0, true, true);

  total_tabs.forEach((element, key) => {
    let sections = element.split("/");
    if (sections[2] === "") {
      section[2] = section[0];
    }
    let tab_option = new Option(key + 1 + ". " + sections[2], element);
    //tab_option.setAttribute("style", "float: right; display: block");
    myList[key + 1] = tab_option;
  });
}
get_tabs_from_storage();

//document.getElementById("myList").addEventListener("change", changeFunc());

// function changeFunc() {
//   alert("hELLO");
//   var selectBox = document.getElementById("myList");
//   alert(selectBox.selectedIndex);
//   var selectedValue = selectBox.options[selectBox.selectedIndex].value;
//   if (selectedValue != 0) {
//     alert(selectedValue);
//   }
// }

document.getElementById("myList").addEventListener("change", (event) => {
  //alert(event.target.selectedIndex);
  var selectBox = document.getElementById("myList");
  //alert(selectBox.selectedIndex);
  var url = selectBox.options[selectBox.selectedIndex].value;

  if (confirm("Are you sure you want to '" + url + "'.")) {
    open_one_tab(url);
  }
});
