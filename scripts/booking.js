/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
var calculatedCost = document.getElementById("calculated-cost");
var mon = document.getElementById("monday");
var tues = document.getElementById("tuesday");
var wed = document.getElementById("wednesday");
var thur = document.getElementById("thursday");
var fri = document.getElementById("friday");

var clear = document.getElementById("clear-button");
var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");

var totalCost = 0;

var daysSelected = 0;
var dailyRate = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function colorChange()
{
    if(this.classList.contains('blue-hover') && !this.classList.contains('clicked'))
    {
        this.classList.add('clicked');
        daysSelected += 1;
        dailyRate = 35;
        
        recalculate();
    }
}

mon.addEventListener('click', colorChange);
tues.addEventListener('click', colorChange);
wed.addEventListener('click', colorChange);
thur.addEventListener('click', colorChange);
fri.addEventListener('click', colorChange);





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function removeClicked() 
{
    mon.classList.remove("clicked");
    tues.classList.remove("clicked");
    wed.classList.remove("clicked");
    thur.classList.remove("clicked");
    fri.classList.remove("clicked");

    totalCost = 0;
    daysSelected = 0;
    recalculate();
}
clear.addEventListener("click",removeClicked);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeRate(){
    dailyRate = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    recalculate();
}
halfDay.addEventListener("click",changeRate);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeFull(){
    dailyRate = 35;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');
    recalculate();
}
fullDay.addEventListener('click',changeFull);





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
    totalCost = dailyRate * daysSelected;
    calculatedCost.innerHTML = totalCost;
}

