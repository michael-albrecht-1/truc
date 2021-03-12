import firebase from "../utils/firebaseConfig";

const beerService = {
    findAll: () => {
        const beersDB = firebase.database().ref('beersDB');
        let list = [];
        beersDB.on('value', (snapshot) => {
            let previousList = snapshot.val();
            for (let id in previousList) {
                list.push({id, ...previousList[id]});
            }
        });
        return list;
    },

    findById: (idParam) => {
        const beersDB = firebase.database().ref('beersDB');
        let result = null;

        beersDB.on('value', (snapshot) => {
            let previousList = snapshot.val();
            for (let id in previousList) {
                if (id = idParam) {
                    result = previousList[id];
                }
            }
        });
        return result;
    },

    delete: (id) => {
        let beerDB = firebase.database().ref("beersDB").child(id);
        return beerDB.remove();
    },

    add: (beer) => {
        const beersDB = firebase.database().ref("beersDB");

        beersDB.push(beer);
    }

}

export default beerService