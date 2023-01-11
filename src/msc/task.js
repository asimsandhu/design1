import Tas from "./tas"


//const task_array=
function Fnc_task( {task_array,onDelete} ) {
    
  return (
    <>    
    { task_array.map((list)=>(<h3> <Tas task={list.school} onDelete={onDelete}/> </h3>)) }  
       </>
  )
}

export default Fnc_task