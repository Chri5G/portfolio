import { useState } from 'react'
import { motion } from 'framer-motion';

function Experience() {

  const [flipped, setFlipped] = useState([false, false, false]);
  const[isAnimating, setIsAnimating] = useState([false, false, false])

  const handleFlip = (index) => {
    console.log(isAnimating)
    if (!isAnimating[index]) {
      setIsAnimating(true);
      const newFlipped = [...flipped];
      console.log(newFlipped)
      newFlipped[index] = !newFlipped[index];
      setFlipped(newFlipped);
    }
  };

  return (
    <>
    <motion.div className='exp'>
      <h2 className='text-4xl'>Experience</h2>
      <hr />
      <div className="grid grid-cols-3 gap-4 p-3">
        <motion.div className="bg-blue-500 p-4 flip-card rounded-lg cursor-pointer"
          onClick={() => handleFlip(0)}
          initial = {{opacity: 0, y: '20vh'}}
          animate = {{opacity: 1, y: 0, rotateY: flipped[0] ? 180: 0}}
          transition={{
            y: {duration: 0.5},
            opacity: {duration: 3},
            rotateY: {duration: 0.6}
          }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {!flipped[0] && !isAnimating[0]? 
            <div className='card-front'>
              <p className='text-3xl font-bold'>Noveon Magentics</p>
              <p className='text-2xl'>Full Stack Developer</p>
            </div>
            :
            <div className='card-back'>
              <li>Engineered robust RESTful APIs and microservices architecture, optimizing full-stack development workflow with Ruby on Rails and React for seamless data operations</li>
              <li>Streamlined deployment processes through Docker containerization and Nginx configuration, ensuring consistent application performance across environments</li>
              <li>Developed automated data processing solutions, integrating Python scripts for efficient Excel file parsing and database management</li>
            </div>
          }
        </motion.div>
        <motion.div className="bg-red-500 p-4 flip-card bg-cover rounded-lg cursor-pointer"
          onClick={() => handleFlip(1)}
          initial = {{opacity: 0, y: '20vh'}}
          animate = {{opacity: 1, y: 0, rotateY: flipped[1] ? 180: 0}}
          transition={{
            y: {duration: 1},
            opacity: {duration: 3},
            rotateY: {duration: 0.6}
          }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {!flipped[1] ? 
            <div className='card-front'>
              <p className='text-3xl font-bold'>Cognizant</p>
              <p className='text-2xl'>Data Engineer</p>
            </div>
          :
            <div className='card-back'>
              <li>Engineered ETL workflows using Informatica and Teradata, optimizing data integration processes and implementing robust data quality checks for enterprise solutions</li>
              <li>Developed Python scripts for server configuration management, streamlining user access controls and enhancing system security protocols</li>
              <li>Orchestrated Unix server operations and managed repository configurations, collaborating with teams to implement efficient data processing solutions</li>
              <li>Maintained data pipeline integrity through proactive monitoring of session logs, implementing corrective measures for failed workflows and system abnormalities</li>
            </div>
          }
        </motion.div>
        <motion.div className="bg-green-500 p-4 flip-card rounded-lg cursor-pointer"
          onClick={() => handleFlip(2)}
          initial = {{opacity: 0, y: '20vh'}}
          animate = {{opacity: 1, y: 0, rotateY: flipped[2] ? 180: 0}}
          transition={{
            y: {duration: 1.5},
            opacity: {duration: 3},
            rotateY: {duration: 0.6}
          }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {!flipped[2] ? 
            <div className='card-front'>
              <p className='text-3xl font-bold'>Upwork</p>
              <p className='text-2xl'>Full Stack Developer</p>
            </div>
          :
            <div className='card-back'>
              <li>Modernized legacy Ruby on Rails applications through strategic gem updates and React-based UI enhancements, ensuring optimal system performance and user experience</li>
              <li>Executed comprehensive framework updates while maintaining code integrity, focusing on security patches and performance optimization</li>
            </div>
          }
        </motion.div>
      </div>
    </motion.div>
    </>
  )
}

export default Experience;