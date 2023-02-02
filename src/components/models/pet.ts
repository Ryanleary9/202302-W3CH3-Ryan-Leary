type Pet = {
  id: string;
  name: string;
  breed: string;
  isAdopted: boolean;
  dueño: string;
};

export class petList implements Pet {
  public id: string;
  public isAdopted: boolean;
  static generateId() {
    const newID = new Uint32Array(1);
    crypto.getRandomValues(newID);
    return ('000000' + newID[0]).slice(-6);
  }
  constructor(public name: string, public breed: string, public dueño: string) {
    this.id = petList.generateId();
    this.isAdopted = false;
  }
}
