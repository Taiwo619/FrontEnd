////// greeting function


greeting = document.getElementById('greeting')
emoji = document.getElementById('greeting-emoji')

d = new Date();

hour = d.getHours();

if(hour >= 0  &&  hour < 12){
  greeting.innerHTML = "Good Morning";
  emoji.src = "morning.png";
}

else if (hour >= 12  &&  hour < 16){
    greeting.innerHTML = "Good Afternoon";
    emoji.src = "afternoon.png";
}

else{
    greeting.innerHTML = "Good Evening";
    emoji.src = "evening.png";
}
   




// ////// Time display function


// time = document.getElementById('time');


// setInterval(() => {

//     d = new Date();

//     time.innerHTML = d.toLocaleTimeString();
    
// }, 1000);



function darkmode(){


    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }

    else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
}




toggler = document.getElementById("toggler-icon");
toggler_div = document.getElementById("toggler");


function toggle_dark(){

    toggler.classList.toggle("dark-mode-toggle");

    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        toggler_div.style.backgroundColor = "#F4F4F6";
        toggler.style.backgroundColor = "0C0C0C";
      
   
    }

    else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        toggler_div.style.backgroundColor = "#262626";
        toggler.style.backgroundColor = "0C0C0C";
       
    }



}




//////////  skills tab function

function openskills(event, tab){


    /////// remove active tab


    tablinks = document.getElementsByClassName("skill-btn");

    for(i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove("active-btn");
    }


    /////// remove active tab content

    tabcontents = document.getElementsByClassName("Skills-content");

    for(i = 0; i < tabcontents.length; i++){
        tabcontents[i].style.display = "none";

    }

    document.getElementById(tab).style.display = "block";
    event.currentTarget.classList.add("active-btn");
}


/////// add active link and tab on load

document.getElementById("default").click();







// zoomed_image_container = document.getElementById("zoom-image-overlay");
// zoomed_image = document.getElementById("zoomed-image");
// close_btn = document.getElementById("close-zoom-btn");

// function zoom_image(divElement) {


//     imgElement = divElement.querySelector("img");

//     zoomed_image.src = imgElement.src;

//     zoomed_image_container.classList.add("zoom-image-overlay-opened");

//     close_btn.style.display = "block";

    
// }




// function close_zoom(){


    
//     zoomed_image_container.classList.remove("zoom-image-overlay");
    

// }


zoomed_image_container = document.getElementById("zoomed-image-container");
zoomed_image = document.getElementById("zoomed-image");
zoomed_text = document.getElementById("zoomed-text")
zoomed_image_name = document.getElementById("zoomed-image-name");
zoomed_image_container.style.display = "none";

function zoom_image(divElement){

    imgElement = divElement.querySelector("img");

    zoomed_image.src = imgElement.src;

    

    if(!zoomed_image_container.classList.contains("open")){
        zoomed_image_container.style.display = "flex";
        zoomed_image_container.classList.add("open-2");
        zoomed_image_container.classList.remove("close-2");
    }

    else{
        // zoomed_image_container.style.display = "flex";
        zoomed_image_container.classList.add("close-2");
        zoomed_image_container.classList.remove("open-2");

    }

}



function close_zoomed_image(){

    if(zoomed_image_container.classList.contains("open-2")){
        zoomed_image_container.classList.add("close-2");
        zoomed_image_container.classList.remove("open-2");
    }

    else{
        zoomed_image_container.style.display = "flex";
    }

}


// zoomed_image_name.innerHTML = zoomed_text.innerHTML;
    
    // if(zoomed_image_container.style.display == "none"){
    //     zoomed_image_container.style.display = "flex";
    // }

    // else{
    //     zoomed_image_container.style.display = "none";
    // }



//////////footer year

const footer_year = document.getElementById("footer-year");

const footer_date = new Date();

const footer_new_year = footer_date.getFullYear();

footer_year.innerHTML = "&copy;" + footer_new_year;






