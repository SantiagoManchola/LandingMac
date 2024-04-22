import waze from "../../assets/waze.png"


const BannerRegister = () => {
    return(
        <>
             <section className="bg-[url('assets/registerR.jpeg')] bg-[65%] h-[100vh] 2xl:bg-cover xl:bg-[center_top_75%] xl:w-full bg-no-repeat flex text-white font-OP">
                <div className="xl:px-[100px] px-2 h-full w-full bg-gradient-to-t from-[#0000008a] to-[#000000e6] to-9% flex flex-col justify-center items-center xl:py-0 pt-20 pb-20">
                    <h2 className="font-bold xl:text-[40px]  mb-[11px] xl:w-[513px] xl:h-[54px] text-center text-3xl">¡Gracias por registrarte!</h2>

                    <p className="font-semibold xl:text-[16px] text-center mb-[23px]">Puedes reclamar tu premio en Bogotá PracoDidacol sede Calle 80. <br />
                    <span className="font-bold">Dirección: Calle 80 Autopista Medellín, Km 1.2 vía Siberia Costado Sur.</span>
                    </p>

                    <div className="justify-between flex xl:gap-[12px] gap-2 border-t-[2px] border-b-[2px] border-white border-l-0 border-r-0 py-[13px] items-center">
                        <div className="bg-white flex rounded-full border-2 border-white items-center justify-center w-[39px] h-[39px]">
                            <svg className="" width="19" height="27" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3642 0.965942C5.16996 0.965942 0.943359 5.19254 0.943359 10.3868C0.943359 12.1419 1.43013 13.8555 2.35025 15.3415L9.82793 27.3941C9.9704 27.6256 10.2237 27.7661 10.4948 27.7661C10.4967 27.7661 10.4987 27.7661 10.5007 27.7661C10.7738 27.7641 11.0271 27.6197 11.1675 27.3842L18.4553 15.2149C19.3239 13.7605 19.785 12.0905 19.785 10.3887C19.787 5.19254 15.5604 0.965942 10.3642 0.965942ZM17.1097 14.4076L10.4829 25.4707L3.68392 14.5144C2.91815 13.2777 2.50261 11.851 2.50261 10.3868C2.50261 6.05726 6.03467 2.52519 10.3642 2.52519C14.6937 2.52519 18.2198 6.05726 18.2198 10.3868C18.2218 11.8055 17.8339 13.1966 17.1097 14.4076Z" fill="black"/>
                                <path d="M10.3637 5.67529C7.76564 5.67529 5.65234 7.78859 5.65234 10.3867C5.65234 12.967 7.73201 15.0981 10.3637 15.0981C13.0271 15.0981 15.0751 12.9393 15.0751 10.3867C15.0751 7.78859 12.9618 5.67529 10.3637 5.67529ZM10.3637 13.5369C8.62244 13.5369 7.21357 12.122 7.21357 10.3867C7.21357 8.65528 8.63233 7.23652 10.3637 7.23652C12.0951 7.23652 13.5099 8.65528 13.5099 10.3867C13.5099 12.0983 12.1327 13.5369 10.3637 13.5369Z" fill="black"/>
                            </svg>
                        </div>

                        <h3 className="font-extrabold xl:text-2xl text-center">¡Quiero ir por mi premio!</h3>
                        
                        <img className="h-[29px] w-[68px] rounded-md" src={waze} alt="" />
                        
                    </div>

                    <p className="xl:pb-0 pb-5 xl:h-[97px] xl:w-[816px] w-full text-base leading-5 font-semibold bg-redDark text-center pt-[16px] mb-[40px] mt-[35px]">No olvides que para reclamar tu premio debes ser el dueño del camión MACK y debes presentar <br /> la tarjeta de propiedad de tu vehículo MACK. Si por algún motivo no puedes reclamar el premio <br />personalmente, debes enviar un correo autorizando a la persona que va a reclamarlo.</p>

                    <svg className="xl:w-[378px] xl:h-[44px]" viewBox="0 0 378 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M342.38 -5.41473e-05L35.6865 9.05103L36.484 36.0735L343.178 27.0224L342.38 -5.41473e-05Z" fill="white"/>
                        <path d="M31.0782 13.5189C31.4617 22.9618 31.8452 32.4118 32.2359 41.8547C21.5123 42.2743 10.796 42.7013 0.0723633 43.1209C5.4414 38.8084 10.8032 34.4958 16.1722 30.1832C10.7815 24.9661 5.39074 19.749 0 14.5319C10.3546 14.1991 20.7164 13.859 31.0782 13.5189Z" fill="white"/>
                        <path d="M346.759 30.675C346.375 21.2322 345.992 11.7821 345.601 2.33928C356.325 1.9196 367.041 1.49268 377.765 1.073C372.396 5.38559 367.034 9.69818 361.665 14.0108C367.056 19.2279 372.446 24.4449 377.837 29.662C367.482 29.9949 357.121 30.3349 346.759 30.675Z" fill="white"/>
                        <path d="M106.975 24.351L104.913 24.4089L104.53 27.694L102.641 27.7519L103.003 24.4668L100.239 24.5464L99.8769 27.8315L97.9956 27.8894L98.3791 24.6043L96.7727 24.6549L96.7148 22.6723L98.5962 22.6144L99.0086 18.9892L97.2214 19.0399L97.1635 17.0572L99.2474 16.9993L99.6164 13.7938L101.498 13.736L101.129 16.9415L103.878 16.8619L104.247 13.6636L106.15 13.6057L105.781 16.8112L107.366 16.7678L107.424 18.7504L105.543 18.8083L105.13 22.4335L106.917 22.3829L106.975 24.351ZM100.441 22.5927L103.292 22.5059L103.726 18.8011L100.883 18.8879L100.441 22.5927Z" fill="black"/>
                        <path d="M111.896 25.6317L113.249 23.8444C114.32 24.7562 115.485 25.4436 116.99 25.4002C118.35 25.3568 119.197 24.5753 119.161 23.5478V23.5261C119.132 22.6433 118.633 22.0572 116.382 21.3191C113.683 20.3712 112.294 19.4523 112.229 17.2091V17.173C112.164 14.8647 113.915 13.186 116.549 13.1136C118.213 13.063 119.689 13.5405 121.006 14.6476L119.732 16.4711C118.748 15.6968 117.67 15.1903 116.549 15.2193C115.268 15.2554 114.523 15.9573 114.552 16.9052V16.9269C114.581 17.8893 115.116 18.4392 117.533 19.2641C120.167 20.1903 121.404 21.2395 121.462 23.28V23.3235C121.534 25.7909 119.653 27.4335 117.026 27.5058C115.203 27.5565 113.459 27.0282 111.896 25.6317Z" fill="black"/>
                        <path d="M126.158 21.8544L126.151 21.6735C126.057 18.5476 128.075 16.1598 130.905 16.073C133.712 15.9934 135.825 18.2365 135.919 21.3624L135.926 21.5433C136.02 24.6692 134.023 27.0571 131.216 27.1439C128.401 27.2307 126.252 24.9876 126.158 21.8544ZM133.676 21.594L133.669 21.4709C133.611 19.4883 132.46 18.0122 130.941 18.0556C129.334 18.1063 128.358 19.6403 128.415 21.6012V21.7242C128.473 23.7068 129.638 25.183 131.165 25.1323C132.771 25.0961 133.734 23.5766 133.676 21.594Z" fill="black"/>
                        <path d="M146.751 15.8126L149.074 15.7474L145.781 26.6447C145.123 28.8082 144.262 29.6186 142.721 29.6621C141.975 29.6838 141.252 29.5246 140.579 29.1628L141.172 27.3972C141.563 27.6288 141.983 27.7373 142.424 27.7228C143.003 27.7084 143.357 27.4334 143.676 26.5578L139.551 16.0224L141.961 15.95L144.66 23.6201L146.751 15.8126Z" fill="black"/>
                        <path d="M153.198 24.5681L154.616 22.9183C155.26 23.7215 155.897 24.1629 156.838 24.1412C157.959 24.105 158.683 23.3235 158.632 21.6955L158.35 12.05L160.695 11.9777L160.984 21.7244C161.027 23.2295 160.68 24.3655 159.92 25.1253C159.204 25.885 158.227 26.283 156.968 26.3192C155.275 26.3771 154.009 25.6535 153.198 24.5681Z" fill="black"/>
                        <path d="M166.114 22.8242V22.7012C166.049 20.4364 167.576 19.2642 169.826 19.1991C170.81 19.1701 171.534 19.3293 172.265 19.5681L172.25 19.105C172.207 17.6578 171.346 16.9632 169.899 17.0066C168.878 17.0355 168.061 17.3829 167.373 17.7229L166.657 15.9357C167.663 15.4075 168.698 15.0312 170.145 14.9878C171.527 14.9444 172.583 15.2772 173.307 15.9574C174.03 16.6376 174.421 17.6723 174.457 19.0109L174.653 25.6101L172.424 25.6752L172.388 24.3727C171.794 25.27 170.868 25.9212 169.486 25.9646C167.713 26.0297 166.172 24.8937 166.114 22.8242ZM172.352 22.1151L172.323 21.0297C171.773 20.8271 171.129 20.7041 170.347 20.7258C169.045 20.762 168.3 21.4494 168.336 22.571V22.6289C168.365 23.6708 169.088 24.2497 170.109 24.2425C171.411 24.2135 172.388 23.3235 172.352 22.1151Z" fill="black"/>
                        <path d="M179.964 21.9776L179.754 14.8357L181.998 14.7706L182.186 21.225C182.229 22.7518 182.96 23.5333 184.161 23.4971C185.362 23.4609 186.122 22.5999 186.079 21.0948L185.89 14.6548L188.177 14.5897L188.488 25.2192L186.202 25.2844L186.158 23.7431C185.601 24.7055 184.769 25.5304 183.343 25.5738C181.252 25.6317 180.029 24.2424 179.964 21.9776Z" fill="black"/>
                        <path d="M193.806 14.4233L196.071 14.3582L196.129 16.4204C196.65 15.0383 197.648 14.0687 199.255 14.0977L199.327 16.5651H199.226C197.402 16.6158 196.172 17.8603 196.245 20.2627L196.382 24.9732L194.117 25.0384L193.806 14.4233Z" fill="black"/>
                        <path d="M204.197 14.1122L206.484 14.047L206.795 24.6766L204.508 24.7417L204.197 14.1122ZM206.296 9.71997L208.329 10.6245L206.108 12.8748L204.443 12.9255L206.296 9.71997Z" fill="black"/>
                        <path d="M211.845 21.4783V21.3553C211.78 19.0905 213.307 17.9182 215.557 17.8531C216.541 17.8242 217.265 17.9834 217.996 18.2221L217.981 17.759C217.938 16.3119 217.077 15.6172 215.63 15.6606C214.609 15.6896 213.792 16.0369 213.104 16.377L212.388 14.5897C213.394 14.0615 214.428 13.6852 215.876 13.6418C217.258 13.5984 218.314 13.9313 219.038 14.6114C219.761 15.2916 220.152 16.3263 220.188 17.665L220.384 24.2641L218.155 24.3292L218.119 23.0268C217.525 23.9313 216.599 24.5753 215.217 24.6187C213.444 24.6838 211.903 23.5405 211.845 21.4783ZM218.083 20.7692L218.054 19.6838C217.504 19.4812 216.86 19.3582 216.078 19.3799C214.776 19.4161 214.031 20.1035 214.067 21.225V21.2829C214.096 22.3249 214.819 22.9038 215.839 22.8965C217.142 22.8676 218.119 21.9703 218.083 20.7692Z" fill="black"/>
                        <path d="M225.724 10.0675L228.148 9.99509L231.946 16.3265L235.326 9.78525L237.793 9.71289L238.206 23.7505L235.897 23.8156L235.608 13.888L232.07 20.4944H232.012L228.111 14.1268L228.401 24.0327L226.136 24.0978L225.724 10.0675Z" fill="black"/>
                        <path d="M243.357 20.5449V20.4219C243.292 18.1571 244.819 16.9849 247.069 16.9198C248.054 16.8908 248.777 17.05 249.508 17.2888L249.493 16.8257C249.45 15.3785 248.589 14.6839 247.142 14.7273C246.122 14.7562 245.304 15.1036 244.617 15.4436L243.9 13.6564C244.906 13.1282 245.941 12.7519 247.388 12.7085C248.77 12.6651 249.826 12.9979 250.55 13.6781C251.274 14.3583 251.664 15.393 251.7 16.7316L251.896 23.3308L249.667 23.3959L249.631 22.0934C249.038 22.9979 248.111 23.6419 246.729 23.6853C244.957 23.7504 243.415 22.6144 243.357 20.5449ZM249.595 19.8431L249.566 18.7577C249.016 18.5551 248.372 18.4321 247.59 18.4538C246.288 18.49 245.543 19.1774 245.579 20.2989V20.3568C245.608 21.3988 246.331 21.9777 247.352 21.9704C248.654 21.9342 249.631 21.0442 249.595 19.8431Z" fill="black"/>
                        <path d="M256.773 18.0267L256.766 17.8241C256.672 14.6186 258.669 12.3104 261.455 12.2236C262.982 12.1801 264.002 12.7084 264.906 13.5694L263.691 15.2699C263.112 14.7055 262.475 14.2424 261.513 14.2713C260.008 14.3147 258.987 15.7474 259.045 17.7735V17.8748C259.103 19.937 260.232 21.2901 261.773 21.2467C262.714 21.1961 263.307 20.7402 263.908 20.1034L265.174 21.5723C264.342 22.5419 263.314 23.2511 261.694 23.3017C258.937 23.3813 256.86 21.1744 256.773 18.0267Z" fill="black"/>
                        <path d="M269.696 8.33076L271.961 8.26562L272.214 16.7895L275.709 12.0066L278.394 11.927L274.993 16.3626L278.806 22.5493L276.201 22.6289L273.481 18.1499L272.301 19.6911L272.388 22.7374L270.123 22.8025L269.696 8.33076Z" fill="black"/>
                    </svg>


                </div>

            </section>
        </>
    )
}

export default BannerRegister;