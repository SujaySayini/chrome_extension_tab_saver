async function fetchData() {
    const res = await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    const record = await res.json();
    console.log(record);
    document.getElementById("date").innerHTML=record.data[0].date;
    document.getElementById("areaName").innerHTML=record.data[0].areaName;
    document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}
document.getElementById("myButton").addEventListener("click", getAllTabs);

async function getAllWindows() {
  let windows = await chrome.windows.getAll();
  console.log(windows);
  for (let i = 0; i < windows.length; i++) {
    let id = windows[i].id;
    console.log(getAllTabs(id));
  }
  
}

async function getAllTabs(id) {
  let queryOptions = { windowId: id};
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let tabs = await chrome.tabs.query(queryOptions);
  console.log(tabs);
  document.getElementById("tabs").innerHTML=tabs.length;
  // alert('Saved!');
  return tabs.length;
}