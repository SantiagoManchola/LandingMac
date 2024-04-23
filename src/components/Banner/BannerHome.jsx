import { LazyLoadImage } from 'react-lazy-load-image-component';
import gorra from "../../assets/bannerItems/gorra.webp"
import invitacion from "../../assets/bannerItems/invitacion.svg"

const BannerHome = () => {
    return(
        <>
            <section className="bg-[url('assets/bannerItems/banner_image.webp')] bg-[center_top_45%] xl:bg-[75%_77%] xl:h-[945px] bg-no-repeat font-OP">
                <div className="xl:px-[100px] xl:h-full xl:bg-gradient-to-t bg-gradient-to-b from-[#00000066] from-10% to-black to-100% xl:from-black xl:from-30% xl:to-transparent xl:to-70% w-full px-2">
                    <div className="flex xl:flex-row flex-col xl:pt-[507px] pt-[50px] justify-center items-center">
                        <div className=" text-white text font-bold xl:h-[19px] -mt-10 xl:w-[95] xl:hidden text-4xl mb-5">
                            Regístrate
                        </div>
                        
                        <div className="flex flex-col  xl:w-[508px] xl:mr-[30px] xl:pb-[23px] xl:justify-start max-w-[546px]">
                            <LazyLoadImage className="xl:mb-[42px] mb-5" src={invitacion} alt="" />

                            <p className="xl:w-[507px] xl:mb-[28px] w-full text-white text-xl leading-[23px] text-justify font-normal">Este año estamos rindiendo tributo a nuestra marca <span className="font-bold">Mack la cual lleva 100 años rodando por las carreteras de Colombia</span >  y queremos hacerte parte de esta celebración.<br/><br/>Si eres dueño de un camión Mack <span className="font-bold">¡YA GANASTE!, SOLO REGÍSTRATE Y RECLAMA TUS PREMIOS. <br /></span></p>
                        </div>

                        <div className="flex xl:ml-[30px] xl:w-[555px]  justify-center items-center w-auto xl:mt-[57px] xl:mb-[79px] mb-10">
                            <LazyLoadImage src={gorra} height="303" width="359" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerHome;