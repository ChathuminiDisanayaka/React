import {Link} from "react-router-dom";

const NotFound = ()=>{
    return(
    <div className="not-found">
        <h2>Sorry</h2>
        <Link to='/'>Go Back to the home page....</Link>
    </div>
    )
}
export default NotFound;