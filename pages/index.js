import GlobalStyles from './styles/globals'

import Head from 'next/head'
import Menu from './template/Menu'


export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>TodoApp</title>
        <link rel="icon" href="/favicon.ico" />        
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Menu />
      {children}

      <GlobalStyles/>
    </>
  )
}
