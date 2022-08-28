function makeUnderline(li_id) {
      var nav_li_class_name = 'nav_li';
      var li_element = document.getElementById(li_id);
      var li_elements = document.getElementsByClassName(nav_li_class_name);

      // console.log(li_elements)

      for (var i = 0; i < li_elements.length; i++) {
            li_elements[i].classList.remove("active");
      }
      li_element.classList.add("active");

      var element = document.querySelector(".content")
      console.log(element)

      loadHTML(element)
      
}

function processAjaxData(response, urlPath){
      document.getElementById("content").innerHTML = response.html;
      document.title = response.pageTitle;
      window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
  }

  function loadHTML(element){
      fetch('./project.html')
      .then(response=> response.text())
      .then(text=> element.innerHTML = text);

      
    }