import '../styles/globals.css'
import {ThemeProvider} from "styled-components";
import type { AppProps } from 'next/app'

interface ThemeInterface{
  colors:{
    projectOne:string,
    projectTwo:string,
    projectThree:string,
    projecFour:string,

  }
}

const theme: ThemeInterface={
  colors:{
    projectOne:'#E87958',
    projectTwo:'#BCCBFF',
    projectThree:'#4D9441',
    projecFour:'#ECD622',
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />

        </ThemeProvider>


      </>

      )


}

export default MyApp
