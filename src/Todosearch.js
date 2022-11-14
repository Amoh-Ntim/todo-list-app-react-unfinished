import { MdBookmarkBorder } from 'react-icons/md'
import { FaRecycle } from 'react-icons/fa'
import React,{ useEffect,useState } from 'react'
import'./Todosearch.css'

const Todosearch = (props) => {
    const [todos,setTodos] = useState("");
    const [list,setList] = useState([]);
    
// function to update the list items
    function handleBtn(){
      const count = 0;
      setList([
        ...list,
        {
            value: {todos},
            id:{count} + 1
            

        
        }
      ])
    
    }

    useEffect(()=>{
      
    })

    
  return (
    <div>

      <div>
       <h1 className='header'>What's your plan?</h1>
       <div className='adding'>
          <input 
           placeholder='enter task here...'
           className='input'
           value={todos}
           onChange={e=> setTodos(e.target.value)}
           />
          <MdBookmarkBorder
           role="button"
           className='add'
           onClick={handleBtn}

           />
       </div>
        
      </div> 
      <div className='task'>
        <div className='tasks'>
        {list.map((value) => (
           <li key={setList.id} className="items" >
              {todos} 
            
            
            <MdBookmarkBorder className='save'
              role= "button"
              // onClick={read}

            />                                        
            <FaRecycle className='delete'
              role= "button"
            
            />
           </li>
        ))}
      

        </div>
    
         
      </div> 


    </div>
    
  )
}

export default Todosearch
