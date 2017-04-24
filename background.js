function logRequests(evt) {

	// print each tab URL to the console
	function logTabs(tabs) {
		for (let tab of tabs) {
			console.log(tab.url);
			//saveUrl(tab);
		}
	}

	function onError(error) {
  	console.log('Error');
	}

	// get all tabs, then print each to the console
	var querying = browser.tabs.query({});
	querying.then(logTabs, onError);

	// function saveUrl(tab) {
	// 	browser.storage.local.set({
	// 		[tab]: tab.url 
	// 	});	
	// }

	// function getUrl(tab) {
	// 	var gettingRequest = browser.storage.local.get(tab);
	// 	gettingItem.then((returnObj) => {
	// 		console.log(returnObj.url);
	// 	});
	// }

	//stop event propagation after initial click
	evt.preventDefault();
}

// when user clicked browserAction icon in toolbar, get all tab URLs and print to console
browser.browserAction.onClicked.addListener(logRequests);