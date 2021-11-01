// import {Link} from 'react-router-dom';
// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <h1>Video Game credits</h1>
//             <div className="links">
//                 <Link to="/">Upload</Link>
//                 <Link to="/search" >Search</Link>
                
//             </div>
//         </nav>
//       );
// }
 
// export default Navbar;

import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Video Game credits</h1>
            <div className="links">
                <Link to="/">Upload</Link>
                <Link to="/search" >Search</Link>
                <Link to="/info">About</Link>
                
            </div>
        </nav>
      );
}
 
export default Navbar;