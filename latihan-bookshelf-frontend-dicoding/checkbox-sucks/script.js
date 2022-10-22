function boxPress(markNumber) {
  var checkbox = "mark" + markNumber;
  var element = document.getElementById(checkbox);
  var markbox = "markbox" + markNumber;
  if (element.getAttribute("checked") == null) {
    element.setAttribute("checked", "true");
    element.checked = true;
    document.getElementById(markbox).classList.add('checked');
  } else {
    element.removeAttribute("checked");
    element.checked = false;
    document.getElementById(markbox).classList.remove('checked');
  }
}