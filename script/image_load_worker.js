// Handler for receiving a message from the main script
onmessage = function(e) {

	// Notification
  	console.log('Web worker :: Message received from main script' );

  	// Process the received array of urls
  	for (i = 0 ; i < e.data.length ; i++)
  	{
  		// Get an url
  		var url = e.data[i];
  		console.log('Web worker :: Processing ' + url);

      // Load image - security.fileuri.strict_origin_policy = false
      var x = new XMLHttpRequest();
      x.open('GET', url, true);
      x.send();
    }


  	// Notify the main script that the web worker has finish its job
  	postMessage("Done!");

  	// Notfication
  	console.log('Web worker :: Posting message back to main script');
}