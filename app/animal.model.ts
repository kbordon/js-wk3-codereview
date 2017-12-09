export class Animal {
  // TODO perhaps expand later to include image of animal, names of caretakers, medical conditions, and special notes
  public animalImg:string ="";
  constructor(public species:string, public name:string, public age:number, public sex:string, public diet:string, public location:string, public caretakers:number, public likes:string, public dislikes:string, public hasImg:boolean){
    if (hasImg === true){
      this.animalImg = `resources/img/${name.toLowerCase().replace(/\s/g,'')}.jpg`;
    }
  }
}
