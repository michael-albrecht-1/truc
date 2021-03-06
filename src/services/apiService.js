const apiService = {

    findAllBeers: () => {
        
        let fetchOptions = {
            // on veut récupérer de l'information, c'est donc la méthode (ou verbe)
            // GET que l'on veut utiliser.
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };
        
        // on se branche sur le endpoint qui nous retourne la liste des catégories
        let request = fetch('http://127.0.0.1:8080/beers/', fetchOptions);
        
        // il est important de comprendre que les différents then vont s'enchaîner
        // la sortie de l'un devient l'entrée du suivant.
        // par exemple la sortie du premier deviant l'entrée du deuxieme !
        return request
            .then((res) => res.json())
        ;        
    },
    


}

export default apiService