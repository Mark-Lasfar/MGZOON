import logo from "../../images/logo.png"
import Image from "next/image"
// import cartIcon from "../../images/favorite.png";
import cartIcon from "../../images/cart.png";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { stateProps } from "../../../type";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { addUser } from "@/store/nextSlice";
import { SessionProvider } from "next-auth/react";
import { FaHeart } from "react-icons/fa";


const Header = () => {
    const { data: session } = useSession();
    const {productData,favoriteData, userInfo} = useSelector(
        (state:stateProps)=>state.next);
        const dispatch = useDispatch()
        console.log(userInfo)
    useEffect(()=>{
        if(session){
            dispatch(addUser({
                name:session?.user?.name,
                email:session?.user?.email,
                image:session?.user?.image,


            })
        );
        }
    },[session]);
        
    return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50"> 
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4 ">
            {/* logo */}
            <Link href={"/"} className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
            <Image className="w-32 object-cover "  src={logo} alt="logoImg"/>
            </Link>
            {/* delivery */}
            <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">Egypt</p>
          </div>
        </div>
            {/* searchbar */}
            <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative ">
                <input className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none
                focus-visible:border-amazon_yellow" type="text" placeholder="Search amazon products"/>
                <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex
                items-center justify-center absolute right-0 rounded-md rounded-br-md">
                    <HiOutlineSearch/>
                </span>
            </div>
            {/* signin */}
            {
                userInfo?<div 
                 className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
                    <img src={userInfo.image} alt="userImage"
                    className="w-8 h-8 rounded-full object-cover"/>
                    <div className="text-xs text-gray-100 flec flex-col
                    justify-between">
                        <p className="text-white font-bold">{userInfo.name}</p>
                        <p>{userInfo.email}</p>
                    </div>
                </div>:<div onClick={()=>signIn()} className="text-xs text-gray-100 flex flex-col justify-center px-2 border
            border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
                <p>Hello, sign in</p>
                <p className="text-white font-bold flex">Account & Lists{" "}<span>
                    <BiCaretDown/></span></p>
            </div>
            }
            {/* favorite */}
            
            {/* <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border */}
            <Link href={"/Love"} className="flex items-center px-2  border
                border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
                <FaHeart className="w-auto object-cover h-5"/>
                <p className="text-xs text-white font-bold mt-3">Favorite</p>
                <span className="absolute text-amazon_yellow text-sm top-2 left-[40px] font-semibold">
                    {favoriteData ? favoriteData.length: 0}
                </span>
            </Link>
                {/* </div> */}
            {/* cart */}
            <Link href={"/cart"} className="flex items-center px-2  border
            border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
                <Image className="w-auto object-cover h-8" src={cartIcon} alt="cartImg"/>
                <p className="text-xs text-white font-bold mt-3">Cart</p>
                <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
                    {productData ? productData.length: 0}
                </span>
            </Link>
        </div>
    </div>
    );
};

export default Header;
