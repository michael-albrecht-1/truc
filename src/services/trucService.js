import firebase from "../utils/firebaseConfig";

const trucService = {
  findAll: (trucDBName) => {
    const trucDB = firebase.database().ref(trucDBName);
    let list = [];
    trucDB.on("value", (snapshot) => {
      let previousList = snapshot.val();
      for (let id in previousList) {
        list.push({ id, ...previousList[id] });
      }
    });
    return list;
  },

  findById: (trucDBName, idParam) => {
    const trucDB = firebase.database().ref(trucDBName);
    let result = null;

    trucDB.on("value", (snapshot) => {
      let previousList = snapshot.val();
      for (let id in previousList) {
        if ((id = idParam)) {
          result = previousList[id];
        }
      }
    });
    return result;
  },

  delete: (trucDBName, id) => {
    let trucDB = firebase.database().ref(trucDBName).child(id);
    trucDB.remove();
  },

  add: (trucDBName, truc) => {
    const trucDB = firebase.database().ref(trucDBName);

    trucDB.push(truc);
  },

  update: (trucDBName, id, truc) => {
    let trucDB = firebase.database().ref(trucDBName).child(id);

    trucDB.update({ truc });

  },
};

export default trucService;
