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
}



