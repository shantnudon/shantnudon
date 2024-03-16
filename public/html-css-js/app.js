const j = 0;
//Function for live Rendering of the components
function update(i) {
  if (i == 0) {
    let htmlValue = document.getElementById("htmlValue").value;
    let cssValue = document.getElementById("cssValue").value;
    let javascriptValue = document.getElementById("javascriptValue").value;
    let text =
      htmlValue +
      "<style>" +
      cssValue +
      "</style>" +
      "<scri" +
      "pt>" +
      javascriptValue +
      "</scri" +
      "pt>";
    let iframe = document.getElementById("viewer").contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
  } else if (i == 1) {
    let htmlValue = document.getElementById("htmlValue").value;
    let html = htmlValue.slice(0, htmlValue.length);
    document.getElementById("htmlValue").value = html;
    j = 1;
  }
}
