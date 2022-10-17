import React from 'react'
import Continer from '../Continer/Continer'
import './InputSearch.scss'
const InputSearch = ({placeholder,setcontacts,contacts}) => {

    const handlefilter=(e)=>{
        
        const searchWord=e.target.value;
        const newValue = contacts.filter(ContactItem => ContactItem.name === ContactItem.name.toLowerCase().includes(searchWord.toLowerCase()));
        setcontacts(newValue);
        const newfilter=contacts.filter((ContactItem)=>{
          
            return ContactItem.name.toLowerCase().includes(searchWord.toLowerCase())
        });

      setcontacts(newfilter)
        

    }
  return (
    <div  className="InputSearch">
        <Continer>
    <div  className="Search">
    <form action="/action_page.php">
      <input  type="search" id="gsearch" name="gsearch"  placeholder={placeholder} onChange={handlefilter}/>
    </form>
  </div>

  </Continer>
  </div>
  )
}

export default InputSearch