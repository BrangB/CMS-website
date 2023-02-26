import React from 'react'
import { motion} from 'framer-motion'

const Animate = {
    initial : {opacity : 0 , scale: .5},
    animate : {opacity : 1, scale: 1},
    exit : {opacity : 0, scale: .5},
    // initial : {opacity : 0 , x: 100},
    // animate : {opacity : 1 , x: 0},
    // exit : {opacity : 0 , x: -100},
    // transition : { ease: "easeOut", duration: 1 }
}
function Animation({children}) {
  return (
    <motion.div
    variants={Animate} initial="initial" animate="animate" exit="exit" transition={{ ease: "easeOut", duration: .4, delay: .1 }}
    >
        {children}
    </motion.div>
  )
}

export default Animation