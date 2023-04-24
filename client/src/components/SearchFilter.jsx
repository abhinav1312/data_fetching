import React, {useRef, useState} from 'react'
import QueryList from './query.js'
import axios from 'axios'

const SearchFilter = () => {
  // console.log(QueryList);
  const formRef = useRef();
  const [task, setTask] = useState(null);
  const [query, setQuery] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const handleBtnClick = (e) => {
    setTask(e.target.name);
    setDropdown(false);
    setQuery(e.target.innerHTML);
    // formRef.current.submit();
  }

  const handleQuerySubmit = async (e) =>{
    e.preventDefault();
    console.log("Task: ", task);
    // const {data} = await axios.get(`/${task}`);
    // console.log(data);
  }
  return (
    <div className='max-w-5xl mx-auto'>
        <form ref={formRef} className='flex flex-col' onSubmit={handleQuerySubmit}>
          <div className='text-2xl'>Search the queries</div>
            <input className='p-2 border outline-0' type='text' name='query' value={query} placeholder="Search for a query" onClick={()=>setDropdown(!dropdown)}/>
            {
              dropdown &&

              <div className='px-4 flex flex-col items-start justify-start bg-gray-300'>
            {
              QueryList.map((query, id)=>{
                return(
                  <button key={id} onClick={handleBtnClick} className='p-2 text-xl w-full px-0 text-justify border-b-2 hover:bg-gray-400 transition-all' name={query.btnValue}>{query.htmlValue}</button>
                  )
                })
              }
            </div>
              }
        </form>
    </div>
  )
}

export default SearchFilter
