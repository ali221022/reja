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


// A-tack

/*
function countLetter(a, b)  {
   return a.split('').reduce((count, char) => {
    return  char === b ? count +1 : count; 
   }, 0)
}

console.log(countLetter("ikkilanish", "i"));
*/

/*
function countLetter(a, b) {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === a) {
            count++;
        }
    }
    return count;
}
   
// Misol uchun:
 console.log(countLetter("e", "engineer")); // 3 ni return qiladi 
 */


/*
function countLetter(a, b) {
    return b.split(a).length - 1;
}

console.log(countLetter("s", "assalomu alaykum"));
*/


// B-Tack


/*
function countDigits(a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (!isNaN(a[i]) && a[i] !== ' ') {
            count++;
        }
    }
    return count;
 }

// Misol uchun
     console.log(countDigits("ad2a54y79wet0sfgb9dfg5667cxs")); // 7 ni return qiladi
*/


/*
MITASK-C 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

@MITASK

*/


// C-TACK



class Shop {
    constructor(non, lagmon, cola) {
        this.products = {
            non: non,
            lagmon: lagmon,
            cola: cola
        };
    }

    logMessage(message) {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`Hozir ${currentTime}da ${message}`);
    }

    qoldiq() {
        const { non, lagmon, cola } = this.products;
        return `Hozir ${new Date().toLocaleTimeString()}da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`;
    }

    sotish(product, quantity) {
        if (this.products[product] !== undefined && this.products[product] >= quantity) {
            this.products[product] -= quantity;
            this.logMessage(`${quantity}ta ${product} sotildi!`);
        } else {
            this.logMessage(`${product} uchun yetarli miqdor yo'q yoki mahsulot topilmadi!`);
        }
    }

    qabul(product, quantity) {
        if (this.products[product] !== undefined) {
            this.products[product] += quantity;
            this.logMessage(`${quantity}ta ${product} qabul qilindi!`);
        } else {
            this.logMessage(`${product} mahsuloti topilmadi!`);
        }
    }
}

// Foydalanish namunasi
const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq()); // Hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
shop.sotish('non', 3); // Hozir 20:41da 3ta non sotildi!
shop.qabul('cola', 4); // Hozir 20:42da 4ta cola qabul qilindi!
console.log(shop.qoldiq()); // Hozir 20:43da 1ta non, 5ta lagmon va 6ta cola mavjud!