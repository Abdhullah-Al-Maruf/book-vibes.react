import { Link, Links } from "react-router";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { NavLink } from "react-router";
const Navbars = () => {
    return (
        <div>
            <Navbar className="sticky top-0 z-10" fluid rounded>

                <Link to="/">
                    <NavbarBrand >
                        <span className="text-xl font-bold ">
                            Book Vibe
                        </span>
                    </NavbarBrand>
                </Link>


                <div className="flex gap-3 md:order-2">
                    <Button className="focus:outline-none focus:ring-0 bg-linear-to-r from-emerald-400 via-green-500 to-emerald-600  hover:scale-105 transition cursor-pointer">Sign Up</Button>
                    <Button className="focus:outline-none focus:ring-0 bg-linear-to-r from-green-400 hover:scale-105 transition cursor-pointer">Sign In</Button>

                </div>
                <NavbarCollapse >
                    <NavbarLink  as={NavLink} to="/"  className="text-black font font-semibold">Home</NavbarLink>
                    <NavbarLink as={NavLink} to="/listedBook" >Listed Books</NavbarLink>
                    <NavbarLink as={NavLink} to="/pagetoRead">Pages to Read</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
};

export default Navbars;