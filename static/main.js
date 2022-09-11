function makeUnderline(li_id, li_classes) {

      // Appending and removing to Performing Animation 
      var nav_li_class_name = 'nav_li';
      var li_element = document.getElementById(li_id);
      var li_elements = document.getElementsByClassName(nav_li_class_name);

      for (var i = 0; i < li_elements.length; i++) {
            li_elements[i].classList.remove("active");
      }
      li_element.classList.add("active");

      // Dynamically adding the content to webpage
      var pages = ['home', 'about', 'contact', 'projects','skills','achievements']
      var classListArray = Array.from(li_classes)

      for (var i = 0; i < pages.length; i++) {
            className = pages[i]
            if (classListArray.indexOf(className) != -1) {
                  pageName = className
                  addContentDynamically(pageName)
                  break;
            }
      }
}

function addContentDynamically(pageName) {
      fetch(`./${pageName}`)
            .then(response => response.text())
            .then(text => {
                  const parser = new DOMParser();
                  const htmlDocument = parser.parseFromString(text, "text/html");
                  const content = htmlDocument.documentElement.querySelector(".content").innerHTML;

                  var targetElement = document.querySelector(".content");
                  targetElement.innerHTML = content;

                  document.title = htmlDocument.title
                  window.history.pushState('', '', `${pageName}`);
            }
      )
}
window.onpopstate = function(e){
      console.log(e.state)
      if(true){
          document.querySelector(".content").innerHTML = "Wow";
          document.title = e.state.pageTitle;
      }
  };

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const navList  = document.querySelectorAll(".nav_li")
// const menu = document.querySelector(".menu");

function toogleMobileNavbar(){
      navbar.classList.toggle("navbar-mobile");  
      menu.classList.toggle("active-mobile");
}

menu.addEventListener("click",() => toogleMobileNavbar());
for (let i = 0; i < navList.length; i++) {
      navList[i].addEventListener("click",() => toogleMobileNavbar());
}