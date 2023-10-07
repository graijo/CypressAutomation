 
 const class2New=require("./JsCmdTests2.js")
//  const class1Obj2=new class2New()
 
//  class1Obj2.print()
 class class3{
 
  // constructor(){
  //    this.class1Obj3=new class2New()
  // }
   
    callMethod(){
      this.class1Obj3=new class2New()
      this.class1Obj3.print()
    console.log("First param is "+this.class1Obj3.class2NewVar1)
  }
 }
 
 var class3Obj=new class3()
 class3Obj.callMethod()