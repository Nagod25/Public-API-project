function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("createBtn").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "https://alexwohlbruck.github.io/cat-facts/", true);
    xhttp.send();
  }