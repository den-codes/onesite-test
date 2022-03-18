import '../styles/globals.css'
import Layout from '../components/Layout';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to('.textbox', {
      color: 'white',
      scrollTrigger: {
          trigger: '.textbox',
          start: 100,
          end: 700,
          scrub: 1,
          toggleActions:'restart'
      },
  })
  gsap.to('.textbox', {
    color: 'black',
    scrollTrigger: {
        trigger: '.textbox',
        start: 800,
        end: 300,
        scrub: 1,
        toggleActions:'restart'
    },
})

    //FIRST BOX 
    gsap.to('.box-1', {
        y: '-100vh',
        duration: 2,
        scrollTrigger: {
            trigger: '.box-1',
            start: 200,
            end: '100vh',
            scrub: 1,
            toggleActions:'restart reverse reverse resume'
        },
    })
    //SECOND BOX    
    gsap.to('.box-2', {
        y: '-100vh',
        duration: 5,
        scrollTrigger: {
            trigger: '.box-2',
            start: 250,
            end: '100vh',
            scrub: 4,
            toggleActions:'restart reverse reverse resume'
        },
    })
    //THIRD BOX 
    gsap.to('.box-3', {
      y: '-100vh',
      duration: 2,
      scrollTrigger: {
          trigger: '.box-3',
          start: 200,
          end: '100vh',
          scrub: 1,
          toggleActions:'restart reverse reverse resume'
      },
  })
  //FOURTH BOX    
  gsap.to('.box-4', {
    y: '-100vh',
    duration: 8,
    scrollTrigger: {
        trigger: '.box-4',
        start: 1400,
        end: '100vh',
        scrub: 7,
        toggleActions:'restart reverse reverse resume'
    },
})
 //FIFTH BOX    
 gsap.to('.box-5', {
  y: '-100vh',
  duration: 3,
  scrollTrigger: {
      trigger: '.box-5',
      start: 600,
      end: '100vh',
      scrub: 6,
      toggleActions:'restart reverse reverse resume'
  },
})
 //SIXTH BOX    
 gsap.to('.box-6', {
  y: '-100vh',
  duration: 2,
  scrollTrigger: {
      trigger: '.box-6',
      start: 1400,
      end: '200vh',
      scrub: 1,
      toggleActions:'restart reverse reverse resume'
  },
})

}
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
      )
}
// 
/*export async function getServerSideProps(content)
const res= await fetch ('localhost/wordpress/wp-json/wp/v2/')
const data = await res.json() // DATA */

export default MyApp
