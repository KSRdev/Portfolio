import Logo from './logo'
import "../css/navBar.css";


export default function NavBar() {
    return (
        <nav className='navBar flex justify-center items-center pt-4 gap-52'>
            <a href="http://">About</a>
            <a href="http://">Skills</a>
            <Logo />
            <a href="http://">Work</a>
            <a href="http://">Contact</a>
        </nav>
    );
  }