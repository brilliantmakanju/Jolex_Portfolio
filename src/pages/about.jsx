import profilePic from "../../public/assest/me.jpg";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Transition from "@/components/Transition";

const About = () => {
  return (
    <>
      <Head>
        <title>Jolex | About Page</title>
        <meta
          name="description"
          content="Unveiling the Story of a Passionate Full Stack Developer: Crafting Innovative Digital Experiences

Welcome to my About Me page, where passion and innovation converge in the world of full stack development. With a comprehensive skill set and a keen eye for design, I create seamless and captivating digital experiences.

As a seasoned professional, I bring expertise in front-end and back-end development, ensuring robust and high-performing solutions. I believe in the power of collaboration and continuous learning to stay at the forefront of emerging technologies.

Explore my portfolio to witness the results of my unwavering dedication and meticulous attention to detail. Let's embark on a transformative journey together, where creativity meets code and dreams turn into reality.

Join me in crafting innovative digital experiences that captivate and inspire."
        />
      </Head>
      <Transition />
      <main className="w-full flex flex-col justify-center items-center dark:text-white ">
        <Layout className="pt-16">
          <AnimatedText
            text="Igniting Purpose with Passion"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-7 md:flex md:justify-center md:items-center md:flex-col-reverse gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start ">
              <h2 className="capitalize mb-4 text-lg font-bold text-dark/75 dark:text-light">
                Who i am
              </h2>
              <p className="font-medium ">
                As a passionate and dedicated full stack web developer, {"I'm"}
                Jolex, also known as Brilliant Makanju. At the age of 18, I
                embarked on my coding journey, and for the past three years,
                {"I've"} been honing my skills in Django, React, Next.js, MySQL,
                SQLite, Git, Figma, Python, and JavaScript (with some exposure
                to TypeScript). While I {"haven't"} had professional experience
                yet,
                {"I'm"} constantly expanding my knowledge and staying updated
                with the latest industry trends. When {"I'm"} not coding, you
                can find me immersed in gaming, particularly as a Call of Duty
                player, or conducting research to enhance my problem-solving
                abilities. Feel free to reach out to me
              </p>
            </div>
            <div className="col-span-3 relative group h-max rounded-2xl border-2 border-solid border-dark bg-[#ffae00] dark:bg-dark dark:border-light transition duration-300 ease-in-out p-8 ">
              <div className="absolute top-0  group-hover:right-3   -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark transition duration-300 ease-in-out dark:bg-light " />
              <Image
                alt={"Jolex"}
                src={profilePic}
                className="w-full h-auto rounded-2xl "
              />
            </div>
          </div>
          <Skills />
          {/* <Experience /> */}
        </Layout>
      </main>
    </>
  );
};

export default About;
