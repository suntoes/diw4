import { lazy, Suspense } from 'react';
import { Container } from '@chakra-ui/react';
import NavBar from '../navbar';
import ThinkeristLoader  from '../../utils/thinkerist-loader'

const Thinkerist  = lazy(() => import('../thinkerist'));

function Main() {

  return(
      <>
          <NavBar />
          <Container display={'flex'} mb={-12}>
            <Suspense fallback={<ThinkeristLoader />}>
              <Thinkerist />
            </Suspense>
          </Container>
      </>
  )
}

export default Main