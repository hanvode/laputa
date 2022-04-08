// var animals = [
//     {name: 'dog' , count: 3},
//     {name: 'cat' , count: 2},
//     {name: 'bird' , count: 9},
//     {name: 'caw' , count: 1},
// ]
// // Array.prototype.filter2  = function(callback){
// //     var result = []
// //     for (var index in this){
// //         if(callback(this[index],index,this)){
// //             result.push(this[index],index,this)
// //     }}
// //     return result
// // }
// // Array.prototype.find2  = function(callback){
// //     var result 
// //     for (var i = 0;i<this.length;i++){
// //         if(callback(this[i])){
// //             result = this[i]
// //             break
// //         } else {
// //             continue
// //         }
// //     }
// //     return result
// // }
// // console.log(Number(0))
// // animals.forEach(function(animal){
// //     var obj = {}
// //     obj[animal.name] = animal.count
// //     console.log(obj)
// // })
// // animals.forEach(function(animal){
// //     console.log(animal)
// // })
// // var isNotSingle =  animals.every(function(animal,inde){
// //     return animal.count > 4;
// // })
// // console.log(isNotSingle)
// // var isNotSingle =  animals.some(function(animal,inde){
// //     return animal.count > 2;
// // })
// // console.log(isNotSingle)
// // var loai =  animals.filter2(function(animal){
// //     return animal.count > 2;
// // })
// // console.log(loai)
// // function getRequestBodyFromValues(formValues) {
// //     return formValues.forEach(function(phanTu){
// //         for (var key,value in phanTu){
// //             obj[phanTu.key] = phanTu.value
// //         }
// //     })
   
// // }

// // console.log(getRequestBodyFromValues(animals))
// var arry = [1,2,3,4]
// var arr = 'love you so much'
// var input = ['love you','so much']
// // var result = input.includes('yo', 0)
// // if (input.includes("yo") > 0 ){
// //     result =  true
// // } else {
// //     result =  false
// // }
// // Array.prototype.reduce2 = function(callback,result){
// //     var i = 0
// //     if(arguments.length<2){
// //         i=1
// //         result = this[0]
// //     }
// //     for (; i< this.length ; i++){
// //         result = callback(result,this[i],i,this)
// //     }
// //     return result
// // }

// // var kqcuoi= arry.find2(function(params) {
// //     return params ==2
// // })
// // console.log(kqcuoi)
// // Array.prototype.reduce2 = function(callback, result){
// //     var i=0
// //     if (arguments.length<2){
// //         i = 1
// //         result =this[0]
// //     }
// //     for (;i<this.length;i++){
// //         result = callback(result, this[i], i , this)
// //     }
// //     return result
// // }
// // console.log(arry.reduce2((u,v)=>u+v))
// // Array.prototype.multiplyNumbers = function(callback,result){
// //     var i = 0
// //     result = 1
// //     if (arguments.length<2){
// //         i=1
// //         result = this[0]
// //     }
// //     for ( ;i<this.length;i++){
// //         result = callback(result,this[i],i,this)
// //     }
// //     return result
// // }
// // multiplyNumbers = function(arr){
// //     return arr.reduce((u,v)=>u*v,1)
// // }
// // console.log(multiplyNumbers(arry))
// // Array.prototype.forEach2 = function(callback){
// //     var result = []
// //  //   for (var i=0; i <this.length;i++){
// //  //     result.push(callback(this[i]))
// //  //   }
// //     for (var ptu in this){
// //         result.push(callback(ptu))
// //     }
    
// // }
// // console.log(Array.prototype)
// // input.forEach2(function(params) {
// //     console.log(params)
// // })
// var f8LinkElement = document.querySelector('a')
// var f8ShortLink = f8LinkElement.getAttribute('href')
// var a_2 = document.querySelector('a + a')


// var the_div = document.querySelector('div')

// class Hinh{
//  constructor(canh ){
//      this.canh = canh
//  }
// }

// class Vuong extends Hinh {
//     constructor(canh,dienTich, chuVi){
//         super(canh)
//         this.dienTich = canh*canh
//         this.chuVi = canh*4
//     }
// }
// var example = new Vuong(5)
// console.log(example)