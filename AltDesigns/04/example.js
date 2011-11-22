/*
 add a backfire button 
function addButton(){
  var button = document.createElement("button");
  button.innerHTML = "Backfire!";
  button.setAttribute("id", "backfire_button")
  button.setAttribute("style", "position: fixed; right: 0px; top: 0px;")
  button.onclick = function() {saveHTML(); Backfire.save(); }
  document.body.appendChild(button);
}
 */

function addDiv() {
	var div = document.createElement("div");
	div.setAttribute("id", "newDiv")
	document.body.appendChild(div);
}

/* remove the backfire button */
function removeButton() {
	$('#backfire_button').remove();
}

/* save html to file */
function saveHTML() {
	// removeButton();

	var html = $("html").html();

	$.post('./save_html', {
		html : html
	}, function(data) {
		$('.result').html(data);
	});

	// addButton();
}

/* main */
/*
$(document).ready(function() {
	$.ajaxSetup( {
		async : false
	});
	// addButton();
	});
*/

// ///////////////////////////////////////////////////////////////////////

// This is a custom client-side implementation example of Backfire.
function startBackfireExample() {

	// Create my custom backfireOptions object.
	var backfireOptions = {

		// Give it the url to save to, cross-domain allowed.
		url : "./save_css",

		// Optionally do an initial check if saving to that url is allowed.
		verifyAccessOnLoad : true,

		// Handle incoming messages from the server.
		messageHandler : function(message) {
			switch (message) {

			// With verifyAccessOnLoad enabled, AccessGranted is returned when
			// all is okay.
			// This allows you to show a button or toolbar if you like.
			case "AccessGranted":
				// Let's create a simple button that calls Backfire.save() when
				// pressed.
				if ($("#backfire_save_button").length === 0) {
					// do something here

					var button = document.createElement("button");
					button.innerHTML = "Backfire!";
					button.setAttribute("style",
							"position: fixed; right: 0px; top: 0px;");
					button.setAttribute("id", "backfire_save_button");
					button.onclick = function() {
						Backfire.save();
						saveHTML();
					}
					document.body.appendChild(button);
				}

				if ($("#backfire_div_button").length === 0) {
					// do something here
					// div button
					var button = document.createElement("button");
					button.innerHTML = "Create Div!";
					button.setAttribute("style",
							"position: fixed; right: 0px; top: 40px;");
					button.setAttribute("id", "backfire_div_button");
					button.onclick = function() {
						addDiv();
					}
					document.body.appendChild(button);
				}

				break;

			// With verifyAccessOnLoad enabled, AccessDenied is returned if the
			// server is set up
			// correctly, but you don't have access to save changes.
			case "AccessDenied":
				alert("Access was denied!");
				break;

			// After saving went okay, refresh Backfire to clean up its
			// collection of changes.
			case "SaveSuccessful":
				Backfire.refresh();
				alert("Your changes have been saved.");
				break;

			// When saving failed, show it.
			case "SaveFailed":
				alert("Saving failed.");
				break;
			}
		}
	};

	// Go
	Backfire.load(backfireOptions);
}
