import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt options={{ max:45, scale: 1, speed:40 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient rounded-full flex justify-center items-center cursor-pointer w-10 h-10"
            >
              <img
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='font-bold text-white text-[24px]'>{name}</h3>
          <p>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p key={index} className={`${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>my projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('','', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac. Proin fermentum leo vel orci. Diam maecenas ultricies mi eget mauris pharetra et. At in tellus integer feugiat scelerisque. Etiam erat velit scelerisque in. Nec ullamcorper sit amet risus nullam eget felis. Et sollicitudin ac orci phasellus egestas tellus. Est placerat in egestas erat imperdiet sed. Fringilla est ullamcorper eget nulla.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work')