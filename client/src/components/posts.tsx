import { Container, Heading, Spinner } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { listenToSocket } from "../utils/socket-client"
import Paragraph from "./paragraph"
import Section from "./section"

function Posts() {
  const [currList, setCurrList]:any[] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animLoad, setAnimLoad] = useState(true);
  
  let list:any[] = [];
  let offset = 0;
  let newReady = true;

  const addPage = (firstList:any[] = []) => {
    if(newReady && firstList.length < 1) {

      newReady = false;

      setAnimLoad(true);
      const tmp = list.slice(offset*10, (offset*10)+10);

      //@ts-ignore
      if(tmp.length >= 1 && list.length >= offset*10) {
        setCurrList((prevCurrList: any) => {
          return [...prevCurrList, ...tmp];
        })

        offset++
      }
      
      setTimeout(()=>{
        newReady = true;
      },250)

    } else if (firstList.length >= 1) {
      
      setAnimLoad(true);
      const tmp = firstList.slice(offset*10, (offset*10)+10);
      //@ts-ignore
      if(tmp.length >= 1) {

        setCurrList((prevCurrList: any) => {
          return [...prevCurrList, ...tmp];
        })

        offset++
      }
    }
  }

  const detectBottom = (e:any) => {
    const a = e.target.documentElement.scrollTop;
    const b = window.innerHeight;
    const c = e.target.documentElement.scrollHeight;

    if(a + b + 1 >= c) {
      newReady && addPage();
    }

  }

  const handleSocket = (obj:any) => {
    setAnimLoad(false);
    setCurrList((prevCurrList: any) => {
      return [obj, ...prevCurrList];
    })

    setTimeout(()=>{
      newReady = true;
    },250)
  }

  useEffect(()=> {
    fetch('/api/data').then(res=>

        res.json().then(obj => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          list = obj.data;
          addPage(obj.data);
          listenToSocket(handleSocket);
          setLoading(false);

        }).catch(err => {
          console.log('fetch error:',err);
      
        })
    ).catch(err=>setLoading(true));

  }, [])

  useEffect(()=>{
    window.addEventListener("scroll", detectBottom, false);
    addPage();
  }, [])

  return(
    <>
      <Container>
        {
          loading ? 
          <Spinner ml={'50%'} mt={'50%'} /> : 
          currList.map((obj:any, i:any) => {
            return(
                  <Container key={`cs-${i}`}>
                    <Section delay={0} firstLoad={animLoad}>
                      <Heading as="h3" variant="section-title">
                        {obj.name}
                      </Heading>
                      <Paragraph>
                      "{obj.text}"
                      </Paragraph>
                    </Section>
                  </Container>
            )
          })
        }
      </Container>
    </>
  )
}

export default Posts
