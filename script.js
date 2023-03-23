var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf("/") + 1);

if (filename === "homepage.html") {
  var slideIndex = 1;
  var timeOut;
  var isOn = true;
  showSlides(slideIndex);

  function plusSlides(n) {
    isOn = false;
    clearTimeout(timeOut);
    showSlides((slideIndex += n));
    timeOut = setTimeout(auto, 2000);
  }
  function auto() {
    isOn = true;
    showSlides(slideIndex);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length || slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (n < 1 || slideIndex < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    if (isOn) {
      slideIndex++;
      timeOut = setTimeout(showSlides, 4000);
    }
  }
}

function quantityChange1(i) {
  var quantity = parseInt(document.getElementById("quantity1").innerHTML);
  quantity += i;
  document.getElementById("quantity1").innerHTML = quantity.toString();
  if (quantity > 2) {
    quantity = 2;
    document.getElementById("quantity1").innerHTML = quantity.toString();
  }
  if (quantity == 0) {
    document.getElementById("quantity11").style.display = "none";
  }
  sum();
}

//trolley applications
function quantityChange2(i) {
  var quantity = parseInt(document.getElementById("quantity2").innerHTML);
  quantity += i;
  document.getElementById("quantity2").innerHTML = quantity.toString();
  if (quantity > 2) {
    quantity = 2;
    document.getElementById("quantity2").innerHTML = quantity.toString();
  }

  if (quantity == 0) {
    document.getElementById("quantity22").style.display = "none";
  }
  sum();
}

//trolley calculation
function sum() {
  var quantity1 = parseInt(document.getElementById("quantity1").innerHTML);
  var quantity2 = parseInt(document.getElementById("quantity2").innerHTML);
  var total = quantity1 * 5990 + quantity2 * 49990;
  total.toPrecision(10);
  var total2 = total.toString();
  var len1 = total2.length % 3;
  var len = (total2.length - len1) / 3;
  var result;

  if (len1 != 0) {
    result = total2.substr(0, len1);
  }
  for (let i = 0; i < len; i++) {
    var sub = total2.substr(len1 + i * 3, 3);
    result = result + "." + sub + ".";
  }
  if (total == 0) {
    document.getElementById("total").innerHTML = "0";
    document.getElementById("order").style.display = "none";
  } else {
    result = result + "000";
    document.getElementById("total").innerHTML = result;
  }
}

// Theme
document.getElementById("mySwitch").onclick = function () {
  let key = document.getElementById("mySwitch").value;
  if (key === "yes") {
    document.body.style.backgroundColor =
      document.getElementById("trolley").style.backgroundColor =
      document.getElementById("loginregister").style.backgroundColor =
        "grey";
    document.getElementById("mySwitch").value = "no";
    document.getElementById("mode").innerHTML = "Giao diện Greymode";
  } else {
    document.body.style.backgroundColor =
      document.getElementById("trolley").style.backgroundColor =
      document.getElementById("loginregister").style.backgroundColor =
        "lightgrey";
    document.getElementById("mySwitch").value = "yes";
    document.getElementById("mode").innerHTML = "Giao diện Lightmode";
  }
};

if (filename === "iphone13promax.html") {
  document.getElementById("space1").onclick = function () {
    document.getElementById("space").innerHTML = "128Gb";
    document.getElementById("prices").innerHTML = "33.990.000";
  };
  document.getElementById("space2").onclick = function () {
    document.getElementById("space").innerHTML = "256Gb";
    document.getElementById("prices").innerHTML = "36.990.000";
  };
  document.getElementById("space3").onclick = function () {
    document.getElementById("space").innerHTML = "512Gb";
    document.getElementById("prices").innerHTML = "43.990.000";
  };
  document.getElementById("space4").onclick = function () {
    document.getElementById("space").innerHTML = "1Tb";
    document.getElementById("prices").innerHTML = "49.990.000";
  };
}
