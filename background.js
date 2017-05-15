function logRequests() {

	// browser.webRequest.onBeforeSendHeaders.addListener(
	// 		(requestDetails) => {
	// 			console.log('request details', requestDetails);
	// 		},
	// 		{urls: ["<all_urls>"]},
	// 		["requestHeaders"]
	// 	);

	// Each 'responseDetails' object of the form:
	//{
	//	requestId: "135",
	//  url: "https://www.google.com/logos/doodle…",
	//  originUrl: "https://www.google.com/?gws_rd=ssl",
	//  method: "GET",
	//  tabId: 4,
	//  type: "image",
	//  timeStamp: 1493263798253,
	//  frameId: 0,
	//  parentFrameId: -1,
	//  fromCache: true,
	//  ip: “2607:f8b0:4005:807::2004”
	//  responseHeaders: [
	//    { name: “accept-ranges”, value: “bytes” },
	//    { name: “content-length”, value: “1969” },
	//    { name: “last-modified”, value: “Thu, 20 Apr 2017 00:57:03 GMT” },
	//    { name: “x-content-type-options”, value: “nosniff” },
	//    { name: “server”, value: “sffe” },
	//    { name: “x-xss-protection”, value: “1; mode=block” },
	//    { name: “cache-control”, value: “public, max-age=31536000” },
	//    { name: “age”, value: “142194” },
	//    { name: “date”, value: “Tue, 25 Apr 2017 12:00:04 GMT” },
	//    { name: “expires”, value: “Wed, 25 Apr 2018 12:00:04 GMT” },
	//    { name: “alt-svc”, value: “quic=":443"; ma=2592000; v="37,36,35"” },
	//    { name: “x-firefox-spdy”, value: “h2” }
  //  ],
  //  statusCode: 200,
  //  statusLine: “HTTP/2.0 200 OK”,
  //}
	browser.webRequest.onResponseStarted.addListener(
			(responseDetails) => console.log('response details', responseDetails),
			{urls: ["<all_urls>"]},
			["responseHeaders"]
	);

	// Each 'tab' object of the form:
	//{
	//	active: true,
	//  audible: false,
	//  favIconUrl: "https://www.google.com/images/branding/product/ico/googleg_lodp.ico",
	//  height: 402,
	//  highlighted: true,
	//  id: 1,
	//  incognito: false,
	//  index: 0,
	//  mutedInfo: {
  //    muted: false
	//  }
	//  pinned: false,
	//  selected: true,
	//  status: "complete",
	//  title: "Google",
	//  url: "https://www.google.com/?gws_rd=ssl",
	//  width: 958,
	//  windowId: 5
	//}
	browser.tabs.query({}, (tabs) => {
		for (let i = 0; i < tabs.length; i++) {
			console.log(tabs[i]);
		}
	});
}

if (!browser) {
  const browser = chrome;
}

// when user clicks browserAction icon in toolbar, get all tab URLs and print to console
browser.browserAction.onClicked.addListener(logRequests);