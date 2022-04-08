import { ArrowRightIcon } from "@chakra-ui/icons";
import { Textarea, Container, useColorModeValue, Slider, SliderTrack, SliderFilledTrack, Stack, IconButton } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { saveLocal } from "../utils/sesh";
import { emitToSocket } from "../utils/socket-client";
import Section from "./section"

type Prop = {
  formState:Boolean,
  setFormState:Function,
  handleAnim:Function
}

function Form({formState, setFormState, handleAnim}:Prop) {
    const [input, setInput] = useState('');

    const handleText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let val = e.target.value;
        let invalid = val.match(/[\n]/g);
        if(invalid) return
        setInput(val);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const date = new Date().getTime();
      emitToSocket({name: 'anon', text:input});
      saveLocal({name: 'anon', text:input, date: date})
      setFormState(false);
      handleAnim();
      setInput('');
    }

    return(
      <Container>
        <Section delay={0.1}>
          <form
            onSubmit={(e)=>handleSubmit(e)}
          >
              <Textarea 
                id='textid'
                name='text'
                bg={useColorModeValue('rgba(0, 0, 0, 0.1)','rgba(255, 255, 255, 0.1)')} 
                placeholder='type any random diwa/thoughts here'
                _placeholder={{color:useColorModeValue('#0c3455', '#e9e29f')}}
                value={input}
                onChange={(e)=>handleText(e)}
                maxLength={100}
                focusBorderColor={'none'}
                borderRadius={0}
                visibility={formState ? 'visible' : 'hidden'}
              />
              <Stack direction={'row'} visibility={formState ? 'visible' : 'hidden'}>
                <Slider 
                  aria-label='slider-ex-1'
                  cursor={'default'}
                  colorScheme={input.length >= 90 ? 'red' : input.length >= 65 ? 'orange' : 'blue'}
                  value={input.length} 
                  isReadOnly>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                </Slider>
                <IconButton
                  as='button'
                  icon={<ArrowRightIcon />}
                  type='submit'
                  aria-label="Submit"
                  _focus={{border:'none'}}
                  bg={useColorModeValue('#0c3455', '#e9e29f')}
                  color={useColorModeValue('white', '#1c1c1f')}
                  borderRadius={0}
                  width={'100px'}
                  isDisabled={input.length<=2}
                />
              </Stack>
          </form>
        </Section>
      </Container>
    )
}

export default Form