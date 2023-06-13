import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import blog from "../../public/prosb/blog.png";
import Transition from "@/components/Transition";
import school from "../../public/prosb/school.png";
import airiter from "../../public/prosb/airiter.png";
import AnimatedText from "@/components/AnimatedText";
import movieapp from "../../public/prosb/movieapp.png";
import twitter from "../../public/prosb/twitters.png";
import { GithubIcon, LinkArrow } from "@/components/Icons";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, link, img, summary, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative dark:bg-dark dark:text-light dark:border-light rounded-3xl rounded-br-2xl border border-solid border-dark bg-orange-500 text-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      <div className="absolute top-0 dark:bg-light group-hover:right-3   -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark transition duration-300 ease-in-out xs:-right-3 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] " />

      <Link
        href={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        target={"_blank"}
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw , (max-width :1200px) 50vw, 33vw"
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-start pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className=" text-light flex items-start font-medium text-xl">
          {type}
        </span>
        <Link
          target={"_blank"}
          href={link}
          className="hover:underline underline-offset-3 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm ">
            {title}
          </h2>
        </Link>
        <p className="px-3 my-2 font-medium text-light dark:bg-dark dark:text-light  ">
          {summary}
        </p>
        <div className="mt-2 flex items-center justify-start ">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 dark:bg-light dark:text-dark dark:border-light px-6 text-lg font-semibold flex sm:px-4 sm:text-base  "
            href={link}
            target={"_blank"}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center dark:bg-dark dark:text-light dark:border-light rounded-2xl p-6 relative border border-solid border-dark bg-orange-500 text-light shadow-2xl xs:p-4 ">
      <div className="absolute top-0  group-hover:right-3  dark:bg-light -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark transition duration-300 ease-in-out md:-right-2 md:w-[101%] md:h-[102%] xs:rounded-[1.5rem] " />

      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        target={"_blank"}
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw , (max-width :1200px) 50vw, 33vw"
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-start">
        <span className="text-light py-2 flex items-start font-medium text-xl">
          {type}
        </span>
        <Link
          target={"_blank"}
          href={link}
          className="hover:underline underline-offset-3 "
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
        </Link>
        {/* <p className="px-3 my-2 font-mdeium text-dark ">{summary}</p> */}
        <div className="w-full mt-2 flex items-center justify-between ">
          <Link
            className="ml-4 text-lg font-semibold underline md:text-base  "
            href={link}
            target={"_blank"}
          >
            Visit
          </Link>
          <Link href={github} target={"_blank"} className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Jolex | Project Page</title>
        <meta
          name="description"
          content="Discover the Essence of Innovation: Unveiling My Project Showcase

          Explore an array of meticulously crafted projects that showcase my passion for cutting-edge technology and problem-solving. Witness the seamless fusion of artistry and functionality, as each project represents a unique journey in transforming ideas into tangible realities.
          
          From dynamic web applications to intuitive mobile interfaces, these projects embody my commitment to pushing boundaries and delivering exceptional experiences. Dive into the realm of innovative solutions and discover the power of code in solving real-world challenges.
          
          Experience intuitive interfaces, robust back-end systems, and seamless integrations that elevate user experiences. Each project reflects my dedication to mastering full-stack development and delivering solutions that make an impact.
          
          Join me on this journey through innovation, where imagination meets code and where the possibilities of technology come to life. Welcome to my Project Showcase."
        />
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="A Showcase of Innovative Projects"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-10 ">
            <div className="col-span-12">
              <FeaturedProject
                img={twitter}
                type="Featured Project"
                summary={
                  "My Twitter Clone is a full-stack web application built using Django, Next.js, NextAuth, Tailwind CSS and MySQL. It offers users a familiar Twitter-like experience by allowing them to create an account, post tweets, follow other users, and engage with content through liking and retweeting tweets."
                }
                link={"https://twitter-frontend-clone.vercel.app"}
                github={"https://github.com/brilliantmakanju/twitterFrontend"}
                title={"Twitter Clone"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                img={airiter}
                type="Featured Project"
                link={"https://airiter.netlify.app/"}
                github={"https://github.com/brilliantmakanju/AiResume"}
                title={
                  "Ai Resume Generator Template with Nextjs and Tailwindcss"
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                img={blog}
                type="Featured Project"
                link={"https://code-craftsmen.netlify.app/"}
                github={"https://github.com/brilliantmakanju/next-blog"}
                title={"Blog web app built using Next.js and Tailwindcss"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                img={movieapp}
                type="Featured Project"
                link={"https://animecastle.netlify.app"}
                github={"https://github.com/brilliantmakanju/Animeworld"}
                title={
                  "Movie web app Landing Page built using Next.js and Tailwindcss"
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                img={school}
                type="Featured Project"
                link={"https://scholarsprint.netlify.app/"}
                github={"https://github.com/brilliantmakanju/El-Project"}
                title={
                  "Educational web app Landing Page built using Next.js, Framer-Motion and Tailwindcss"
                }
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
