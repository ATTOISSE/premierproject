function List({usersList,removeUser}) {
    console.log(usersList);
    
    return(
        <table className="table table-bordered mt-3 col-6">
            <thead>
                <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Age</th>
                <th>Action</th></tr>
            </thead>
            <tbody id="">
            {
                usersList.map((user,index)=>(
                    
                    <tr key={index}>
                        <td> {user.id} </td>
                        <td> {user.nom} </td>
                        <td> {user.prenom} </td>
                        <td> {user.age} </td>
                       <td><button className="btn btn-warning mx-3">Modifier</button>
                        <button className="btn btn-danger" onClick={()=> removeUser(user.id)}>Supprimer</button></td> 
                    </tr>
                    
                ))
            }
            </tbody>
        </table>
    )
}

export default List