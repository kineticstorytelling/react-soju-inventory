import {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'
import Logo from '../assets/images/soju_logo.png'
import '../styles.css'


function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    
    const signOutOnClick = () => {
        signOut(auth)
        // nothing happens after so we do this:
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if (response.user){
            location.reload();
        }
    }

    const dropDown = () =>{
        setIsVisible(!isVisible)
    }

    const clicked = () =>{
        setIsVisible(false)
    }

    return (
    <nav className="container mx-auto px-4  flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6 p-4">
           <Link to='/'><img className="soju_logo" src={Logo} alt="soju logo" /></Link>
        </div>
        <div className="block px-5">
            <button 
                onClick={dropDown}
                className="flex items-center px-3 py-2 text-yellow-900 
                border rounded border-yellow-900 
                hover:text-indigo-400 hover:border-indigo-400">
                <i className='fas fa-bars'></i>
            </button>
        </div>
        {isVisible ?(
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg flex-grow">
                    <Button className="nav_item p-5 m-5">
                        <div>
                            <Link to='/' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-yellow-800'>
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button className="nav_item p-5 m-5 ">
                        <div>
                            <Link to='/about' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-yellow-800'>
                                About
                            </Link>
                        </div>
                    </Button>
                    <Button className="nav_item p-5 m-5 ">
                        <div>
                            <Link to='/contact' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-yellow-800'>
                                Contact
                            </Link>
                        </div>
                    </Button>
                    <Button className="nav_item p-5 m-5 ">
                        <div>
                            <Link to='/dashboard' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-yellow-800'>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                    {/* Login auth button */}
                    {
                        !auth.currentUser ? 

                        <Button className='nav_item p-5 m-5'>
                            <div>
                                <Link to="/" onClick={ () => {signInOnClick()}} className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-black hover:text-yellow-800">
                                    Log in
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className='nav_item p-5 m-5'>
                            <div>
                                <Link to="/" onClick={ () => {signInOnClick()}} className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-black hover:text-yellow-800">
                                    Log Out
                                </Link>
                            </div>
                        </Button>
                    }
                </div>
            </div>
        ): (<></>
        )}
    </nav>  
    )
}

export default Navbar