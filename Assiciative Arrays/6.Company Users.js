//6.	Company Users

function companyUsers(arr){
    let companies = {};

    for (let line of arr) {
        let [company, idNum] = line.split(" -> ");
        // console.log(company, idNum);
        
        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
            companies[company].add(idNum);
        } else {
            companies[company].add(idNum);
        } 
    }
    // console.log(companies);

    for (let [company, idN] of Object.entries(companies).sort()) {
        console.log(company);
        for (let id of idN.values()) {
            // console.log(id);
            console.log(`-- ${id}`);
        } 
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
);

console.log("------------");

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
);