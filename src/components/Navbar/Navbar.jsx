import pracodiacol from "../../assets/navbarItems/pracodiacol.svg"
import mack from "../../assets/navbarItems/mack.svg"
import facebook from "../../assets/navbarItems/facebook.svg"
import instagram from "../../assets/navbarItems/instagram.svg"
import youtube from "../../assets/navbarItems/youtube.svg"
import line from "../../assets/navbarItems/line.svg"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Header = () => {
    return(
        <>
            <header className="font-OP w-full xl:w-full bg-black text-white z-50 xl:h-[107px] justify-between flex items-center xl:px-[100px] px-2">
                <div className="xl:w-[289px] xl:h-[54px] w-36 my-0 flex justify-between items-center">
                    <LazyLoadImage src={pracodiacol} alt="" />
                    <LazyLoadImage src={line} alt="" />
                    <LazyLoadImage src={mack} alt="" />
                </div>

                <div className="flex xl:max-w-[543px] gap-[121px] uppercase items-center justify-center">
                    <div className="text-sm font-extrabold xl:h-[19px] xl:w-[95] hidden xl:block">
                        Regístrate
                    </div>
                    <div className="flex justify-between gap-[10px]">
                        <button className="flex rounded-full border-2 border-[#84754E] items-center justify-center w-[34px] xl:h-[34px]" >
                            <LazyLoadImage src={facebook} alt="" />
                        </button>

                        <button className="flex rounded-full border-2 border-[#84754E] items-center justify-center w-[34px] h-[34px]" >
                            <LazyLoadImage className="text-white" src={instagram} alt="" />
                        </button>

                        <button className="flex rounded-full border-2 border-[#84754E] items-center justify-center w-[34px] h-[34px]" >
                             <LazyLoadImage src={youtube} alt="" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
