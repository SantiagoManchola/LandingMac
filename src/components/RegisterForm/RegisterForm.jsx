import first100 from "../../assets/formItems/first100.svg"
import gift from "../../assets/formItems/gift.svg"
import disccount from "../../assets/formItems/disccount.svg"
import id from "../../assets/formItems/id.svg"
import celebrate from "../../assets/formItems/celebrate.svg"
import { Link, Outlet } from "react-router-dom";

const RegisterForm = () => {
    return(
        <>
            <section className="font-OP bg-bone xl:h-[824px] xl:w-full xl:px-[100px] px-2">
                <div className="xl:px-[112px] xl:pt-[45px] xl:pb-[36px] text-center pt-[20px]">
                    <h2 className="pb-[6px] font-extrabold uppercase xl:text-5xl xl:leading-[66px] text-3xl">regístrate y gana</h2>
                    <p className="text-[16px] xl:leading-[23px] font-semibold xl:mb-[10px]">Los datos registrados deben pertenecer a la persona que figura en la tarjeta de propiedad del vehículo MACK; <br /> si una persona tiene más de un (1) camión MACK a su nombre sólo se puede inscribir una vez.</p>
                </div>
                    <div className="flex xl:flex-row flex-col xl:justify-center xl:h-[613px]">
                        <div className="xl:w-[670px] xl:mr-[30px] xl:justify-start xl:items-start flex flex-col justify-center items-center" >
                            <img className="xl:mb-[30px] mb-6 xl:w-[507px] xl:h-[159px] max-w-[546px]"  src={first100} alt="" />
                            <ul className="text-base font-semibold">
                                    <li className="leading-[22px] flex xl:item-start xl:justify-start align-top gap-[14px] mb-[27px] justify-center xl:text-start"><img src={gift} alt="" />
                                    <span>*Una gorra emblemática Mack..</span></li>

                                    <li className="leading-[22px] flex gap-[15px] xl:justify-start xl:items-start mb-[25px] justify-center text-center xl:text-start"><img className="max-w-[25px]" src={disccount} alt="" /><span>**<strong>25% de descuento en repuestos</strong> instalados en taller el día
                                    que reclames tu premio o <strong>15% de descuento en repuestos</strong>  comprados por
                                    mostrador el día que reclames tu premio.</span></li>

                                    <li className="leading-[22px] flex xl:justify-start xl:items-start gap-[14px] mb-[48px] justify-center text-center xl:text-start"><img className="max-w-[25px]" src={id} alt="" /><span>***Una tarjeta de miembro Jauría Mack para acceder a descuentos especiales. (Aplica para el año 2023)</span></li>
                            </ul>
                            <img className="mb-[22px] xl:w-[407px] xl:h-[95px] max-w-[546px] xl:max-w-full" src={celebrate} alt="" />

                            <p className="text-xs font-semibold leading-[13px] mb-[18px]"><strong>Válido sólo para Colombia.</strong><br />Los premios no aplican para convenios de flotas.
                            </p>
                        </div>
                        <form className="xl:mt-0 mt-10 flex flex-col xl:w-[637px] xl:ml-[30px]  justify-start">
                            <div className="flex justify-between xl:flex-row flex-col">
                                <div className="flex flex-col ">
                                    <div className="flex flex-col gap-[9px] mb-[11px]">
                                        <label htmlFor="firstname" className="font-extrabold leading-[19px] text-sm">Nombres *</label>
                                        <input id="nombre" className="border-2 border-cafe outline-none font-normal bg-boneSecondary h-[30px]"  type="text" />
                                    </div>
                                    <div className="flex flex-col gap-[6px] mb-[11px]">
                                        <label htmlFor="num" className="font-extrabold leading-[19px] text-sm">Número de Celular *</label>
                                        <input id="num" className="border-2 border-cafe outline-none font-normal bg-boneSecondary h-[30px]"  type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col xl:w-[57%] justify-end">
                                    <div className="flex flex-col gap-[9px] mb-[11px]">
                                        <label htmlFor="apellidos" className="font-extrabold leading-[19px] text-sm">Apellidos *</label>
                                        <input id="apellidos" className="border-2 border-cafe outline-none font-normal bg-boneSecondary h-[30px]"  type="text" />
                                    </div>
                                    <div className="flex flex-col gap-[6px] mb-[11px]">
                                        <label htmlFor="cedula" className="font-extrabold leading-[19px] text-sm">Cédula *</label>
                                        <input id="cedula" className="border-2 border-cafe outline-none font-normal bg-boneSecondary h-[30px]"  type="text" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-[6px] mb-[11px]">
                                <label htmlFor="placa" className="font-extrabold text-sm leading-[19px]">Placa del camión *</label>
                                <input id="placa" className="border-2 border-cafe outline-none font-normal bg-boneSecondary h-[30px]"  type="text" />
                            </div>

                            <div className="flex flex-col gap-[6px] mb-[11px]">
                                <label htmlFor="correo" className="font-extrabold text-sm  leading-[19px]">Correo eletrónico *</label>
                                <input id="correo" className="border-2 border-cafe  outline-none font-normal bg-boneSecondary h-[30px]"  type="text" />
                            </div>

                            <div className="flex flex-col gap-[6px] mb-[11px]">
                                <label htmlFor="taller" className="font-extrabold text-sm leading-[19px] ">¿En que taller deseas reclamar tu premio? *</label>
                                <select id="taller" autoComplete="false" className="border-2 border-cafe outline-none font-normal bg-boneSecondary h-[30px]">
                                </select>
                            </div>

                            <div className="flex flex-col gap-[4px] mb-[36px] ">
                                    <label htmlFor="texto" className="font-extrabold leading-[19px] text-sm">Autorización para el uso y tratamiento de datos e información <br />personal</label>
                                    <textarea id="texto" readOnly className="bg-boneSecondary h-[66px] mb-[12px] w-full leading-[12px] font-semibold tracking-[0px] text-[9px] border-2 border-cafe outline-none pt-[7px] pb-[12px] pl-[14px] pr-[22px]" type="text" value="Declaro que he sido informado por el grupo empresarial compuesto por las sociedades Praco Didacol S.A.S, Distribuidora Hino de Colombia S.A.S, Inmobiliaria Inchcape Colombia S.A.S y Matrase S.A.S,; en adelante Las Compañías, que serán el Responsable del Tratamiento de mis Datos Personales, por lo que autorizo de manera previa,"/>
                                    <div className="flex gap-[69px] justify-start items-center">
                                        <div className="items-center gap-[7px] flex text-cafe">
                                            <input htmlFor="accept" name="select" className="accent-cafe" type="radio" value="true"/>
                                            <span id="accept" className="font-bold  text-[13px]">Acepto</span>
                                        </div>
                                        <div className="items-center gap-[7px] flex text-cafe">
                                            <input htmlFor="decline" name="select" className="accent-cafe" type="radio" value="false"/>
                                            <span id="decline" className="font-bold text-[13px]">No acepto</span>
                                        </div>
                                    </div>
                            </div>

                            <Link to="/register" className="text-center justify-center items-center bg-black text-white uppercase text-base font-extrabold h-[35px] xl:w-[513px]  xl:pt-[7px] xl:pb-[6px] xl:pl-[177px] xl:pr-[220px] mb-4 xl:mb-0">Enviar</Link>
                        </form>
                    </div>
                    <Outlet/>
            </section>
        </>
    )
}

export default RegisterForm;