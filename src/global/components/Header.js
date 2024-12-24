import Dropdown from "./Dropdown";
import NavigationBar from "./NavigationBar";
import Logo from "../images/image.png";
import { Link } from "react-router-dom";
const Header = () => {

    return (
        <div className="header-navigation z-40 w-full flex-none lg:z-50 sticky top-0">
            <div className="absolute h-full w-full bg-white shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.08)]"></div>
            <nav className="wrapper grid grid-cols-1 items-center lg:border-0 [--header-height:64px]" style={{ minHeight: "var(--header-height)" }}>
                <div className="relative flex items-center ">
                    <Link to="/" title="MoMo" className="mr-3 flex-none w-9 h-9 overflow-hidden rounded-none hover:opacity-80">
                        <span className="sr-only">MoMo home page</span>
                        {/* <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" className="w-9 h-9" alt="MoMo" /> */}
                        <img src={Logo} className="w-9 h-9 rounded" alt="MoMo" />

                    </Link>
                    <a
                        href="/cinema"
                        title="Đặt vé xem phim"
                        className="relative flex flex-none space-x-1 pl-2 items-center rounded-none hover:opacity-80 after:absolute after:left-0 after:h-8 after:w-[1px] after:bg-gray-300 after:content-['']"
                    >
                        <img
                            src="https://homepage.momocdn.net/img/momo-amazone-s3-api-240808153440-638587280804204391.svg"
                            className="w-9 h-9"
                            alt="MoMo"
                        />
                        <div className="text-sm font-semibold leading-[1.1] text-pink-500 line-clamp-2">Đặt vé<br />xem phim</div>
                    </a>
                    <div className="relative lg:ml-2 xl:ml-4 hidden lg:flex items-center ">
                        <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="relative z-10 flex max-w-max flex-1 items-center justify-center">
                            <div>
                                <ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center space-x-0" dir="ltr">
                                    <Dropdown title={"Lịch chiếu"} children={["Lịch chiếu phim hôm nay", "Phim đang chiếu", "Phim sắp chiếu"]} />
                                    <Dropdown title={"Rạp chiếu"} children={["CGV", "Lotte Cinema"]} />
                                    <Dropdown title={"Phim chiếu"} children={null} />
                                    <Dropdown title={"Review phim"} children={null} />
                                    <Dropdown title={"Top phim"} children={null} />
                                    {/* <Dropdown title={"Blog phim"} children={["Tổng hợp phim"]} /> */}
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <NavigationBar />
                </div>
            </nav>

        </div>
    );
};

export default Header;
