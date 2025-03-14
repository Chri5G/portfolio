import WebsitePreview from './WebsitePreview';
import { titleVariants }from './Variants';
import { motion } from 'framer-motion';


function Projects() {
  return (
    <>
    <motion.h2 className='text-4xl p-10 project font-righteous text-center'
      variants={titleVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      Projects
    </motion.h2>
    <hr className='w-[50%] mx-auto' />
    <div className='grid grid-cols-2 p-10 gap-8'>
      <WebsitePreview url={'https://www.kingdom-code.com'}/>
      <WebsitePreview url={'https://www.lg-signs.com'}/>
    </div>
    </>
  )
}

export default Projects;
