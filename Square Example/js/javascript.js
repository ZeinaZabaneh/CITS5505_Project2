
      function darkMode() {
        var element = document.body;
        var content = document.getElementById("theme_image");
        element.className = "dark-mode";
        content.src = "images/moon.png";
      }
      function lightMode() {
        var element = document.body;
        var content = document.getElementById("theme_image");
        element.className = "light-mode";
        content.src = "images/sun.png";
      }

      function about() {
        var element = document.getElementById("main_text");
        element.style.left = "0%";
      }

      function history() {
        var element = document.getElementById("main_text");
        element.style.left = "-100%";
      }

      function biography() {
        var element = document.getElementById("main_text");
        element.style.left = "-200%";
      }

   