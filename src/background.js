// function getCurrentTab() {
//     console.log('hello')
//     chrome.tabs.query({
//         active: false
//     }, function(tabs) {
//         console.log(tabs)
//         // document.getElementById("tabs").innerHTML=tabs[0].url; 
//         var tabURL = tabs[0].url;
//         console.log(tabURL);
//     });
// }

// async function getCurrentTab2() {
//     let queryOptions = { active: false};
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tabs] = await chrome.tabs.query(queryOptions);
//     console.log(tabs);
//     // document.getElementById("tabs").innerHTML=tabs.url;
//     // alert('Saved!');
// }
// getCurrentTab2();
//---------------------------------
// async function getAllWindows() {
//     let tabs = await chrome.windows.getAll();
//     console.log(tabs);
//     return tabs;
//   }

//   async function getAllTabs() {
//     let windows = getAllWindows();
//     console.log(windows)
//     let x  = windows[0];
//     console.log('here')
//     console.log(x)
//     console.log(windows[0]);
//     let queryOptions = { windowId: x};
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let tabs = await chrome.tabs.query(queryOptions);
//     console.log(tabs);
//     //document.getElementById("tabs").innerHTML=tabs.length;
//     // alert('Saved!');
// }

// async function getAllWindows() {
//     let windows = await chrome.windows.getAll();
//     console.log(windows);
//     for (let i = 0; i < windows.length; i++) {
//       let id = windows[i].id;
//       console.log(getAllTabs(id));
//     }
    
//   }
//-------------------------------
//   async function getAllTabs(id) {
//     let queryOptions = { windowId: id};
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let tabs = await chrome.tabs.query(queryOptions);
//     console.log(tabs);
//     //document.getElementById("tabs").innerHTML=tabs.length;
//     // alert('Saved!');
//     return tabs.length;
//   }

// async function getAllWindows() {
//     let windows = await chrome.windows.getAll();
//     console.log(windows);
//     let count = 0;
//     for (let i = 0; i < windows.length; i++) {
//       let id = windows[i].id;
//       count = count + await getAllTabs(id);
//     }
//     console.log('count = ' + count)
//     //document.getElementById("tabs").innerHTML=count;
//       // alert('Saved!');
//   }
  
//   async function getAllTabs(id) {
//     let queryOptions = { windowId: id};
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let tabs = await chrome.tabs.query(queryOptions);
//     console.log(tabs);
//     return tabs.length;
//   }
//------------------------------------------
// let myTabs = [];

//   async function getAllWindows() {
//     let windows = await chrome.windows.getAll();
//     console.log(windows);
//     let count = 0;
//     for (let i = 0; i < windows.length; i++) {
//         console.log('hereonce' + i)
//       let id = windows[i].id;
//       let currTabs = await getAllTabs(id);
//       currTabs.forEach(tab => {
//         myTabs.push(tab.url);
//       });
//       count = count + currTabs.length;
//     }
//     console.log(myTabs);
//     console.log('count = ' + count)
//     //document.getElementById("tabs").innerHTML=count;
//       // alert('Saved!');
//   }
  
//   async function getAllTabs(id) {
//     let queryOptions = { windowId: id };
//     let tabs = await chrome.tabs.query(queryOptions);
//     console.log(tabs);
//     return tabs;
//   }
//   getAllWindows();
//   console.log(myTabs);