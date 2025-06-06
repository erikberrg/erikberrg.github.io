
export default function Header() {
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, offset: number) => {
        event.preventDefault();
        window.scrollTo({
            top: window.scrollY + offset,
            behavior: "smooth"
        });
    };

    return (
        <div className="flex justify-between items-center sticky top-0 z-50 py-8 px-8 md:px-24">
            <p className="font-bold text-xl">Erik Berg</p>
            <header className="w-fit md:h-14 h-12 md:px-2 px-1 py-2 bg-zinc-200/25 backdrop-blur-sm border-zinc-300/30 border-[1px] rounded-2xl flex justify-center items-center">
                <ul className="flex w-full justify-center">
                    {[
                        { href: "#projects", content: "Projects", offset: 900 },
                        { href: "#about", content: "About", offset: 3700 },
                        { href: "#contact", content: "Contact", offset: 4000 },
                    ].map((item, index) => (
                        <li key={index} className="w-fit">
                            <a 
                                href={item.href} 
                                onClick={(e) => handleScroll(e, item.offset)} 
                                className="hover:bg-black hover:text-white border-black px-3 py-2 rounded-full text-black transition-colors flex items-center"
                            >
                                {item.content}
                            </a>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    )
}
