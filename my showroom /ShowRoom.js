var typed = new 
  Typed(document.querySelector(".typing"), {
    strings: ["<b>welcome to my ShowRoom.</b><br>Here you are going to<br> explore most of my projects<br> both old and new projects.<br> my projects here are to showcase, and highlight projects i have been<br> working on.<br> keep in mind that all projects here<br> are owned by me and it was built from scratch.","I will be updating them as i progress.", "keep exploring! ☺️","Click on the <b>images</b> to view projects.👇🏽"],
    typeSpeed: 80,
    backSpeed: 0.5,
    loop: false, 
    onComplete: function(){
        document.querySelector('.todo').style.display = 'block';
    }
  });
  