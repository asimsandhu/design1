import { useState } from "react"

const Addtask = ({onAdd}) => {
  const [school,setschool]=useState(' ');
  const [user_name,setuser_name]=useState(' ');
  const [user_id,setuser_id]=useState(' ');

  const onsubmit=(e)=>{
    e.preventDefault()
    if(!school){
      alert('please enter school')
    }
    onAdd(   {school,user_name,user_id}   )
    setschool('')
    setuser_name('')
    setuser_id('')
  }
  return (
    <form onSubmit={onsubmit}>

  <div className="form-group">

    <label for="exampleInputEmail1">school</label>
    <input  className="form-control" onChange={(e)=>setschool(e.target.value)} value={school} />
    
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">name</label>
    <input  className="form-control" onChange={(e)=>setuser_name(e.target.value)} value={user_name} />
    
  </div>
  <div className="form-group">

    <label for="exampleInputEmail1">id</label>
    <input  className="form-control" onChange={(e)=>setuser_id(e.target.value)} value={user_id} />
    
  </div>
  
  
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <input type="submit" className="btn btn-primary"/>
</form>
  )
}

export default Addtask