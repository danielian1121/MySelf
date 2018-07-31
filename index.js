var first_flag = 0
window.onload = function () {
    $("#head").fadeIn(1000);
    setTimeout(() => {
        $("#education").fadeIn(1000);
    }, 750);
    $("#html_css").progressbar({
        value: 0
    });
    $("#javascript").progressbar({
        value: 0
    });
    $("#nodejs_express").progressbar({
        value: 0
    });
};

window.onscroll = function () {
    var now = document.documentElement.scrollTop
    var first_dest = document.getElementById("first_de").offsetTop
    if (first_dest - now <= 700 && first_flag == 0) {
        first_flag = 1;
        document.getElementById("first_de").style.display = "none";
        $("#skill").fadeIn(1000);
        setTimeout(first_bar_fadein, 400)
    }
}

function first_bar_fadein() {
    $("#first_bar").fadeIn(1000)
    setTimeout(html_progress, 1000)
    setTimeout(second_bar_fadein, 400)
}
function second_bar_fadein() {
    $("#second_bar").fadeIn(1000)
    setTimeout(javascript_progress, 1000)
    setTimeout(third_bar_fadein, 400)
}
function third_bar_fadein() {
    $("#third_bar").fadeIn(1000)
    setTimeout(nodejs_progress, 1000)
}


function html_progress() {
    var val = $("#html_css").progressbar("value") || 0
    $("#html_css").progressbar("value", val + 1);
    if (val < 60) {
        setTimeout(html_progress, 20);
    }
}

function javascript_progress() {
    var val = $("#javascript").progressbar("value") || 0
    $("#javascript").progressbar("value", val + 1);
    if (val < 90) {
        setTimeout(javascript_progress, 20);
    }
}

function nodejs_progress() {
    var val = $("#nodejs_express").progressbar("value") || 0
    $("#nodejs_express").progressbar("value", val + 1);
    if (val < 80) {
        setTimeout(nodejs_progress, 20);
    }
}





/*window.onscroll = function () {
    var flag = document.documentElement.scrollTop;
    if (flag > 100) {
        alert(document.documentElement.scrollTop)
    }
    var dest = document.getElementById("contact_2").offsetTop
    var now = document.documentElement.scrollTop
    if (dest - now <= 800) {
        this.alert("hi")
    }
}*/