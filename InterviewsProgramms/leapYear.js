function leap(year){
    if((year%4===0)&& (year%100===0)||(year%400===0)){
        console.log('its a leap year')
    }
    else{
        console.log('its not a leapYear')
    }
}
leap(2023)