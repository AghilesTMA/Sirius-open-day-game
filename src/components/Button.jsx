import React from 'react'
import {motion} from 'framer-motion'

const Button = ({content,className}) => {
  return (
    <motion.button
              whileTap={{scale:.9}}
              whileHover={{scale:1.05}}
              transition={{type:"spring"}}
              style={{
                backgroundImage:
                  "radial-gradient(556.54% 76.35% at 19.06% 71.23%, rgba(140, 58, 235, 0.80) 0%, #4B5AF2 100%)",
              }}
              className={className}
            >
              {content}
            </motion.button>
  )
}

export default Button