



nav_bar = document.getElementById("nav-links");
hamburger = document.querySelector('.hamburger');

nav_bar.style.right = "100%";


function toggleMenu(){

    if(nav_bar.style.right == "100%"){
        nav_bar.style.right = "0";
        hamburger.classList.toggle('open');
    }
    

    else{
        nav_bar.style.right = "100%";
        hamburger.classList.toggle('open');
    }
   
}








/////////////////////////// intersection observer   for first animation


const animation1 = document.getElementsByClassName("img-move-right");

const observer = new IntersectionObserver((entries) => {

   entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("move-right-anim")
      
    }
    
    else{
    
    }

   })

},{
  threshold: 0.5
});

for(let i = 0; i < animation1.length; i++){
    const el =animation1[i];
    observer.observe(el);
}





const animation2 = document.getElementsByClassName("sittin-room");

const observer2 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
 
     if(entry.isIntersecting){
 
       entry.target.classList.add("flex-base-1-text-anim")
       
     }
     
     else{
     
     }
 
    })
 
 },{
   threshold: 0.5
 });
 
 for(let i = 0; i < animation2.length; i++){
     const el2 =animation2[i];
     observer2.observe(el2);
 }
 
 




/////////////////////////// intersection observer   for second animation


const animation3 = document.getElementsByClassName("Kitchen");

const observer3 = new IntersectionObserver((entries) => {

   entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("flex-base-2-move-right")
      
    }
    
    else{
    
    }

   })

},{
  threshold: 0.5
});

for(let i = 0; i < animation3.length; i++){
    const el3 =animation3[i];
    observer3.observe(el3);
}





const animation4 = document.getElementsByClassName("flex-base-2-img");

const observer4 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
 
     if(entry.isIntersecting){
 
       entry.target.classList.add("flex-base-2-move-left")
       
     }
     
     else{
     
     }
 
    })
 
 },{
   threshold: 0.5
 });
 
 for(let i = 0; i < animation4.length; i++){
     const el4 =animation4[i];
     observer4.observe(el4);
 }
 







/////////////////////////// intersection observer for sec 3


const animation5 = document.getElementsByClassName("sec-3-parent");

const observer5 = new IntersectionObserver((entries) => {

   entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("sec-3-animation")
      
    }
    
    else{
    
    }

   })

},{
  threshold: 0.5
});

for(let i = 0; i < animation5.length; i++){
    const el5 =animation5[i];
    observer5.observe(el5);
}





const animation6 = document.getElementsByClassName("lamp-stand-text-div");

const observer6 = new IntersectionObserver((entries) => {

   entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("lamp-stand-text-div-animation")
      
    }
    
    else{
    
    }

   })

},{
  threshold: 0.5
});

for(let i = 0; i < animation6.length; i++){
    const el6 =animation6[i];
    observer6.observe(el6);
}






/////////////////////////// function for links navbar //////////////////


function getlink(event, tag){


  /////// remove active links


  navlinks = document.getElementsByClassName("nav-links")

  for(i = 0; i < navlinks.length; i++){
      navlinks[i].classList.remove("active-link");
  }


  /////// add scroll


  
  document.getElementById(tag).scrollIntoView({behavior: "smooth"});


  /////// add active link

  
  event.currentTarget.classList.add("active-link");
}

/////// add active link and tab on load

document.getElementById("default").click();









/////// Like button function


heart = document.querySelector(".fa-heart");
heart.style.color = "black"

function like(){

  if (heart.style.color == "black"){
    heart.style.color = "red";
    heart.classList.add('heart-animation');

  }

  else{
    heart.style.color = "black";
    heart.classList.remove('heart-animation');


    // void heart.offsetWidth;

    // heart.classList.add("heart-animation");
    
  }
}

// heart.addEventListener("click", like);


//   review_box = document.querySelector("form");
//   review_box.style.display = "none";

// function write_a_review(){
  

//   if(review_box.style.display == "none"){
//     review_box.style.display = "block";
//   }

//   else{
//     review_box.style.display = "none";
//   }
// }





//////////copy right year

const footer_year = document.getElementById("footer-year");

const footer_date = new Date();

const footer_new_year = footer_date.getFullYear();

footer_year.innerHTML = `&copy; ${footer_new_year}`;



