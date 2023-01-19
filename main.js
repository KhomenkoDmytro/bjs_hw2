let userName=userNameInput();
let userAge=userAgeInput();
permissionCheck(userName, userAge);

function userNameInput(){
    let userName, defaultUserName;
    let incorrectUserName = true;
    while(incorrectUserName){
        userName=prompt(`Введіть Ваше ім'я`, defaultUserName);
        if(userName.length>0){
            incorrectUserName=false;
        }else{
            defaultUserName=userName;
        }
    }
    return userName;
}

function userAgeInput(){

    let userAge, defaultUserAge;
    let incorrectUserAge=true;

    while(incorrectUserAge){
        userAgeInput=prompt(`Введіть ваш вік`, defaultUserAge);
        userAge=Number(userAgeInput)
        if(!isNaN(userAge)){
            incorrectUserAge=false;
        }else{
            defaultUserAge=userAgeInput;
        }
    }
    return userAge;
}

function permissionCheck(userName, userAge){
    let minAge=18;
    if(userAge<minAge){
        alert(`You're not allowed to visit this website.`);
    } else if(minAge<userAge && userAge<=22){
        let answer=confirm('Are you sure you want to continue?');
        if(answer){
            alert(`Welcome ${userName}!`);
        }
        else
        {
            alert(`You're not allowed to visit this website.`);
        }
    } else if(userAge>22){
        alert(`Welcome ${userName}!`);
    }
}
