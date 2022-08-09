import { ReactNode } from 'react'

type TomatoProps = {
  Children: ReactNode
}

const Tomato = ({ Children }: TomatoProps) => {
  return <span style={{ color: 'tomato' }}>{Children}</span>
}

export default Tomato
