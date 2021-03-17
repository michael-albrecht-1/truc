import firebase from "../utils/firebaseConfig";

export type Beer = {
  id: string,
  name: string,
  style: string,
  brewery: string
};


const makeBeer = (id: string, remoteBeer: any): Beer => {
  return {
    id,
    name: remoteBeer.name,
    style: remoteBeer.style,
    brewery: remoteBeer.brewery
  }
};



const isBeer = (beer: any): beer is Beer => {

  const predicates = [
    () => typeof beer === "object",
    () => typeof beer?.id === "string",
    () => typeof beer?.name === "string"
  ];

  return predicates.every((predicate) => predicate());
}


const beerService = {

  findAll: (): Beer[] => {
    const beersDB = firebase.database().ref("beersDB");
    let list: Beer[] = [];
    beersDB.on("value", (snapshot) => {
      let previousList = snapshot.val();
      for (let id in previousList) {
        list.push(makeBeer(id, previousList[id]));
      }
    });
    return list;
  },

  findById: (idParam: string): Beer => {
    const beersDB = firebase.database().ref("beersDB");
    let beer;
    beersDB.on("value", (snapshot) => {
      let previousList = snapshot.val();
      for (let id in previousList) {
        if ((id = idParam)) {
          beer = makeBeer(id, previousList[id]);
        }
      }
    });
    if (!isBeer(beer)) {
      throw new Error("Beer not found");
    }
    return beer;
  },

  delete: (id: string) => {
    let beerDB = firebase.database().ref("beersDB").child(id);
    beerDB.remove();
  },

  add: (name: string, style: string, brewery: string) => {
    const beersDB = firebase.database().ref("beersDB");

    beersDB.push({ name, style, brewery });
  },

  update: (id: string, beer: object): void => {
    let beerDB = firebase.database().ref("beersDB").child(id);

    beerDB.update(beer);
  },
};

export default beerService;
