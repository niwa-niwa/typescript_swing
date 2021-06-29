interface shoes {
  size: number;
  color: string;
  show(): number;
}

// implemented object
const heel: shoes | null = {
  size:16,
  color: "white",
  show():number{
    return this.size
  }
}
console.log(heel.show())


interface shirt {
  size: number;
  color: string;
}

// implemented function
function func( values : shirt):shirt{
  return values;
}
console.log(func({size:20, color:'black'}));



interface bag{
  color: string;
  stack: number;
  total():number;
}

// implemented class
class C_bag implements bag{
  color;
  stack;
  constructor(co, st){
    this.color=co;
    this.stack=st;
  }
  total():number{
    return this.stack;
  }

}
const ba = new C_bag("blue", 4)
console.log(ba.total());


abstract class TotalFn{
  static brand:string = 'Prada';
  private sub_point:string = 'aaa';
  public total:number;

  constructor(num:number){
    this.total=num;
  }

  static getSubPoint():string{
    return "ccccc"
  }

  abstract getNumber():number

}

// implemented abstract class
class subTotal extends TotalFn{
  constructor(num:number){
    super(num);
  }
  getNumber(){
    return this.total;
  }
}
const abst = new subTotal(200);
console.log(abst.getNumber())
