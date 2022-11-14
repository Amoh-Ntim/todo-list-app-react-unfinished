import React, { useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa'

function Example() {
  const [items, setItems] = useState([
    
    { id: 5,
      value: 3,
      name: 'Mike'
    },
    
    {
      id: 8,
      value: 7,
      name: 'Mike'
    
    },

    {
      id: 6,
      value: 9,
      name: 'Mike'
    
    }
    ]);


  return (
    <main>
      <ul>
        {items.map((value)=> (
          <li key={value.id}>
            <h1>{value.value}</h1>
            <FaTrashAlt role="button" />
          </li>
        ))}
        
      </ul>
    </main>
  );
}

export default Example