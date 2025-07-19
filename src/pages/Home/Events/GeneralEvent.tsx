export function GeneralEvent() {
    return (
        <div className={`flex flex-col gap-5`}>
            <div
                className={`bg-blend-luminosity bg-center`}
                style={{
                    backgroundImage: `url(https://github.com/Mohamed3Okasha/mena-hackathons/blob/main/src/assets/hero-section-bg.png?raw=true)`,
                    backgroundColor: `rgba(26, 67, 88, 1)`,
                    backgroundSize: `cover`,
                }}>
                <div className={`py-4 sm:py-40 px-[5%] sm:px-[20%] my-auto flex flex-col gap-11 items-center`}>
                    <p className={`font-medium text-2xl	sm:text-4xl text-primary`}>
                        Think Sustainability
                    </p>
                    <p className={`font-medium text-xl sm:text-3xl`}>
                        AI for Impact
                    </p>
                </div>
            </div>
            {/* <div className={`px-[10%] md:px-[30%]`}>
                <p>
                    ThinkSustainability: AI for Impact is a multi-sectoral event designed to explore the transformative power of Artificial Intelligence (AI) across critical domains that shape societies. It brings together technologists, entrepreneurs, policymakers, researchers, and youth to collaboratively discuss how AI can be leveraged to drive meaningful and inclusive development across Smart Cities, Sustainable Agriculture, and Education.
                </p>
                <br />
                <p>
                    The theme is inspired by AI for Good Summit by UN ITU and aligns with regional and international agendas - including the UN SDGs and various EU innovation and education frameworks - to explore how AI can be designed and deployed responsibly for long-term public good.

                </p>
            </div> */}
            <div className={`flex justify-center h-fit`}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfPcHk24nqEHnhP9MCCROuwdK3Mh1X_GwaLq8G3qvXmHc8YtA/viewform?embedded=true" width="690" height="1700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )
}