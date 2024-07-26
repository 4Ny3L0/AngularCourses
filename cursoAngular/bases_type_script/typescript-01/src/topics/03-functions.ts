function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 4
) {
  if (!secondNumber) {
    return firstNumber * base;
  }
  return firstNumber * secondNumber * base;
}
// const result: number = addNumbers(10, 90);
// const result2: string = addNumbersArrow(10, 9);
// const multiplyResult: number = multiply(3,3);

// // console.log({ result });
// // console.log({ result2 });
// console.log({ multiplyResult, result, result2 });
// console.log({ multiplyResult});
interface Hero {
    name: string,
    hp: number,
    alter_ego:string,
    showHeroInfo :()=> void
}

const healHero = (hero:Hero, life:number)=>{
    hero.hp += life;
}


const ghostRider: Hero = {
    name : 'Jhonny Blaze',
    alter_ego: 'Ghost Rider',
    hp : 10,
    showHeroInfo() {
        console.log(`Tu salud actual es ${this.hp}, ${this.name} aka ${this.alter_ego}`);
        
    },
}
healHero(ghostRider, 20)
healHero(ghostRider, 20)
ghostRider.showHeroInfo();
export {};
