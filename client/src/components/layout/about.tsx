import { Container, Heading, Stack } from '@chakra-ui/react';
import Section from '../section';
import Paragraph from '../paragraph';

function About() {

  return(
      <>
        <Container>
          <Section delay={0.1} >
            <Stack align={'center'}>
              <Heading mt={'10%'} as="h1" size={'xl'} mb={2} >
                diw4
              </Heading>
              <Paragraph>
                a demo of a scroller made with mern, chakra-ui and stuff where anonymous users get to   post  less than a 100 text for every minute
              </Paragraph>
              <Paragraph>
                i plan to add seo and stuff if this site reached a numerous post so do just type in     whatever u like. btw i got the free 3d thinker model from <a href='https://sketchfab.com/propersiaclan'>D444rkGhost</a>
              </Paragraph>
            </Stack>
          </Section>
        </Container>
      </>
  )
}

export default About