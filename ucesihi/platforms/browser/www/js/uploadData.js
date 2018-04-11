function startDataUpload() {
	alert ("start data upload");

	// now get the geometry values
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	postString =  "&latitude=" + latitude + "&longitude=" + longitude;
	
	var question = document.getElementById("question").value;
	var optA = document.getElementById("optA").value;
	var optB = document.getElementById("optB").value;
	var optC = document.getElementById("optC").value;
	var optD = document.getElementById("optD").value;
	var optE = document.getElementById("optE").value;
	var correct = document.getElementById("correct").value;
	
	var postString = postString + "question="+question +"&optA="+optA+"&optB="+optB+"&optC="+optC+"&optD="+optD+"&optE="+optE+"&correct="+correct;
	
		// now get the checkbox values - separate them with a | so that they can be // split later on if necessary
	var checkString = "";
	for (var i = 1;i< 9;i++){
		if (document.getElementById("check"+i).checked === true) {
			checkString = checkString + document.getElementById("check"+i).value + "||"
		}

	}

	postString = postString + "&modulelist="+checkString;

	
	processData(postString);

}

var client;

function processData(postString) {
   client = new XMLHttpRequest();
   client.open('POST','http://developer.cege.ucl.ac.uk:30303/uploadData',true);
   client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   client.onreadystatechange = dataUploaded;  
   client.send(postString);
}
// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // change the DIV to show the response
    document.getElementById("dataUploadResult").innerHTML = client.responseText;
    }
}