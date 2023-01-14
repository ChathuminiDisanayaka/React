import {useState} from "react";

//arrow functions
const Home = () => {

    const [name,setName] = useState('mario');
    const [age,setAge] = useState('25');

    const handleClick = () => {
        setName('luvi');
        setAge(30);
    }
    const handleClickAgain = (name) => {
        console.log("Hello" + name);
    }

    return (
        <div className="home">
            <h2>Home</h2>
            <p>{ name } is {age} years old</p>
            <button onClick={handleClick}>Click me</button>

        </div>
    );
}

export default Home;