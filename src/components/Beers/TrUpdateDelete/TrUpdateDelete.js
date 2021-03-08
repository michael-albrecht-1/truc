import React, {useState} from "react";
import firebase from "../../../utils/firebaseConfig";
import './TrUpdateDelete.css';

const TrUpdateDelete = ( {beer} ) => {
    const [update, setUpdate] = useState(false);
    const [nameUpdate, setNameUpdate] = useState(null);
    const [styleUpdate, setStyleUpdate] = useState(null);
    const [breweryUpdate, setBreweryUpdate] = useState(null);

    const updateItem = () => {
        let beerDB = firebase.database().ref('beersDB').child(beer.id);
        if (nameUpdate != null) {
            beerDB.update({
                name: nameUpdate
            })
        }
        if (styleUpdate !== null) {
            beerDB.update({
                style: styleUpdate
            })
        }
        if (breweryUpdate !== null) {
            beerDB.update({
                brewery: breweryUpdate
            })
        }
        setUpdate(false);
    }

    const deleteItem = () => {
        // pointer id de l'élement à delete
        let beerDB = firebase.database().ref("beersDB").child(beer.id);
    
        beerDB.remove();
      };

    return ( 
        <tr className="truc">
            {
                update === false && (
                    <>
                        <td>{beer.name}</td>
                        <td>{beer.style}</td>
                        <td>{beer.brewery}</td>
                        <td> 
                            <button onClick={() => setUpdate(true)}>&#9998;</button>
                            <button onClick={deleteItem}>&#128465;</button>
                        </td>
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
                                onChange={(e) => setNameUpdate(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                defaultValue={beer.style}
                                onChange={(e) => setStyleUpdate(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                defaultValue={beer.brewery}
                                onChange={(e) => setBreweryUpdate(e.target.value)}
                            />
                        </td>
                        <td> 
                            <button onClick={() => setUpdate(false)}>&#10005;</button>
                            <button onClick={updateItem}>&#10004;</button>
                        </td>
                </>
                )
            }
        </tr> 
    );
}
 
export default TrUpdateDelete;