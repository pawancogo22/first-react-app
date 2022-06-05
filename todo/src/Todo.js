export const Todo = ({text, addTask, taskvaluechange}) =>{
    <>
        <div className='input'>
         <input type="text"  value = {text} placeholder="enter your todo" onChange={e=>{
            taskvaluechange(e.target.value);
          }}/> 

          <button onClick={()=>{
            addTask();
          }}>add</button>
        </div>
    </>
};
