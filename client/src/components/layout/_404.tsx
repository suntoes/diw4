import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import Section from '../section';

function NotFound() {

  return(
      <>
        <Container>
          <Section delay={0.1} >
            <Stack align={'center'}>
              <Heading mt={'20%'} as="h1" size={'xl'}>
                404
              </Heading>
              <Text>page not found or does not exist</Text>
            </Stack>
          </Section>
        </Container>
      </>
  )
}

export default NotFound