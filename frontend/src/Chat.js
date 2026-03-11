import { useState } from "react"
import axios from "axios"

function Chat(){

const [question,setQuestion]=useState("")
const [answer,setAnswer]=useState("")

const ask=async()=>{

const res=await axios.post(`http://localhost:8000/chat?question=${question}`)

setAnswer(res.data.answer)

}

return(

<div>

<h2>Research AI Assistant</h2>

<input
value={question}
onChange={(e)=>setQuestion(e.target.value)}
/>

<button onClick={ask}>Ask</button>

<p>{answer}</p>

</div>

)

}

export default Chat