import facebookIcon from "../../assets/facebook-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg"
import twitterIcon from "../../assets/twitter-icon.svg"


export function Footer(){
    return(
        <div className={`bg-[#080A16] p-5 sm:p-20 pb-0 sm:pb-0 my-auto`} id={`contact`}>
            <div className={`mb-11`}>
                <h1 className="text-2xl lg:text-3xl font-semibold leading-none mb-3">
                    <span className={`mr-3`} >
                        Contact Us
                    </span> 
                </h1>
                <p className={`font-light text-1xl text-[#CECED0]`}>
                    We're friendly
                </p>
            </div>
            <div className={`flex justify-center items-center gap-5`}>
                
                <a href={`https://www.linkedin.com/company/menahacks`}>
                    <img src={linkedinIcon} alt="acc-logo" className={`max-w-sm`}/>
                </a>
                <a href={`https://facebook.com/menahacks`}>
                    <img src={facebookIcon} alt="acc-logo" className={`max-w-sm`}/>
                </a>
                <a href={`https://instagram.com/menahacks`}>
                    <img src={instagramIcon} alt="acc-logo" className={`max-w-sm`}/>
                </a>
                <a href={`https://twitter.com/menahacks`}>
                    <img src={twitterIcon} alt="acc-logo" className={`max-w-sm`}/>
                </a>
            </div>
            <div className={`pt-20 pb-5 flex flex-col sm:flex-row justify-between items-center`}>
                <p className={`font-light text-[#CECED0] text-left`}>© 2023 MENA Hackathons. All rights reserved.</p>
                <p className={`font-light text-[#00FF95] text-right`}>Developed by MH Tech House</p>
            </div>
        </div>
    )
}