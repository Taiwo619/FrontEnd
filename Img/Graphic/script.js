

////// greeting function


greeting = document.getElementById('greeting')

d = new Date();

hour = d.getHours();

if(hour >= 0  &&  hour < 12){
  greeting.innerHTML = "Good Morning";
}

else if (hour >= 12  &&  hour < 16){
    greeting.innerHTML = "Good Afternoon";
}

else{
    greeting.innerHTML = "Good Evening";
}
   



///// Time display function


time = document.getElementById('time');


setInterval(() => {

    d = new Date();

    time.innerHTML = d.toLocaleTimeString();
    
}, 1000);




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