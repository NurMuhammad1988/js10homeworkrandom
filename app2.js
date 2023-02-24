var result = document.getElementById("result");
var firstnum = document.getElementById("firstnum");
var secondnum = document.getElementById("secondnum");
var generate = document.getElementById("generate");


generate.onclick = function () {
    var a = +firstnum.value;
    var b = + secondnum.value;

    if (isNaN(a)) || undefined{} {
        alert("Faqat raqam kiriting");
    }

    else (isNaN(b)){
        alert("Faqat raqam kiriting");
    }

         else {
        result.textContent = Math.floor(a + Math.random() * b);
    }
}

