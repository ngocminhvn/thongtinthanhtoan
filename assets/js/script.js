/**
 * @Mode: NgocMinhIT
 * @Website: TrumSource.COM
**/

// Copy To Clipboard 
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    Swal.fire("Thông báo", "Copy thành công!", "success");
}
// Format url 
var url = window.location.href;
var uri = window.location.toString();
var fb1 = url.substring(0, url.indexOf("?fbclid"));
var fb2 = url.substring(0, url.indexOf("&fbclid"));
if (uri.length - fb1.length > 0) window.history.replaceState({}, document.title, fb1);
if (uri.length - fb2.length > 0) window.history.replaceState({}, document.title, fb2);
// Dark mode
const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}
toggleSwitch.addEventListener("change", switchTheme);
