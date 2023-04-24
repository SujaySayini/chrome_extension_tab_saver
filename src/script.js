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
    currTabs.forEach(tab => {
      myTabs.push(tab.url);
    });
    //count = count + currTabs.length;
  }
  //document.getElementById("tabs").innerHTML=count;
  document.getElementById("myTabs").innerHTML=myTabs.length;
}

async function getAllTabs(id) {
  let queryOptions = { windowId: id };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs;
}
getAllWindows();

document.getElementById("myButton").addEventListener("click", save_tabs_to_txt);
function save_tabs_to_txt(){
  if(confirm('Are you sure you want rewrite your Chrome Tabs?')){
    localStorage.setItem('myTabs', myTabs);
  }
}

document.getElementById("openButton").addEventListener("click", open_tabs);
async function open_tabs(){
  await chrome.windows.create({url:myTabs});
}

async function open_one_tab(index){
  await chrome.windows.create({url:myTabs[index]});
}

function get_tabs(){
  let tabs = localStorage.getItem('myTabs');
  total_tabs = tabs.split(',');
  document.getElementById("inStorage").innerHTML=total_tabs.length;
  return total_tabs.length;
}
get_tabs();