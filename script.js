

// OBJECT

    
    const availability = { //array
    occupiedDates: ['2024-10-01','2024-10-02','2024-10-03','2024-10-04','2024-10-05', '2024-10-06', '2024-10-07', '2024-10-08', '2024-10-09', '2024-10-10', '2024-10-15','2024-10-16','2024-10-27','2024-10-28'], // Fechas ocupadas

// CALENDAR
    createCalendar: function() {  //function inside object
        const calendarDiv = document.getElementById('calendar');
       
 //LOOP
        for (let day = 1; day <= 31; day++) {
            const dateString = `2024-10-${day.toString().padStart(2, '0')}`;//converts day to string
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');

       
            if (this.occupiedDates.includes(dateString)) {
                dayDiv.classList.add('occupied'); 
            } else {
                dayDiv.classList.add('free');  
            }

            dayDiv.textContent = day; //add the dayDiv as the text
            calendarDiv.appendChild(dayDiv); 
        }
    }
};

//Once HTML is loaded, load java
document.addEventListener('DOMContentLoaded', availability.createCalendar.bind(availability));


//AUTOMATIC SLIDER
let currentSlide = 0; //starts with first
const slideInterval = 5000; //miliseconds of slider
const fadeDuration = 500;  //duration of changing transition

function moveSlide(direction) { //direction moved
    const reviews = document.querySelectorAll('.review');//creation of an array, takes all the html elements with "review"class.

    
    reviews[currentSlide].classList.remove('active'); //not visible
    reviews[currentSlide].style.opacity = '0'; 

   
    currentSlide += direction; //value of current slide increases depending on direction

   
    if (currentSlide < 0) {
        currentSlide = reviews.length - 1; //if we go to the beck being in slide 0, we go to the last element in array
    } else if (currentSlide >= reviews.length) { //current slide is bigger than last element of array? go back to first
        currentSlide = 0;
    }

   
    setTimeout(() => {
        reviews[currentSlide].classList.add('active'); //current slide added active class
        reviews[currentSlide].style.opacity = '1'; 
    }, fadeDuration); // after fade duration
}

// AUTOMATIC MOVE FUNCTION
function autoSlide() {
    moveSlide(1); //move the slide positive (1)
}

//START THE AUTO MOVE
setInterval(autoSlide, slideInterval); //autoslide will execute after 5 seconds (slideInterval value)



//PROGRESSIVE MENU

document.addEventListener('DOMContentLoaded', () => {

const menuParts = document.querySelectorAll('.menu-parts'); //select ALL the .menuparts elements
const dropdown = document.querySelector('.dropdown');

function showMenuItems() {
    dropdown.classList.add('show');
    menuParts.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 200); //index includes elements (each of them retarded 200 ms)
    });
}

document.querySelector('.menu-button').addEventListener('mouseenter', showMenuItems);

document.querySelector('.menu-container').addEventListener('mouseleave', () => {
    dropdown.classList.remove('show');
    menuParts.forEach(item => {
        item.classList.remove('show');
    });
});

});

/*
//BIG SLIDER GALLERY (NOT WORKING)
document.addEventListener('DOMContentLoaded', () => {

    let currentBigSlide = 0;

    document.getElementById('popup-trigger').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('popup').style.display = 'flex';
        showSlide(currentBigSlide);
    });

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
        let currentBigSlide = 0;
        
    }

    function moveSlide2(direction) {
        const slides = document.querySelectorAll('.slider img');
        slides[currentBigSlide].style.display = 'none';
        currentBigSlide = (currentBigSlide + direction + slides.length) % slides.length;
        showSlide(currentBigSlide);
    }

    function showSlide(index) {
        const slides = document.querySelectorAll('.slider img');
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
    }


*/