function startDataUpload() {
	alert ("start data upload");

	var question = document.getElementById("question").value;
	var opta = document.getElementById("opta").value;
	var optb = document.getElementById("optb").value;
	var optc = document.getElementById("optc").value;
	var optd = document.getElementById("optd").value;
	var opte = document.getElementById("opte").value;
	var correct = document.getElementById("correct").value;

	alert(question + " "+ opta + " "+optb + "  " +optc+"  "+optd+"   "+opte+"   ");
	
	var postString = "question="+question +"&opta="+opta+"&optb="+optb+"&optc="+optc+"&optd="+optd+"&opte="+opte+"&correct="+correct;
	

	// now get the geometry values
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;

   alert( latitude+ "  "+longitude);
	processData(postString);
	alert(postString)

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