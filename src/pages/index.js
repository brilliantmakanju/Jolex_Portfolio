import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Dots from "@/components/Dots";
import { motion } from "framer-motion";
import HireMe from "@/components/HireMe";
import Layout from "@/components/Layout";
import { LinkArrow } from "@/components/Icons";
import Transition from "@/components/Transition";
import AnimatedText from "@/components/AnimatedText";
import profilePic from "../../public/assest/me2.jpg";
import profileDemonPic from "../../public/images/profile/developer-pic-1.png";

const ImageMoti = motion(Image);

export default function Home() {
  return (
    <>
      <Head>
        <title>Jolex Developer</title>
        <meta
          name="description"
          content="Elevate your digital presence with a passionate full stack developer. I specialize in transforming visionary concepts into captivating digital experiences. With a holistic approach to web development, I bring together cutting-edge technologies and meticulous attention to detail to deliver seamless functionality and immersive designs. Explore my portfolio and witness the fusion of code and design that empowers businesses and captivates users. Let's collaborate and bring your digital aspirations to life."
        />
      </Head>
      <Transition />
      <main className="flex items-center text-dark w-full min-h-screen relative pb-10 ">
        {/* <Dots /> */}
        <Layout className="pt-0 md:p-16 h-screen flex justify-center items-center  sm:pt-8 ">
          <div className="flex items-center  justify-between lg:gap-[10px] gap-[200px] w-full lg:flex-col-reverse">
            <div className=" w-1/2 flex flex-col items-center self-center lg:w-full ">
              <AnimatedText
                text="Transforming Ideas into Reality through Code and Design."
                className="!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
              />
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="my-4 text-base font-medium dark:text-light lg:text-center md:text-sm sm:text-xs "
              >
                Welcome to my portfolio! I am a passionate and experienced Full
                Stack Web Developer with a strong focus on building innovative
                and user-friendly web applications. With expertise in both
                front-end and back-end development, I strive to create seamless
                and dynamic digital experiences.
              </motion.p>
              <div className="flex items-center self-start mt-2 lg:self-center ">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="md:p-2 md:text-base flex items-center  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-light bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark transition ease-in-out duration-300 border border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:brilliantmakanju5@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
                >
                  Contact
                </Link>
              </div>
            </div>
            <motion.div className="w-1/2 md:w-full  ">
              <ImageMoti
                initial={{ x: "100px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                priority
                alt="Brilliant"
                src={profilePic}
                className="w-[70%] h-auto   bg-[#ffae00] p-3 rounded-2xl overflow-visible mt-[-100px] sm:mt-[0px] lg:hidden md:inline-block md:w-full"
                sizes="(max-width: 768px) 100vw , (max-width :1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  );
}
