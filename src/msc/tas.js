import { FaTimes } from 'react-icons/fa'

function qwe(id){
  console.log(id);
}
function Tas( {task,onDelete} ) {
    
    return (
      <div>    <h3> {task}</h3> <FaTimes  onClick={()=>onDelete(task)} style={{color:'red',cursor:'pointer'}}/>   </div>
    )
  }
  
  export default Tas;