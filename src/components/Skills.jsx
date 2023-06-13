import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex justify-center items-center rounded-full font-semibold bg-dark dark:bg-light dark:border-light dark:text-dark capitalize text-light py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold  "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition:{ duration: 1.5 } }} 
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 mb-10 ">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center dark:bg-circleDark bg-circleLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circleLightLg lg:dark:bg-circleDarkLg md:bg-circleLightMd md:dark:bg-circleDarkMd sm:bg-circleLightSm sm:dark:bg-circleDarkSm   ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark  text-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
            Web
        </motion.div>
        <Skill name={'python'} x="-20vw" y="2vw"  />
        <Skill name={'typescript'} x="-5vw" y="-23vw"  />
        <Skill name={'javascript'} x="20vw" y="-1vw"  />
        <Skill name={'nextjs'} x="0vw" y="24vw"  />
        <Skill name={'react'} x="-25vw" y="-15vw"  />
        <Skill name={'bootstrap'} x="15vw" y="-15vw"  />
        <Skill name={'tailwindcss'} x="32vw" y="-5vw"  />
        <Skill name={'django'} x="-15vw" y="12vw"  />
        <Skill name={'rest api'} x="0vw" y="12vw"  />
        <Skill name={'sqlite'} x="23vw" y="-24vw"  />
        <Skill name={'mysql'} x="18vw" y="12vw"  />
        <Skill name={'next Auth'} x="0vw" y="-12vw"  />
      </div>
    </>
  );
};

export default Skills;
