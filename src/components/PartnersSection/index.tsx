import accLogo from "../../assets/acc-logo.jpg";
import hackIntlLogo from "../../assets/hackIntl-logo.jpg";
import hackKosiceLogo from "../../assets/hackkosice-logo.jpg"

export function PartnersSection(){
    return(
        <div className={`p-20 my-auto`} id={`partners`}>
            <div className={`mb-11`}>
                <h1 className="text-3xl lg:text-4xl font-semibold leading-none mb-3">
                    <span className={`mr-3`} >
                        Our
                    </span> 
                    <span className={`text-[#48ABDD]`}>
                        Success Partners
                    </span>
                </h1>
                <p className={`font-light text-1xl text-[#CECED0]`}>
                    We worked together before, would love to see you with us
                </p>
            </div>
            <div className={`flex flex-col justify-center items-center gap-5 md:flex-row`}>
                <div>
                    <img src={accLogo} alt="acc-logo" className={`max-w-sm`}/>
                </div>
                <div>
                    <img src={hackIntlLogo} alt="acc-logo" className={`max-w-sm`}/>
                </div>
                <div>
                    <img src={hackKosiceLogo} alt="acc-logo" className={`max-w-sm`}/>
                </div>
            </div>
        </div>
    )
}