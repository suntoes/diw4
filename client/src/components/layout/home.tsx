import { useEffect, useRef, useState } from 'react';
import { Container } from '@chakra-ui/react';
import Form from '../form';
import Posts from '../posts';
import { motion, useAnimation } from 'framer-motion';
import { getLocal } from '../../utils/sesh';

function Main() {
  const [formState, setFormState] = useState(true);
  const [triggerAnim, setTriggerAnim] = useState(2);
  const isMounted = useRef(false);

  const controlsA = useAnimation();
  const controlsB = useAnimation();

  useEffect(()=>{

    const sesh = getLocal();

    if(sesh) {
      const date:number = new Date().getTime()

      if(date - sesh.date >= (1 * 60 * 1000) ) {
        setFormState(true);
      } else {
        setFormState(false);
        controlsB.start(()=>({
          y: -80,
          transition:{ duration: 0.8 }
        }))
      }
    }

    setInterval(()=>{
      const newSesh = getLocal();
      if(!newSesh) return

      const newDate:number = new Date().getTime();
      const res = newDate - newSesh.date >= (1 * 60 * 1000);

      if(res) setTriggerAnim(1);
      if(!res) setTriggerAnim(0);

    }, 10)

  },[])

  useEffect(()=>{
      if(isMounted.current){
        if(triggerAnim) return handleRevertAnim();
        handleAnim()
      } else {
       isMounted.current = true;
      }
  }, [triggerAnim])

  const handleAnim = () => {
    setTimeout(()=>setFormState(false), 800);

    controlsA.start(()=>({
      opacity: 0,
      y: 100,
      transition:{ duration: 0.8 }
    }))

    controlsB.start(()=>({
      y: -80,
      transition:{ duration: 0.8 }
    }))

  }

  const handleRevertAnim = () => {
    setFormState(true)

    controlsA.start(()=>({
      opacity: 1,
      y: 0,
      transition:{ duration: 0.8 }
    }))

    controlsB.start(()=>({
      y: 0,
      transition:{ duration: 0.8 }
    }))
    
  }

  return(
      <>
        <motion.div
          animate={controlsA}
        >
          <Form formState={formState} setFormState={setFormState} handleAnim={handleAnim}/>
        </motion.div>
        <motion.div
          animate={controlsB}
        >
          <Container>
          <Posts/>
          </Container>
        </motion.div>
      </>
  )
}

export default Main