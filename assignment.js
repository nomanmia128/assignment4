//1. assignment ---> 1
function cubeNamber(num){
    if(typeof num !== 'number' || num <= 0){
        return 'please enter a number';
    }
    return num * num * num;
}
const result1 = (cubeNamber(3));
// const result2 = (cubeNamber(4));
// const result3 = (cubeNamber('number'));
// const result4 = (cubeNamber(true));
// const result5 = (cubeNamber('4'));
console.log(result1);

