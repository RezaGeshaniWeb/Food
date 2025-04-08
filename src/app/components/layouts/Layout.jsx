import Link from "next/link";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";
import Email from "../icons/Email";
import Instagram from "../icons/Instagram";

export default function Layout({ children }) {
    return (
        <main>
            <header className="max-w-[1000px] mx-auto flex justify-between items-center py-5">
                <div className="text-[#53c60b] font-bold text-3xl">
                    <Link href='/'>Food</Link>
                </div>
                <div className="text-[#292929] *:ml-10 font-semibold *:text-xl">
                    <Link href='/menu'>Menu</Link>
                    <Link href='/categories'>Categories</Link>
                </div>
            </header>

            <div className="min-h-screen bg-[#e2e2e2]">{children}</div>

            <footer className="flex items-center justify-between border-t border-t-slate-400 py-5 px-32 bg-black text-slate-200">
                <a href="https://portfolio-beryl-nu-44.vercel.app/" target="_blank" rel="noreferrer" className="font-bold text-2xl">Reza Geshani</a>
                <div className="flex items-center gap-5">
                    <a href="https://www.linkedin.com/in/reza-geshani-web">
                        <Linkedin />
                    </a>
                    <a href="https://github.com/RezaGeshaniWeb/">
                        <Github />
                    </a>
                    <a href="mailto:rezageshaniweb@gmail.com">
                        <Email />
                    </a>
                    <a href="https://www.instagram.com/rezageshani_web">
                        <Instagram />
                    </a>
                </div>
            </footer>
        </main>
    )
}