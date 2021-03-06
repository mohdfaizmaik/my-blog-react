import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('faiz');
    const [image, setImage] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author,image };
    
        fetch('http://localhost:8000/blogs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        }).then(() => {
          console.log('new blog added');
          setIsLoading(true)
          history.push('/');
        })
      }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={  handleSubmit  }>
                <label>Blog title:</label>
                <input
                type="text"
                required
                value= {title}
                onChange={(e) => setTitle(e.target.value)}
                />
                
                <label>Blog body</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                <option value="mario">faiz</option>
                <option value="yoshi">jezos</option>
                </select>
                <label>Blog Image</label>
                <input
                type="text"
                required
                value = {image}
                onChange={(e) => setImage(e.target.value)}
                />
                { !isLoading && <button>Add Blog</button>}
                { isLoading && <button>Adding Blog..</button>}
            </form>
        </div>
     );
}
 
export default Create;