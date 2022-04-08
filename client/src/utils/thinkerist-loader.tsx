// credits to craftz.dog

import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ThinkeristSpinner = () => (
  <Spinner
    size="xl"
    color='var(--backT)'
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const ThinkeristContainer = forwardRef(({ children }:any, ref:any) => (
  <Box
    ref={ref}
    display='flex'
    justifyContent={'center'}
    alignItems={'center'}
    m="auto"
    style={{
      width: "40vw",
      height: "40vw",
      maxWidth: "300px",
      maxHeight: "300px"
    }}
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <ThinkeristContainer>
      <ThinkeristSpinner />
    </ThinkeristContainer>
  )
}

export default Loader