import React,{useState} from 'react'


const Protect = ({myname}) => {

    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    

     function onsubmit(e){
      let data = {
        "name": name,
        "email": email
    }
      
      e.preventDefault()
      return fetch('/insertuser', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => 
      
      {
        
        console.log(data)
      }
      ); 
           
           
     }

  return (
    
    <form id='name_form' onSubmit={onsubmit}>

    <div className="form-group">
  
      <label for="exampleInputEmail1">name</label>
      <input  className="form-control" onChange={(e)=>setname(e.target.value)} value={name} />
      <label for="exampleInputEmail1">email</label>
      <input  className="form-control" onChange={(e)=>setemail(e.target.value)} value={email} />
      
    </div>
  
    
   
    
    
   
    <input type="submit" className="btn btn-primary"/>
  </form>
  )
}



export default Protect

