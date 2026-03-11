import { useState } from "react"
import axios from "axios"

function Search(){

const [query,setQuery]=useState("")
const [papers,setPapers]=useState([])

const search=async()=>{

const res=await axios.get(`http://localhost:8000/search?query=${query}`)

setPapers(res.data.papers)

}

return(

<div>

<h2>Search Research Papers</h2>

<input
value={query}
onChange={(e)=>setQuery(e.target.value)}
/>

<button onClick={search}>Search</button>

{papers.map((p,index)=>(
<div key={index}>
<h4>{p.title}</h4>
<p>{p.abstract}</p>
</div>
))}

</div>

)

}

export default Search