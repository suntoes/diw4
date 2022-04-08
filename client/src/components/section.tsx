
import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

//@ts-ignore
const Section = ({ children, delay = 0, firstLoad = true}) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    //@ts-ignore
    transition={firstLoad ? { duration: 0.8, delay } : { duration: 0 }}
    mb={6}
    
  >
    {children}
  </StyledDiv>
)

export default Section