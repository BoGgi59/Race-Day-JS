let runnerAge = prompt("Please enter your age here", "");
let registRandom = Math.floor(Math.random() * 2);
let registTime;
let runTime;

registRandom == 0 ? true : false ;

if (registRandom == true) {
  registTime = "Early"
 } else {
   registTime = "Late"
 }
console.log(runnerAge);
console.log(registRandom);
console.log(registTime);

let raceNumber = Math.floor(Math.random() * 1000);

switch (true) {
  case registRandom == true && runnerAge > 18:
    raceNumber += 1000;
    console.log(`You are in adult group.
     and you are registered ${registTime}.
     Your race number is ${raceNumber}.
     Your race time is 9:30 am. 
            Have a fun!!`);
     alert(`
     You are in -------------   Adult group.
     You are registered   ---   ${registTime}.
     Your race number is  ---   ${raceNumber}.
     Your race time is    ---   9:30 am. 
             Have a fun!!`);
     break;
     case registRandom == false && runnerAge > 18:
      console.log(`You are in adult group.
       and you are registered ${registTime}.
       Your race number is ${raceNumber}.
       Your race time is 11:00 am. 
            Have a fun!!`);
       alert(`
       You are in  -----------    Adult group.
       You are registered  ---    ${registTime}.
       Your race number is ---    ${raceNumber}.
       Your race time is   ---    11:00 am. 
                Have a fun!!`)
       break;
        case (registRandom == false || true) && runnerAge < 18:
        console.log(`You are in young group.
        and you are registered ${registTime}.
        Your race number is ${raceNumber}.
        Your race time is 12:30 pm. 
        Have a fun!!`);
        alert(`
        You are in  -----------   Young group.
        You are registered  ---   ${registTime}.
        Your race number is ---   ${raceNumber}.
        Your race time is   ---   12:30 pm. 
                   Have a fun!!`)
        break; 
          default:
          console.log(`You are 18 years old. 
          Go to the Info Desk.`);
          alert(`
          You are 18 years old. 
          Go to the Info Desk.`) 
}

