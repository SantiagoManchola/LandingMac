import first100 from "../../assets/formItems/first100.svg"
import gift from "../../assets/formItems/gift.svg"
import disccount from "../../assets/formItems/disccount.svg"
import id from "../../assets/formItems/id.svg"
import celebrate from "../../assets/formItems/celebrate.svg"
import { Link, Outlet } from "react-router-dom";

const RegisterForm = () => {
    return(
        <>
            <section className="font-OP bg-bone xl:h-[833px]  xl:w-full xl:px-[100px] px-2">
                <div className="xl:px-[112px] xl:pt-[45px] xl:pb-[36px] text-center pt-[20px]">
                    <h2 className="pb-[18px] font-extrabold uppercase xl:text-5xl text-3xl">regístrate y gana</h2>
                    <p className="text-base font-medium">Los datos registrados deben pertenecer a la persona que figura en la tarjeta de propiedad del vehículo MACK; <br /> si una persona tiene más de un (1) camión MACK a su nombre sólo se puede inscribir una vez.</p>
                </div>
                    <div className="flex xl:flex-row flex-col xl:justify-center">
                        <div className="xl:w-[637px] xl:pr-[30px] justify-start" >
                        <img className="xl:mb-[48px] mb-6 xl:w-[507px] xl:h-[159px]"  src={first100} alt="" />
                            <ul className="text-base font-semibold xl:mb-[48px]">
                                    <li className="flex item-start align-top gap-[14px] mb-[25px] "><img src={gift} alt="" />
                                    <span>*Una gorra emblemática Mack..</span></li>

                                    <li className="flex gap-[15px] items-start mb-[25px]"><img className="max-w-[25px]" src={disccount} alt="" /><span>**<strong>25% de descuento en repuestos</strong> instalados en taller el día
                                    que reclames tu premio o <strong>15% de descuento en repuestos</strong>  comprados por
                                    mostrador el día que reclames tu premio.</span></li>

                                    <li className="flex items-start gap-[14px] mb-[25px]"><img className="max-w-[25px]" src={id} alt="" /><span>***Una tarjeta de miembro Jauría Mack para acceder a descuentos especiales. (Aplica para el año 2023)</span></li>
                            </ul>
                            <img className="mb-[22px] xl:w-[407px] xl:h-[96px]" src={celebrate} alt="" />

                            <p className="text-xs font-semibold"><strong>Válido sólo para Colombia.</strong><br />Los premios no aplican para convenios de flotas.
                            </p>
                        </div>
                        <form className="xl:mt-0 mt-10 flex flex-col xl:w-[637px] xl:pl-[30px] xl:pb-[40px] justify-start">
                            <div className="flex justify-between xl:flex-row flex-col">
                                <div className="flex flex-col">
                                    <div className="flex flex-col gap-[9px] mb-[9px]">
                                        <label className="font-extrabold text-sm">Nombres *</label>
                                        <input className="border-2 border-cafe outline-none font-normal bg-boneSecondary"  type="text" />
                                    </div>
                                    <div className="flex flex-col gap-[9px] mb-[9px]">
                                    <label className="font-extrabold text-sm">Número de Celular *</label>
                                    <input className="border-2 border-cafe outline-none font-normal bg-boneSecondary"  type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col xl:w-[57%] justify-end ">
                                    <div className="flex flex-col gap-[9px] mb-[9px]">
                                        <label className="font-extrabold text-sm">Apellidos *</label>
                                        <input className="border-2 border-cafe outline-none font-normal bg-boneSecondary"  type="text" />
                                    </div>
                                    <div className="flex flex-col gap-[9px] mb-[9px]">
                                    <label className="font-extrabold text-sm">Cédula *</label>
                                    <input className="border-2 border-cafe outline-none font-normal bg-boneSecondary"  type="text" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-[9px] mb-[9px]">
                                <label className="font-extrabold text-sm">Placa del camión *</label>
                                <input className="border-2 border-cafe outline-none font-normal bg-boneSecondary"  type="text" />
                            </div>

                            <div className="flex flex-col gap-[9px] mb-[9px]">
                                <label className="font-extrabold text-sm">Correo eletrónico *</label>
                                <input className="border-2 border-cafe  outline-none font-normal bg-boneSecondary"  type="text" />
                            </div>

                            <div className="flex flex-col gap-[9px] mb-[9px]">
                                <label className="font-extrabold text-sm">¿En que taller deseas reclamar tu premio? *</label>
                                <select required autoComplete="false" className="border-2 border-cafe outline-none font-normal bg-boneSecondary">
                                </select>
                            </div>

                            <div className="flex flex-col gap-[9px] mb-[36px]">
                                    <label className="font-extrabold text-sm">Autorización para el uso y tratamiento de datos e información <br />personal</label>
                                    <textarea readOnly className="bg-boneSecondary h-[66px] mb-[12px] text-[9px] border-2 border-cafe outline-none pt-[7px] pb-[12px] px-[14px]" type="text" value="Declaro que he sido informado por el grupo empresarial compuesto por las sociedades Praco Didacol S.A.S, Distribuidora Hino de Colombia S.A.S, Inmobiliaria Inchcape Colombia S.A.S y Matrase S.A.S,; en adelante Las Compañías, que serán el Responsable del Tratamiento de mis Datos Personales, por lo que autorizo de manera previa,"/>
                                    <div className="flex gap-[69px] justify-start items-center">
                                        <div className="items-center gap-[7px] flex text-cafe">
                                            <input name="select" className="after:bg-boneSecondary after:border-solid after:border-cafe" type="radio" value="true"/>
                                            <span className="font-bold  text-[13px]">Acepto</span>
                                        </div>
                                        <div className="items-center gap-[7px] flex text-cafe">
                                            <input name="select" className="bg-boneSecondary" type="radio" value="false"/>
                                            <span className="font-bold text-[13px]">No acepto</span>
                                        </div>
                                    </div>
                            </div>

                            <Link to="/register" className="text-center items-center bg-black text-white uppercase text-base font-extrabold h-[35px] xl:w-[513px] w-full mb-10">Enviar</Link>
                        </form>
                    </div>
                    <Outlet/>
            </section>
        </>
    )
}

export default RegisterForm;