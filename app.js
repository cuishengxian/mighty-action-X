var color = document.getElementById("color");
var List = document.getElementsByTagName("li");
var word = document.getElementsByClassName("word")[0];
var no = localStorage.getItem("key");
for (var i = 0; i < List.length; i++) {
    if (i == no) {
        List[0].removeAttribute("class");
        List[i].style.marginTop = 0;
        word.setAttribute("id", "co-" + i);
    }
}
for (var i = 0; i < List.length; i++) {
    List[i].index = i;
    List[i].onclick = function() {
        for (var j = 0; j < List.length; j++) {
            List[j].style.marginTop = 5 + "px";
            this.style.marginTop = 0;
        }
        var l = this.getAttribute("id");
        word.setAttribute("id", l);
        localStorage.setItem("key", this.index);
    }
}
