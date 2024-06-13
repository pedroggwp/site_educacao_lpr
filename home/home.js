var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

filename = filename.replace(/\.[^/.]+$/, "");

// console.log(filename)

document.querySelectorAll('.menu a').forEach(function(element) {
    // console.log(element)

    console.log(element.getAttribute('href'))
    console.log(filename)
    if (element.getAttribute('href') === filename + '.html') {
      element.parentNode.classList.add('active');
    }
  });