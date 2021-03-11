import React, {useState} from "react";
import firebase from "../../../utils/firebaseConfig";

const TrUpdateDelete = ( {beer} ) => {
    const [update, setUpdate] = useState(false);
    const [nameUpdate, setNameUpdate] = useState(null);
    const [styleUpdate, setStyleUpdate] = useState(null);
    const [breweryUpdate, setBreweryUpdate] = useState(null);

    const updateItem = () => {
        let beerDB = firebase.database().ref('beersDB').child(beer.id);
        if (nameUpdate != null) {
            beerDB.update({
                name: nameUpdate.toLowerCase()
            })
        }
        if (styleUpdate !== null) {
            beerDB.update({
                style: styleUpdate.toLowerCase()
            })
        }
        if (breweryUpdate !== null) {
            beerDB.update({
                brewery: breweryUpdate.toLowerCase()
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
                        <td>{beer.name.charAt(0).toUpperCase() + beer.name.slice(1)}</td>
                        <td>{beer.style.charAt(0).toUpperCase() + beer.style.slice(1)}</td>
                        <td>{beer.brewery.charAt(0).toUpperCase() + beer.brewery.slice(1)}</td>
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