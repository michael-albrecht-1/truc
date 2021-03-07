import React, {useState} from "react";
import firebase from "../../../utils/firebaseConfig";
import './UpdateDelete.css';


const UpdateDelete = ( {beer} ) => {
    const [update, setUpdate] = useState(false);
    const [nameUpdate, setNameUpdate] = useState(null);
    const [styleUpdate, setStyleUpdate] = useState(null);
    const [breweryUpdate, setBreweryUpdate] = useState(null);
    console.log("beer : " + beer.id);

    const updateItem = () => {
        let beer = firebase.database().ref('beersDB').child(beer.id);
        if (nameUpdate != null) {
            beer.update({
                name: nameUpdate
            })
        }
        if (styleUpdate !== null) {
            beer.update({
                style: styleUpdate
            })
        }
        if (breweryUpdate !== null) {
            beer.update({
                brewery: breweryUpdate
            })
        }
        setUpdate(false);
    }

    const deleteItem = () => {
        // pointer id de l'élement à delete
        let beer = firebase.database().ref("beersDB").child(beer.id);
    
        beer.remove();
      };

    return ( 
        <tr>
            {
                update === false && (
                    <>
                        <td>{beer.name}</td>
                        <td>{beer.style}</td>
                        <td>{beer.brewery}</td>
                        <td> <button onClick={() => setUpdate(true)}>Modifier</button><button onClick={deleteItem}>Supprimer</button></td>
                    </>
                )
            }
            {
                update && (
                <>
                        <td>
                            <input
                                type="text"
                                defaultValue={beer.name}
                                onChange={setNameUpdate((e) => e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                defaultValue={beer.style}
                                onChange={setStyleUpdate((e) => e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                defaultValue={beer.brewery}
                                onChange={setBreweryUpdate((e) => e.target.value)}
                            />
                        </td>
                        <td> <button onClick={updateItem}>Valider</button></td>
                </>
                )
            }
        </tr> 
    );
}
 
export default UpdateDelete;