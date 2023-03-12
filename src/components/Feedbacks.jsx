import React from 'react'
import { motion } from 'framer-motion'

import { SectionWrapper } from '../hoc'
import { testimonials } from '../constants'

import { styles } from '../styles'

import { textVariant, fadeIn } from '../utils/motion'

const TestimonialCard = ({index, testimonial, name, designation, company, image}) => {
  return (
    <motion.div 
    variants={fadeIn('','spring', index*0.5, 0.75)}
    className='bg-black-200 rounded-3xl p-10 w-full xs:w-[320px]'
    >
      <p className='text-white font-black text-[48px]'>"</p>

      <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>
        {testimonial}
      </p>
      <div className='mt-7 flex justify-between items-center'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px] italic'>
            {designation} of {company}
          </p>
        </div>
        <img 
          src={image}
          alt={`feedack by ${name}`}
          className="w-10 h-10 rounded-full"
        />
      </div>
      </div>

    </motion.div>
  )
}


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`w-full bg-tertiary ${styles.padding} rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>what others say</p>
          <h2 className={styles.sectionHeadText}>Feedback.</h2>
        </motion.div>
      </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')