


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
   




////// Time display function


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





////////// intersection observer for work-cont-animation



function Intersection_Observer(className, animationClass) {

    const elements = document.getElementsByClassName(className);
    
    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add(animationClass);

            }

        });
    }, 
    
    {
        threshold: 0.5
    });

    for (let i = 0; i < elements.length; i++) {

        observer.observe(elements[i]);
    }
}


// Call the function for each set of elements you want to observe
Intersection_Observer("Graphic", "Project-animation");
Intersection_Observer("ToDo", "Project-animation");
Intersection_Observer("G-port", "Project-animation");




//////////footer year

const footer_year = document.getElementById("footer-year");

const footer_date = new Date();

const footer_new_year = footer_date.getFullYear();

footer_year.innerHTML = `&copy; ${footer_new_year}`;

