const Http = new XMLHttpRequest();
const url='https://alexwohlbruck.github.io/cat-facts/';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function() {
    if(this.readyState==4 && this.status==200) {
        console.log(Http.responseText)
    }
  }


  const app = document.getElementById('createBtn')