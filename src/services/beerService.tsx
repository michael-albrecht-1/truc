import firebase from "../utils/firebaseConfig";

const beerService = {
  findAll: () => {
    const beersDB = firebase.database().ref("beersDB");
    let list: (object)[] = [];
    beersDB.on("value", (snapshot) => {
      let previousList = snapshot.val();
      for (let id in previousList) {
        list.push({ id, ...previousList[id] });
      }
    });
    return list;
  },

  findById: (idParam: string) => {
    const beersDB = firebase.database().ref("beersDB");
    let result = null;

    beersDB.on("value", (snapshot) => {
      let previousList = snapshot.val();
      for (let id in previousList) {
        if ((id = idParam)) {
          result = previousList[id];
        }
      }
    });
    return result;
  },

  delete: (id:string) => {
    let beerDB = firebase.database().ref("beersDB").child(id);
    beerDB.remove();
  },

  add: (beer: object) => {
    const beersDB = firebase.database().ref("beersDB");

    beersDB.push(beer);
  },

  update: (id: string, beer:object) => {
    let beerDB = firebase.database().ref("beerDB").child(id);

    let res = beerDB.update({ beer });

    console.log(id);
    console.log(beer);
    console.log(res);
  },
};

export default beerService;
