/*
console.log("TRAIN AREA!")
console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling", // 0-20
    "to'g'ri boshliq tanlang va koproq hato qiling", //20-30
    "o'zingizga ishlashni boshlang", // 30-40
    "siz kuchli bo'lgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yo'q endi" // 60
];

// CALBACK function
function maslahatBering(a, callback) {
    if(typeof a !== 'number') callback("inser a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(function () {
            callback(null, list[5]);
        }, 5000);
        callback(null, list[5]);
    }
}


console.log('passed here 0');
maslahatBering(65, (err, data) => {
   if(err) console.log('ERROR:', err);
   else {
    console.log('javob:', data);
   }
});
console.log('passed here 1');
*/

/*
// CALBACK function
console.log("TRAIN AREA!")
console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling", // 0-20
    "to'g'ri boshliq tanlang va koproq hato qiling", //20-30
    "o'zingizga ishlashni boshlang", // 30-40
    "siz kuchli bo'lgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yo'q endi" // 60
];

function maslahatBering(a, callback) {
    if(typeof a !== 'number') callback("inser a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
            callback(null, list[5]);
        }, 2000);
        callback(null, list[5]);
    }
}


console.log('passed here 0');
maslahatBering(65, (err, data) => {
   if(err) console.log('ERROR:', err);
   else {
    console.log('javob:', data);
   }
});
console.log('passed here 1');
*/


/*
console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling", // 0-20
    "to'g'ri boshliq tanlang va koproq hato qiling", //20-30
    "o'zingizga ishlashni boshlang", // 30-40
    "siz kuchli bo'lgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yo'q endi" // 60
];
// ASYNC function
async function maslahatBering(a) {
    if(typeof a !== 'number') throw new Error("inser a number");
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
        });
        return list[5];
 //        setTimeout(function () {
 //           return list[5];
 //        }, 5000);
   }
}
*/


/*
// then/catch
console.log('passed here 0');
 maslahatBering(25)
.then(data => {
   console.log('javob:', data);
})
.catch(err => {
    console.log("ERROR:", err);
})
console.log('passed here 1');
*/

/*
// asyn/await
async function run() {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(32);
    console.log(javob);
    javob = await maslahatBering(42);
    console.log(javob);
}

run();
*/

