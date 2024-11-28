import personalImg from "../assets/IMG_1272.jpg"; // Correct the image path to use the new file

const Hero = () => {
    return (
        <section className="flex min-h-screen flex-wrap items-center">
            <div className="w-full md:w-1/2">
                <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
                    Sai Sudha Pidugu
                </h2>
                <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                    Hello there! 👋🏻
                </p>
                <p className="mb-8 p-2 text-xl" >
                    I’m a passionate Data Engineer and Analyst with expertise in Power BI, Python, and SQL, creating scalable MLOps pipelines and transforming data into actionable insights. I also have experience in full-stack development using  JavaScript, and React, delivering solutions that drive business growth. My focus is on optimizing processes and enhancing user experiences through impactful data-driven technology.
                </p>
            </div>
            <div className="w-full md:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src={personalImg} width={550} height={550} alt="Sai Sudha Pidugu" className="rounded-3xl" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

