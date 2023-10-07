// const { forEach } = require("cypress/types/lodash")

// const { parseXML } = require("cypress/types/jquery")

//use let
let aVariable
aVariable=25
console.log(aVariable)

//print array values using foreach
let numberArr=[1,2,44,23,87]
numberArr.forEach((n,index,numberArr)=>{
    console.log("array for "+index+" position element "+n)
})

//only var can be reassigned amoung var,let and const
var a=2
var a=3
console.log("var reassign worked = "+a)
// let b=2
// let b=3
// console.log(a)


//find data type of variable
let aCommonVar='abcder'
console.log("Data type is "+typeof(aCommonVar))
let aCommonVar2=44
console.log("Data type is "+typeof(aCommonVar2))
let aCommonVar3=true
console.log("Data type is "+typeof(aCommonVar3))
let aCommonVar4
console.log("Data type is "+typeof(aCommonVar4))

//array
let arrVar=['1','g','dfg','12124','c','awew','34']
console.log("array element 2nd "+arrVar[2])
arrVar.push('lastElem')
console.log("All array element "+arrVar)
arrVar.pop('lastElem')
console.log("All array element "+arrVar)
arrVar.unshift('firstElem')
console.log("All array element "+arrVar)
console.log("Is array contains '1' element = "+arrVar.includes('1'))

//subarray
arrVar.slice(1,3)
console.log("All sliced array element "+arrVar.slice(1,4))

//sort
console.log("All sorted array element "+arrVar.sort())

var numberArr2=[1,55,76,32,90,2,3,11,20,50,59]
numberArr2.sort()
console.log("Sorted number array "+numberArr2)

//TODO check what kind of sort
var numberArr3=[1,55,76,32,90,2]
numberArr3.sort(function(a,b){
    return a-b

})
console.log("Sorted -added- number array "+numberArr3)
//filter even numbers
let numberArr4=numberArr3.filter(AnArrElem=>AnArrElem%2==0)
console.log("filter even number array "+numberArr4)

var numberArr5=[1,55,76,32,90,2,3,11,20,50,59]
 numberArr5=numberArr5.filter(AnArrElem=>AnArrElem>10 && AnArrElem<60).sort()
console.log("filter between 10 and 60 number array "+numberArr5)


//functions
//1st way
function add2Numbers(a,b){
    return a+b
}


let sum=add2Numbers(44,6)
console.log("Sum is "+sum)
//2nd way
let sum1=function(a,b){
    return a+b
}
 sum1=sum1(2,6)
console.log("Sum is "+sum1)
//3rd way
let sum2=(a,b)=>a+b
sum2=sum2(2,7)
console.log("Sum is "+sum2)

//var is global scope and let has only local / block scope
var sum5
for(sum5=1;sum5<3;sum5++){
    console.log(sum5)
}

//string fns
let strVar="hello world  world1"
console.log("2nd element "+strVar[1])
console.log("index of  'l' element= "+strVar.indexOf('l'))
console.log("index of 'l 'element after 5th position= "+strVar.indexOf('l',5))
console.log("index of world element "+strVar.indexOf('world1'))
console.log("slice array "+strVar.slice(0,5))

let strVar2="hello world"
strVar2=strVar2.split(' ')
console.log("strVar2 splited element = "+strVar2)
console.log("type of splited array = "+typeof(strVar2))


//string to integer
let strVar3="23"
let intVar=parseInt(strVar3)
console.log("intVar = "+intVar)
console.log("intVar type is = "+typeof(intVar))

//JS object
let person={
    firstname:"Antony",
    MiddleName:"Graijo",
    LastName:"Joy"
}
console.log("Print middle name of person object "+person.MiddleName)
//assign values to property
person.firstname="Don"
console.log(person)

//delete property
delete person.firstname
console.log(person)


for(let key in person){
    
    console.log(Object(key))
}

//function in JS object
let person1={
    firstname:"Antony",
    MiddleName:"Graijo",
    LastName:"Joy",
    fullName:function(){
        console.log(this.firstname+this.MiddleName+this.LastName)
    }

}
console.log(person1)


//class
class class1{
   console.log("abc")
    age=25
    get location(){
        return "Jamaica"
    }
    constructor(firstname1,LastName1){
        this.firstname1=firstname1
        this.LastName1=LastName1
    }
    fullNamePrint(){
        console.log("function call = "+this.firstname1+" "+this.LastName1)
    }
}
let class1Obj=new class1("abc","defg")
console.log(class1Obj.age)
class1Obj.fullNamePrint()
// Export this module
//   module.exports=class1
// export default class1