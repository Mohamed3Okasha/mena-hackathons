import podcastExample from "../../assets/podcast-example.png"
export function HeroSection(){
    return(
        <div className="grid grid-cols-5 py-8"> 
           <div className={`col-span-2 px-[80px] my-auto`}>
                <h1 className="text-4xl font-extrabold leading-none">
                    Podcast
                </h1>
                <p>
                    This is a podcast about Utilising technoogy in favor of sustainability, by bringing minds from different cultures to share their expertis ewith our lovely audience
                </p>
           </div>
           <div className={`col-span-3 flex justify-center max-w-fit`}>
                <img src={podcastExample} alt={`podcast example`} className={`w-[75%]`}/>
           </div>
        </div>
    )
}