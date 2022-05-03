function login(input){
    let username = input[0];
    counter = 0;
    for(let i = 1; i <= 4; i++){
        counter++;
        let password = input[i];
        let revPass = username.split("").reverse().join("");
        if(password === revPass){
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if(counter >= 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        }   
    }
}
