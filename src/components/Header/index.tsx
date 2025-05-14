import { FaYoutube, FaSpotify } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";

export default function Header() {
    return(
        <div className="flex justify-between bg-linear-to-r from-[#1D0072] to-[#381B8E] py-1.5 px-2.5 items-center">
            <Image alt="Logo-NIBGC" src={'/image/logo.png'} width={110} height={110}/>
            <nav className="flex items-center gap-9 uppercase font-bold text-lg">
                <ul className="flex items-center gap-9">
                    <div className="flex gap-4 text-gray-200">
                        <li className="relative group">
                            <a href="#" className="hover:text-white duration-100">Quem Somos</a>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full rounded-sm"></span>
                        </li>
                        <li className="relative group">
                            <a href="#" className="hover:text-white duration-100">Meditação</a>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full rounded-sm"></span>
                        </li>
                        <li className="relative group">
                            <a href="#" className="hover:text-white duration-100">Eventos</a>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full rounded-sm"></span>
                        </li>
                    </div>
                    <div className="flex gap-3 items-center">
                        <li><a href="https://www.youtube.com/c/NIBGrandeCircular" target="_blank"><FaYoutube size={25} color="#FFF"/></a></li>
                        <li><a href="#"><AiFillInstagram size={25} color="#FFF"/></a></li>
                        <li><a href="#"><FaSpotify size={22} color="#FFF"/></a></li>
                    </div>
                </ul>
                <div className="bg-amber-400 py-1 px-3 rounded-md text-white hover:bg-blue-700 hover:scale-110 duration-300">
                    <a href="#">Contato</a>
                </div>
            </nav>
            
        </div>
    )
}