import React from "react"
import tw,{ styled } from 'twin.macro';

const Button = styled('button')`
/* background-color: green; */
font-size: 10em;
${tw`bg-green-900`};
`
export default function Home() {
  return <div><Button>Doesn't work</Button>Hello world!</div>
}
