let globalArray = [];
let globalArray1 = [];    
let globalArray2 = [];    
let globalArray3 = [];

const arrMinValue = 0;
const arrmaxValue = 100;

const arr1LowLimit = 0;
const arr1HightLimit = 30;

const arr2LowLimit = 31;
const arr2HightLimit = 60;

const arr3LowLimit = 61;
const arr3HightLimit = 100;

function generateArray() {
    //debugger;
    let arrLength = +document.getElementById('validationCustom01').value;

    // Check if value is number or not
    if(isNaN(arrLength) || arrLength <= 0) {  // Return true if value is not a number
        alert('Invalid Value');
        return;
    }

    globalArray = [];

    for(let i = 0;i < arrLength;i++) {
        globalArray[i] = arrMinValue + (Math.floor(Math.random() * arrmaxValue) - arrMinValue);
    }

    printOriginalArray();
}

function printOriginalArray() {
    removeArrayElement();
    showArray('{Original}',globalArray);
}

function printSortedUpArray() {
    removeArrayElement();
    showArray('{Sorted Up}',sortUp(globalArray));
}

function printSortedDownArray() {
    removeArrayElement();
    showArray('{Sorted Down}',sortDown(globalArray));
}

function clearArray() {
    globalArray = [];
    removeArrayElement();
    showArray('{Empty}',globalArray);
}

function showArray(arrayName,array) {
    const arraySectionElement = document.getElementById('array-section');

    // Add Div elements
    arraySectionElement.innerHTML += `<p id="array">Array${arrayName}[${array}];</p>`
}

function showSplitedArrays() {
    removeArrayElement();
    
    prepareSplitedArrays(globalArray);
    showArray('{Original}',globalArray);    
    showArray('{'+arr1LowLimit+'-'+arr1HightLimit+'}',globalArray1);    
    showArray('{'+arr2LowLimit+'-'+arr2HightLimit+'}',globalArray2);    
    showArray('{'+arr3LowLimit+'-'+arr3HightLimit+'}',globalArray3);    
}

function removeArrayElement() {
    // Removing all 'array' elements if exist
    while(document.getElementById('array')) {
        let arrayElement = document.getElementById('array');
        arrayElement.remove();
    }
}

function sortUp(array) {
    // debugger;
    if(array.length == 0) {
        alert("No Arguments To Sort !!!");
        return;
    }
    else {
        let tempArr = [...array];
        let sortedArray = [];
        
        for(let i = 0;i < array.length;i++) {
            let minVal = Math.min(...tempArr);
            sortedArray[i] = minVal;
            tempArr[tempArr.indexOf(minVal)] = Infinity;
        }

        return sortedArray;
    }
}

function sortDown(array) {
    //debugger;
    if(array.length == 0) {
        alert("No Arguments To Sort !!!");
        return;
    }
    else {
        // Copy Arguments to sorted Array
        let tempArr = [...array];
        let sortedArray = [];
         
        for(let i = 0;i < array.length;i++) {
            let maxVal = Math.max(...tempArr);
            sortedArray[i] = maxVal;
            tempArr[tempArr.indexOf(maxVal)] = -Infinity;
        }

        return sortedArray;
    }
}

function prepareSplitedArrays(array) {
    //debugger;
    for(let i = 0;i < array.length;i++) {
        if(array[i] >= arr1LowLimit && array[i] <= arr1HightLimit) {
            globalArray1.push(array[i]);
        }
        else if(array[i] >= arr2LowLimit && array[i] <= arr2HightLimit) {
            globalArray2.push(array[i]);
        }
        else if(array[i] >= arr3LowLimit && array[i] <= arr3HightLimit) {
            globalArray3.push(array[i]);
        }
    }   
    globalArray1 = [...sortUp(globalArray1)];
    globalArray2 = [...sortUp(globalArray2)];
    globalArray3 = [...sortUp(globalArray2)];
    
}

function togleDisplayDarkLightMode() {
    let bodyElement = document.body;
    let headerElement = document.getElementById('header-dark-mode');
    let formElement = document.getElementById('form-dark-mode');
    let arrayElement = document.getElementById('array-dark-mode');
    let DarkSvgiconElement = document.getElementById('icon-dark-mode');
    
    // Body Element update Dark/Light mode
    bodyElement.classList.toggle("bg-dark");

    // Header Element update Dark/Light mode
    headerElement.classList.toggle("bg-dark");
    headerElement.classList.toggle("text-white");
    
    // Form Element update Dark/Light mode
    formElement.classList.toggle("text-white")

    // Array Element update Dark/Light mode
    arrayElement.classList.toggle("text-white")

    // Display mode icon Element update Dark/Light mode
    DarkSvgiconElement.classList.toggle("icon-dark");
}
