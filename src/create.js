import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title,setTitle]=useState('');
  const [body,setbody]=useState('');
  const [author,setauthor]=useState('vikas');
  const [ispending,setisPending]=useState(false);
  const history=useHistory();
  const handlesubmit=(e)=>{
    e.preventDefault();
    const blog={title,body,author}
    setisPending(true);
    fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog)
    }).then(()=>{console.log('new blog added');
    setisPending(false);
    // history.go(-1);
    history.push("/");
  })

  }
  return (
    <div className="create home">
      <h2>Add a new Blog</h2>
      <form onSubmit={handlesubmit}>
        <label>Blog Title:</label>
        <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label>Blog Body:</label>
        <textarea required value={body}  onChange={(e)=>setbody(e.target.value)}></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e)=>setauthor(e.target.value)}>
          <option value="vikas">vikas</option>
          <option value="sanju">sanju</option>
        </select>
        {!ispending && <button>Add Blog</button>}
        {ispending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;
