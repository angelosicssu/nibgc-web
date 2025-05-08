import Image from "next/image"
import { FaYoutube, FaSpotify } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Header() {
  return(
    <div className="bg-linear-to-r from-blue-950 to-blue-900 flex items-center justify-between py-2 px-3">
      <Image
      alt="Nibgc logo"
      src="/image/logo-header.png"
      width={100}
      height={100}
      />
      <nav className="flex flex-row text-white text-lg uppercase font-bold gap-5">
        <ul className="flex gap-5 items-center">
          <li className="relative group">
            <a href="#">Quem Somos</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-400 transition-all duration-400 group-hover:w-full rounded-xs"></span>
          </li>
          <li className="relative group">
            <a href="#">Meditação</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-400 transition-all duration-400 group-hover:w-full rounded-xs"></span>
          </li>
          <li className="relative group">
            <a href="#">Eventos</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-400 transition-all duration-400 group-hover:w-full rounded-xs"></span>
          </li>
          <li><a href="#"><FaYoutube size={25}/></a></li>
          <li><a href="#"><AiFillInstagram size={25}/></a></li>
          <li><a href="#"><FaSpotify size={20}/></a></li>
        </ul>
        <div className="bg-amber-400 py-1 px-4 rounded-sm hover:bg-blue-700 hover:scale-105 duration-500">
          <a href="#">Contato</a>
        </div>
      </nav>
    </div>
  )
}