// Step 1: Buat array dengan 100 nilai random antara 1 sampai 50
function generateRandomArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 50) + 1);
    }
    return array;
}

// Step 2: Pecah array menjadi array genap dan ganjil
function separateEvenOddIndexes(array) {
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            evenArray.push(array[i]);
        } else {
            oddArray.push(array[i]);
        }
    }
    return { evenArray, oddArray };
}

// Step 3: Hitung min, max, total, rata-rata
function findMin(array) {
    return Math.min(...array);
}

function findMax(array) {
    return Math.max(...array);
}

function findTotal(array) {
    let total = 0;
    for (let num of array) {
        total += num;
    }
    return total;
}

function findAverage(array) {
    if (array.length === 0) return 0;
    return findTotal(array) / array.length;
}

// Step 4: Bandingkan hasil dari kedua array
function compareArraysStats(evenArray, oddArray) {
    const evenMin = findMin(evenArray);
    const oddMin = findMin(oddArray);

    const evenMax = findMax(evenArray);
    const oddMax = findMax(oddArray);

    const evenTotal = findTotal(evenArray);
    const oddTotal = findTotal(oddArray);

    const evenAverage = findAverage(evenArray);
    const oddAverage = findAverage(oddArray);

    console.log(`Min lebih besar pada array genap: ${evenMin > oddMin}`);
    console.log(`Max lebih besar pada array ganjil: ${oddMax > evenMax}`);
    console.log(`Total memiliki nilai sama antara array genap dan ganjil: ${evenTotal === oddTotal}`);
    console.log(`Rata-rata lebih besar pada array ganjil: ${oddAverage > evenAverage}`);
}

// Penggunaan:
const mainArray = generateRandomArray(100);
const { evenArray, oddArray } = separateEvenOddIndexes(mainArray);

console.log('Array Utama (100 nilai):', mainArray);
console.log('Array Genap (50 nilai):', evenArray);
console.log('Array Ganjil (50 nilai):', oddArray);

console.log('Statistik Array Genap:');
console.log('Min:', findMin(evenArray));
console.log('Max:', findMax(evenArray));
console.log('Total:', findTotal(evenArray));
console.log('Rata-rata:', findAverage(evenArray));

console.log('Statistik Array Ganjil:');
console.log('Min:', findMin(oddArray));
console.log('Max:', findMax(oddArray));
console.log('Total:', findTotal(oddArray));
console.log('Rata-rata:', findAverage(oddArray));

console.log('Perbandingan:');
compareArraysStats(evenArray, oddArray);