import { motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode()


  return (
    <motion.div
      style={{ display: 'inline-block' }}
      key={useColorModeValue('light', 'dark')}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2}}
    >
      <IconButton
        aria-label="Toggle theme"
        bg={useColorModeValue('#0c3455', '#e9e29f')}
        borderRadius={0}
        color={useColorModeValue('white', '#1c1c1f')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={()=>{
          setTimeout(()=>{
            toggleColorMode()
          }, 100);
        }}
      ></IconButton>
    </motion.div>
  )
}

export default ThemeButton