function firstElement (){
    let array =  ['js', 'css', 'html'];
    alert(array[0]);
}
firstElement ();



let array = [0, 1, false, 2, undefined, '', 3, null]
let filteredArray = array.filter(Boolean);
alert(filteredArray);



let arrays = [[1,2], [1,2,3], [1,2,3,4]];
for(let i =0; i < arrays.length; i++){
    if(arrays[i].length>3){
        alert(i);
    }
}






