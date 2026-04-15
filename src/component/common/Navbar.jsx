import { Link, NavLink } from "react-router"; // Ensure you import from react-router-dom
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const Navbars = () => {
    return (
        <div className="sticky top-0 z-10  container mx-auto">
            <Navbar fluid rounded>
            
                <Link to="/" className="flex items-center">
                    <NavbarBrand as="span"> 
                        <span className="text-xl  font-bold" >
                            Book Vibe
                        </span>
                    </NavbarBrand>
                </Link>

                <div className="flex gap-3 md:order-2">
                    {/* Added type="button" to prevent form submission issues if inside a form */}
                    <Button 
                        type="button"
                        className="focus:outline-none focus:ring-0 bg-linear-to-r from-emerald-400 via-orange-500 to-emerald-600 hover:scale-105 transition cursor-pointer text-white"
                    >
                        Sign Up
                    </Button>
                    <Button 
                        type="button"
                        className="focus:outline-none focus:ring-0 bg-linear-to-r from-green-400 to-green-600 hover:scale-105 transition cursor-pointer text-white"
                    >
                        Sign In
                    </Button>
                </div>

                <NavbarCollapse>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-600 border rounded border-green-500 px-3 py-2" 
                                : "px-3 py-2 hover:text-green-600"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/listedBook"
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-600 border rounded border-green-500 px-3 py-2" 
                                : "px-3 py-2 hover:text-green-600"
                        }
                    >
                        Listed Books
                    </NavLink>

                    <NavLink
                        to="/pagetoRead"
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-600 border rounded border-green-500 px-3 py-2" 
                                : "px-3 py-2 hover:text-green-600"
                        }
                    >
                        Pages to Read
                    </NavLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
};

export default Navbars;