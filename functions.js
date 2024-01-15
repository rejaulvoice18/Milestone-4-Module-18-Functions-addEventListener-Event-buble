// nums = [5, 12, 89, 45, 18, 8];

// for(let i = 0; i< nums.length; i++){
//     const num = nums[i];
//     if(num % 2 == 0){
//         console.log(num, ': is even number');
//     }
//     else{
//         console.log(num*2, ': is odd number');
//     }
// }

// friends_age= [13, 17, 19, 20, 18];

// for(let i = 0; i < friends_age.length; i++){
//     const age =friends_age[i];
//     if(age % 2 == 0){
//         console.log(age, ': is even number');
//     }
//     else{
//         console.log(age*2, ': is odd number');
//     }
// }

// function evenIfy_all(nums){
//     for(let i = 0; i< nums.length; i++){
//         const num = nums[i];
//         if(num % 2 == 0){
//             console.log(num, ': is even number');
//         }
//         else{
//             console.log(num*2, ': is odd number');
//         }
//     }
// }


function evenIfy_all(num){
    var result;
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num*2;
    }
    return result;
}

function evenIfy(nums){
    var even_array = []
    for(let i = 0; i< nums.length; i++){
        const num = nums[i];
        var result = evenIfy_all(num);
        even_array.push(result);
    }
    return even_array;
}


function evenIfy2(num){
    var result;
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num * 2;
    }
    return result;
}

function evenIfyAll2(nums){
    const even_array = [];
    for(let i = 0; i<nums.length; i++){
        const num = nums[i];
        var result = evenIfy2(num);
        even_array.push(result);
    }
    return even_array;
}


var nums = [5, 12, 89, 45, 18, 8];

var even_number = evenIfy(nums);
console.log(even_number);


friends_age= [13, 17, 19, 20, 18];
// evenIfy_all(friends_age);


// var even_number2 = evenIfy2(nums);
// console.log(even_number2);
function evenNumb(num2){
    let result = 0;
    if(num2 % 2 == 0){
        result = num2;
    }else{
        result = num2 * 2;
    }
    return result;
}

function evenMachine(num){
    let storeEven = [];
    for(let i = 0; i < num.length; i++){
        const singleNum = num[i];
        let result = evenNumb(singleNum);
        storeEven.push(result);
    }
    return storeEven;
}

const resultOfEven = evenMachine([30, 4, 5, 9, 50]);

console.log(resultOfEven);