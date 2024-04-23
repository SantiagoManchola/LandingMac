import facebook from "../../assets/footerItems/facebook.svg"
import instagram from "../../assets/footerItems/instagram.svg"
import youtube from "../../assets/footerItems/youtube.svg"

const RegisterFooter = () => {
    return(
        <>
             <footer className="flex flex-row xl:justify-end justify-center xl:w-full xl:max-h-[60px] py-[13px] xl:px-[100px] bg-cafe leading-[9px] text-white items-center font-OP">
                <div className="flex justify-between gap-[10px]">
                    <button name="facebook" className="flex rounded-full border-2 border-white items-center justify-center w-[34px] h-[34px]" >
                        <img src={facebook} alt="" />
                    </button>
                    <button name="instagram" className="flex rounded-full border-2 border-white items-center justify-center w-[34px] h-[34px]" >
                        <img src={instagram} alt="" />
                    </button>
                    <button name="youtube" className="flex rounded-full border-2 border-white items-center justify-center w-[34px] h-[34px]" >
                        <img src={youtube} alt="" />
                    </button>
                </div>
            </footer> 
        </>
    )
}

export default RegisterFooter;