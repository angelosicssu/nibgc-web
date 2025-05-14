import Image from "next/image";
import Header from "../components/Header";
import bgHome from "../../public/image/bg-home.png"
import { FaCirclePlay } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="bg-[url('/image/bg-home.png')] bg-cover h-[650px] w-full flex flex-wrap justify-between text-white items-center px-15">
        <div>
          <div className="text-8xl font-extrabold uppercase">
            <h1 className="text-shadow-lg">Seja</h1>
            <h1 className="text-stroke">Bem Vindo</h1>
          </div>
          <div className="mt-5 inline-flex items-center bg-[#D9D9D9]/30 border-4 rounded-lg p-2 gap-3 transition-all hover:cursor-pointer">
            <FaCirclePlay size={30}/>
            <a href="https://youtu.be/_OhfUKTOECQ?si=-kL_YjYuoTXe0p79" className="uppercase font-bold text-2xl">Nossa Igreja</a>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl uppercase font-bold mb-5 text-shadow-lg">Missão Mãe | Culto Familiar</h2>
          <iframe className="rounded-2xl border-5" width="580" height="335" src="https://www.youtube.com/embed/mUm3AYWJT5Q?si=MoToxsRFQz8hzgH5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </section>
    </div>
  );
}
