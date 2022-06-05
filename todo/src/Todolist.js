export const Todolist = ({taskar, deletetask}) =>{
    <div className='output'>
          {taskar.map(task=>{
            return (<>
            
            <p id = {taskar.id} ><input type = "checkbox"></input>{taskar.name} &nbsp; &nbsp; &nbsp; <button onClick={()=>deletetask(task.id)}>delete</button></p>
            </>);
          })}
        </div>
}