// 1. What is the Big O for this?
// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

function findDog(dog){
    return dog
}
//---> Constant time O(1) runtime complexity

// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

function findDog(array){
    let dog = array[0], ticks = 1;
    for (let i = 1; i < array.length; i++) {
        ticks++;
        if (array[i] == dog) {
            return {
                result: min,
                ticks: ticks
            }
        }
    }
}

//---> Linear time O(n)

// 2. Even or odd
// What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
//---> Constant time O(1) runtime complexity

// 3. Are you here?
// What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
//---> O(a*b) --> Linear time O(n)

// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
//---> Linear time O(n)

// 5. Naive search
// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//---> Linear time O(n)

// 6. Creating pairs:
// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

//---> O(n^2) Polynomial time O(n^k) or Quadratic. Requires 2 levels of looping over an input.


// 7. Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

//---> Linear time O(n). Requires one level of looping over an input.

// 8. An efficient search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

//---> Logarithmic time O(log(n))
// Each time through the while loop, we cut the size of the problem by half, so huge runtime does not increase by a whole lot although the size of the input may increases significantly.

// 9. Random element
// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


//--> Algorithms with linear time complexity (O(n)) have running times that are directly proportional to the size (n) of the input.


// 10. What Am I?
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}


//--> This function checks if input is a prime number. Algorithms with linear time complexity (O(n)) have running times that are directly proportional to the size (n) of the input.

// 11. Tower of Hanoi

function printMove(start, end){
    console.log(start,'to',end)
   }
 
 function hanoi(n, start, end){
 
 if (n ==1){
   printMove(start,end)
 }
 else {
  let other = 6 - (start+end)
 
 return hanoi(n-1,start, other)+
     printMove(start,end)+
     hanoi(n-1, other, end)
 } 
 }