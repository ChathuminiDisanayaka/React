import {useState} from "react";
import BlogList from "./BlogList";

//arrow functions
const Home = () => {

    // const [name,setName] = useState('mario');
    // const [age,setAge] = useState('25');
    const [blogs,setBlogs] = useState([
        {title:'A',body:'B',author:'C',id:1},
        {title:'A',body:'B',author:'C',id:2},
        {title:'A',body:'B',author:'C',id:3},
    ])

    // const handleClick = () => {
    //     setName('luvi');
    //     setAge(30);
    // }
    // const handleClickAgain = (name) => {
    //     console.log("Hello" + name);
    // }

    return (
        <div className="home">
            {/*<h2>Home</h2>*/}
            {/*<p>{ name } is {age} years old</p>*/}
            {/*<button onClick={handleClick}>Click me</button>*/}
            <BlogList blogs={blogs} title="All Blogs!"/>
        </div>
    );
}

export default Home;