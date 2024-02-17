// get triengle vlaue 
function triangleArea (){
    const triangleAreainput = document.getElementById('triangle-base');
    const triangleBaseText = triangleAreainput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    // get height vlaue 
    const calculateheightinput = document.getElementById('triangle-height');
    const triangleHeightText = calculateheightinput .value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // calculate triangleArea 
    const area = 0.5 * base * height;
    console.log('Area of the triwngle is:', area);

    // Display triangle area 
    const triangleAreaSpan = document.getElementById('triangle-Area');
    triangleAreaSpan.innerText = area;
    
}

// Ractangle area 

function calculateRactangleArea(){
    // ractangle width input 
    const ractangleAreaInput = document.getElementById('ractangle-width');
    const widthText = ractangleAreaInput.value;
    const width = parseFloat(widthText);
    console.log(width);
    
    // rantangle length input 

    const ractangleLengthAreaInput = document.getElementById('ractangle-length');
    const langthText = ractangleLengthAreaInput.value;
    const length = parseFloat(langthText);
    console.log(length);

    // claculate ractangle area 
    const area2 = width * length;
    console.log('this is a ractangle area',area2);

    // display ractangle 

    const ractangleAreaSpan = document.getElementById('ractangle-Area');
    ractangleAreaSpan.innerText = area2;
    

    
}

// parallelogram area 
function calculateParallelogramArea(){
    const ParallelogramAreaInput = document.getElementById('parallelogram-width');
    const parallelogramText = ParallelogramAreaInput.value;
    const base = parseFloat(parallelogramText);
    console.log(base);
// height parallelogram area
    const parallelogramHeightInput = document.getElementById('parallelogram-length');
    const heightText = parallelogramHeightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    // calcute parallelogram 

    const area = base * height;
    console.log(area);

    // disply parallelogram
    const parallelogramspan = document.getElementById('parallelogram-area');
    parallelogramspan.innerText = area;
}


// ebabe kora jai man paower jonno 
// function calculateRhombusleArea(){
// const d1 = getRomboshd1();
// console.log(d1);
// }

// function getRomboshd1(){
//     const romboshInput = document.getElementById('Rhombus-d1');
//     const romboshText = romboshInput.value;
//     const d1 = parseFloat(romboshText);
//     return d1;
// }


// Rombush area 
// eta improtant ebebe korle sobida
function calculateRhombusArea(){
    // input section :1
    const base = getInputValueById('Rhombus-d1')
    console.log('Rombus value', base);
// input section :2
    const height =getInputValueById('Rhombus-d2');
    console.log('height er value', height);

    // calculate area 
    const area = 0.5 * base * height;
    console.log(area);

    setInnerTextById('Rhombus-Area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


// Ellipse-Area 
// ebabe kora jai claculate shotcat poddoti 
function calculateEllipseArea(){
    const ellipsWidth = getInputValueById('Ellipse-width');
    const ellipsLength = getInputValueById('Ellipse-length');
    const area = 3.14 * ellipsWidth * ellipsLength;
    setInnerTextById('Ellipse-Area', area);
}