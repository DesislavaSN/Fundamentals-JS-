function theaterPromo(day, age) {
    let ticket;
    if (age >= 0 && age <= 122) {
        switch (day) {
            case "Weekday":
                if (age <= 18) {
                    ticket = 12;
                } else if (age <= 64) {
                    ticket = 18;
                } else if (age <= 122) {
                    ticket = 12;
                }
                break;
            case "Weekend":
                if (age <= 18) {
                    ticket = 15;
                } else if (age <= 64) {
                    ticket = 20;
                } else if (age <= 122) {
                    ticket = 15;
                }
                break;
            case "Holiday":
                if (age <= 18) {
                    ticket = 5;
                } else if (age <= 64) {
                    ticket = 12;
                } else if (age <= 122) {
                    ticket = 10;
                }
                break;
        }
        console.log(ticket + "$");
    } else {
        console.log("Error!");
    }
}
