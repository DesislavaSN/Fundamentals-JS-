// A gladiator has to repair his broken equipment when he loses a fight. 
// 	Every second lost game, his helmet is broken.
// 	Every third lost game, his sword is broken.
// 	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// 	Every second time, when his shield brakes, his armor also needs to be repaired.
// The function calculates his expenses for the year for renewing his equipment based on the given parameters 

function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 == 0) {
            totalExpenses += helmetPrice;
        }
        if (i % 3 == 0) {
            totalExpenses += swordPrice;
        }
        if (i % 6 == 0) {
            totalExpenses += shieldPrice;
        }
        if (i % 12 == 0) {
            totalExpenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

