import firebase from "../utils/firebaseConfig";

export type Beer = {
  id: string,
  name: string, 
  style: string,
  brewery: string
};

const beerService = {
  findAll: (): Array<Beer> => {
    const beersDB = firebase.database().ref("beersDB");
    let list: (object)[] = [];
    beersDB.on("value", (snapshot) => {
      let previousList = snapshot.val();
      for (let id in previousList) {
        list.push({ id, ...previousList[id] });
      }
    });
    return list as Array<Beer>;
  },

  findById: (idParam: string): any => {
    const beersDB = firebase.database().ref("beersDB");
    let beer;
    beersDB.on("value", (snapshot) => {
      let previousList = snapshot.val();
      for (let id in previousList) {
        if ((id = idParam)) {
          beer = previousList[id];
        }
      }
    });
    return beer;
  },

  delete: (id:string) => {
    let beerDB = firebase.database().ref("beersDB").child(id);
    beerDB.remove();
  },

  add: (name: string, style: string, brewery: string) => {
    const beersDB = firebase.database().ref("beersDB");

    beersDB.push({name, style, brewery});
  },

  update: (id: string, beer:object): void => {
    let beerDB = firebase.database().ref("beersDB").child(id);

    beerDB.update(beer);
  },
};

export default beerService;
