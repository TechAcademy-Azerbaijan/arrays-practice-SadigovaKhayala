const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var input_data = input.split(','); // ['5', '2 4 7 12 9']
//     var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
    var arr = input_data[1].split(','); // Daxil edilmiş massiv. Nümunə - ['2', '4', '7', '12', '9']
  let i;
let sum=0
let sum2=0;
temp=0;
let count=0;

for(i=0;i<arr.length;i++){
    if(arr[i]>0){
        sum=sum+arr[i]
    }}
let edediOrta=sum/i;

for(i=0;i<arr.length;i++){
    if(arr[i]>edediOrta){
        sum2=sum2+arr[i]
        count++
    }}



console.log(sum2, count)

});
