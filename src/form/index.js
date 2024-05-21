import { useState } from "react"

function Form({addUser}) {
    const [user,setUser] = useState({nom:'',prenom:'',age:0})
      const handleUser = (e)=> {
        e.preventDefault()
        setUser(user)
        addUser(user)
        setUser({nom:'',prenom:'',age:0})
    }
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
        // console.log(new FormData(e.target));
        
    }
   return(
    <div className="container mt-3">
        <form onSubmit={handleUser}>
            <div className="card">
                <div className="card-header text-center text-white bg-info"><h3>Formulaire d'Ajout</h3></div>
                <div className="card-body">
                    <label>Nom</label>
                    <input type="text" name="nom" className="form-control" value={user.nom} onChange={handleChange}/>
                    <label>Prenom</label>
                    <input type="text" name="prenom" className="form-control" value={user.prenom} onChange={handleChange}/>
                    <label>Age</label>
                    <input type="text" name="age" className="form-control" value={user.age} onChange={handleChange}/>
                    <button type="submit" className="btn btn-primary mt-3  col-md-2 offset-5">Ajouter</button>
                </div>
            </div>

        </form>
    </div>
   ) 
}

export default Form