import waze from "../../assets/registerBannerItems/waze.png"
import location from "../../assets/registerBannerItems/location.svg"
import soyjauriamack from "../../assets/registerBannerItems/soyjauriamack.svg"


const BannerRegister = () => {
    return(
        <>
             <section className="bg-[url('assets/registerR.jpeg')] bg-[65%] 2xl:bg-cover xl:bg-[center_top_75%] xl:w-full bg-no-repeat flex text-white font-OP xl:min-h-[calc(100vh-107px-60px)] min-h-[calc(100vh-55px-60px)]">
                <div className="xl:px-[100px] px-2 w-full bg-gradient-to-t from-[#0000008a] to-[#000000e6] to-9% flex flex-col justify-center items-center xl:py-0 pt-20 pb-20 xl:pt-[139px] xl:pb-[112px]">
                    <h2 className="font-bold xl:text-[40px] mb-[11px] xl:w-[513px] xl:h-[54px] text-center text-3xl">¡Gracias por registrarte!</h2>

                    <p className="font-semibold xl:text-[16px] text-center mb-[23px]">Puedes reclamar tu premio en Bogotá PracoDidacol sede Calle 80. <br />
                    <span className="font-bold">Dirección: Calle 80 Autopista Medellín, Km 1.2 vía Siberia Costado Sur.</span>
                    </p>

                    <div className="justify-between flex xl:gap-[12px] gap-2 border-t-[2px] border-b-[2px] border-white border-l-0 border-r-0 py-[13px] items-center">
                        <div className="bg-white flex rounded-full border-2 border-white items-center justify-center w-[39px] h-[39px]">
                            <img src={location} alt="" />
                        </div>

                        <h3 className="font-extrabold xl:text-2xl text-center">¡Quiero ir por mi premio!</h3>
                        
                        <img className="h-[29px] w-[68px] rounded-md" src={waze} alt="" />
                        
                    </div>

                    <p className="xl:pb-0 pb-5 xl:h-[97px] xl:w-[816px] w-full text-base leading-5 font-semibold bg-redDark text-center pt-[16px] mb-[40px] mt-[35px] max-w-[428px] xl:max-w-none">No olvides que para reclamar tu premio debes ser el dueño del camión MACK y debes presentar <br /> la tarjeta de propiedad de tu vehículo MACK. Si por algún motivo no puedes reclamar el premio <br />personalmente, debes enviar un correo autorizando a la persona que va a reclamarlo.</p>

                    <img className="xl:w-[378px] xl:h-[44px] xl:max-w-none max-w-[428px]" src={soyjauriamack} alt=""/>
                </div>
            </section>
        </>
    )
}

export default BannerRegister;