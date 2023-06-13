import {
  SunIcon,
  MoonIcon,
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
} from "./Icons";
import Logo from "./Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className}  relative inline-flex overflow-hidden  group `}
    >
      {title}{" "}
      <span
        className={`h-[1px] w-full dark:bg-light bg-dark absolute  left-0 bottom-0.5  -translate-x-[90%] group-hover:w-full group-hover:translate-x-0 transition-transform ease duration-300  ${
          router.asPath === href ? "w-full translate-x-[0] " : ""
        } `}
      >
        &nbsp;
      </span>{" "}
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={() => handClick()}
      className={`${className}  relative inline-flex overflow-hidden  dark:text-dark text-light group my-2 `}
    >
      {title}{" "}
      <span
        className={`h-[1px] w-full dark:bg-dark bg-light absolute  left-0 bottom-0.5  -translate-x-[90%] group-hover:w-full group-hover:translate-x-0 transition-transform ease duration-300  ${
          router.asPath === href ? "w-full translate-x-[0] " : ""
        } `}
      >
        &nbsp;
      </span>{" "}
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isopen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isopen);
  };

  return (
    <header className="w-full px-32 py-10 font-medium  flex items-center justify-between dark:text-light relative md:py-2 md:px-12 sm:px-8 z-10 lg:px-16 ">
      <motion.button
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        whileInView={{ transition: { duration: 0.8, ease: "easeInOut" } }}
        className=" flex-col justify-start  items-start   hidden lg:flex"
        onClick={() => handleClick()}
      >
        <span
          className={`bg-dark dark:bg-light transition-all block h-0.5 w-6 rounded-sm ${
            isopen ? "rotate-45 translate-y-1 " : "-translate-y-0.5"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 transition-all w-6 rounded-sm my-0.5  ${
            isopen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all ${
            isopen ? "-rotate-45 -translate-y-1 " : "translate-y-0.5"
          } `}
        ></span>
      </motion.button>

      <div className=" flex justify-between w-full items-center lg:hidden">
        <Logo />
        <motion.nav
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Projects"} className="mx-4" />
          {/* <CustomLink href={"/articles"} title={"Articles"} className="ml-4" /> */}
        </motion.nav>

        <nav className="flex items-center justify-center flex-wrap  ">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={"https://twitter.com/Jolex_Dev"}
            className="w-6 mr-6"
            target={"_blank"}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={"https://github.com/brilliantmakanju"}
            className="w-6 mx-6"
            target={"_blank"}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={"https://www.linkedin.com/in/brilliantmakanju"}
            className="w-6 ml-6"
            target={"_blank"}
          >
            <LinkedInIcon />
          </motion.a>

          <button
            className="w-12 ml-5 flex items-center justify-center rounded-full p-1 text-dark dark:bg-light dark:text-dark    "
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      <div className=" items-end  w-full justify-end hidden lg:flex">
        <Logo />
      </div>
      {isopen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`min-w-[70vw] flex flex-col justify-between items-center  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 z-[20]  dark:text-dark text-light transition-all duration-300 ease-in-out  `}
        >
          <nav className="flex flex-col justify-start items-start">
            <CustomMobileLink
              href={"/"}
              title={"Home"}
              toggle={() => handleClick}
            />
            <CustomMobileLink
              href={"/about"}
              title={"About"}
              toggle={() => handleClick()}
            />
            <CustomMobileLink
              href={"/projects"}
              title={"Projects"}
              toggle={() => handleClick()}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2  ">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={"https://twitter.com/Jolex_Dev"}
              className="w-6 mr-6 sm:mx-1 "
              target={"_blank"}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={"https://github.com/brilliantmakanju"}
              className="w-6 mx-6 rounded-full dark:border-dark dark:border-solid "
              target={"_blank"}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={"https://www.linkedin.com/in/brilliantmakanju"}
              className="w-6 ml-6"
              target={"_blank"}
            >
              <LinkedInIcon />
            </motion.a>

            <button
              className="w-6 ml-5 flex items-center justify-center rounded-full p-1 text-dark bg-light dark:bg-dark dark:text-light    "
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBar;
