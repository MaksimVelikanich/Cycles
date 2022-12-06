
 const words = "Hello word";
 let string = words.split(' ').join('')
 var array = [];
 for (range in string){
   if (array[string[range]] != undefined){
     array[string[range]] ++
   }
   else{ 
     array[string[range]]=1
   }
 }
console.log(array)