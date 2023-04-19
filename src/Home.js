import {useState,useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

//arrow functions
const Home = () => {

    // const [name,setName] = useState('mario');
    // const [age,setAge] = useState('25');
    // const [blogs,setBlogs] = useState([
    //     {title:'A',body:'B',author:'C',id:1},
    //     {title:'A',body:'B',author:'C',id:2},
    //     {title:'A',body:'B',author:'C',id:3},
    // ])
    // const [blogs,setBlogs] = useState(null)
    // const [isPending,setIsPending] = useState(true)
    // const [error,setError]=useState(null);
    // const handleClick = () => {
    //     setName('luvi');
    //     setAge(30);
    // }
    // const handleClickAgain = (name) => {
    //     console.log("Hello" + name);
    // }

    // const [name,setName]=useState('naro')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id!==id)
    //     setBlogs(newBlogs);
    // }

    // useEffect(()=> {
    //     console.log('use effect');
    //     console.log(name);
    // },[name]);

    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {/*<h2>Home</h2>*/}
            {/*<p>{ name } is {age} years old</p>*/}
            {/*<button onClick={handleClick}>Click me</button>*/}
            {/*{blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}*/}
            { error && <div>{error}</div> }
            { isPending && <div>loading....</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            {/*<button onClick={()=>setName('lugi')}>Change</button>*/}
            {/*<p>{name}</p>*/}
        </div>
    );
}

export default Home;