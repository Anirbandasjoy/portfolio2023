import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Toggle from "./Toggle"
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navItems = <>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Profulio</li>
        <li className="cursor-pointer">Contact</li>
    </>
    return (
        <div>
            <div className="flex justify-between items-center relative py-3 px-2 lg:px-0">
                <div>
                    <h1 className="bg-green-400 text-3xl p-2 rounded-md font-bold dark:text-gray-200 text-white">JD</h1>
                </div>
                <div>
                    <div className="sm:block hidden">
                        <ul className="flex justify-center  items-center gap-10 dark:text-gray-300 text-gray-500 font-bold">
                            {navItems}
                        </ul>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <Toggle />
                </div>
                <div className="sm:hidden">
                    <div onClick={() => setOpen(!open)}>
                        {
                            open ?
                                <IoCloseOutline className="bg-green-400 text-white text-5xl rounded-md font-bold p-2 " /> : <RxHamburgerMenu className="bg-green-400 text-white text-5xl rounded-md font-bold p-2 " />
                        }
                    </div>
                </div>
            </div>
            {/* samll nav */}
            <div className={open ? "transform -translate-x-0 sm:hidden duration-500" : " transform -translate-x-full duration-500 sm:hidden"}>


                <ul className="flex w-full justify-center items-center gap-8 top-0 h-[calc(100vh-76px)] text-gray-500  bg-gray-100 flex-col absolute  font-bold">
                    {navItems}

                </ul>
            </div>
        </div>
    )
}

export default Navbar