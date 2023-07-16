const body = document.querySelector("body"),
      header  = document.querySelector("header"),
      modeToggle  = document.querySelector(".dark-light");


      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
      });



     