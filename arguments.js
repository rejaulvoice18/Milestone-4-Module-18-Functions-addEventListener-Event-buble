//আরগুমেন্ট হল array like object.
// ফাংশন কল করে আমরা যতগুলো ভেলু ই পাছ করিনা কেন এ্গুলা arguments keyword 
// দিয়ে ধরে তারপর যা ইচ্ছে তাই করতে পারি।
// এটা কাজ করে এই রকম = { '0': 3, '1': 5, '2': 8, '3': 9, '4': 10 }
//আরগুমেন্ট শুধু ফাংশনের ভিতরে কাজ করে। এবং আরগুমেন্টস এ push,pop, map এইগুলা কাজ করে না।
// শুধু spreed operator/three dots দিয়ে array তে রুপন্তর করে কাজ করতে হয়।
function addNumbers(num1, num2){
    var sum = 0;
    for(let i=0; i<arguments.length; i++){
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

function addNumbers2(num1, num2){
    var sum = 0;
    for(let i=0; i<arguments.length; i++){
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

function getFUllName(firstName, lastName){
    console.log(arguments);
    let fullName = '';
    for(let i = 0; i < arguments.length; i++){
        let namePart = arguments[i];
        fullName = fullName +" " + namePart;
    }
    return fullName;
}

function getFullName2(firstName, lastName){
    let fullName = "";
    for(let i = 0; i < arguments.length; i++){
        let namePart = arguments[i];
        fullName = fullName +" "+namePart;
    }
    return fullName;
}

function getFUllName2(num1, num2){
    let fullName = '';
    for(let i = 0; i< arguments.length; i++){
        const namePart = arguments[i];
        fullName = fullName + " " + namePart;
    }
    return fullName;
}

const fullName = getFUllName('Omuk', 'Songket', 'bin', 'tomuk', 'songket');
const fullName2 = getFUllName2('Asad', 'Emran', 'Meraj', 'Motiur', 'Hemel');
console.log(fullName2);
// var result2 = addNumbers2(10,20,30,80,90);
// console.log(result2);
// var result = addNumbers(3,5,8,9,10);
// console.log(result);