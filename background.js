function logRequests(evt) {

	function logURL(details) {
	  console.log(details);
	}

	browser.webRequest.onResponseStarted.addListener(
		logURL,
		{urls: ["<all_urls>"]},
		["responseHeaders"]
		);

	//stop event propagation after initial click
	evt.preventDefault();
}

// when user clicked browserAction icon in toolbar, get all tab URLs and print to console
browser.browserAction.onClicked.addListener(logRequests);