interface shoes {
  size: number;
  color: string;
  show(): number;
}

const heel: shoes | null = {
  size:16,
  color: "white",
  show():number{
    return this.size
  }
}

interface shirt {
  size: number;
  color: string;
}

function func( values : shirt):shirt{
  return values;
}

console.log(heel.show())
console.log(func({size:20, color:'black'}));