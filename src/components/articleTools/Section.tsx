import { Box, Heading } from '@chakra-ui/react'

type SectionProps = {
  title: string
}

const Section = ({ title }: SectionProps) => {
  return (
    <Box mb="4">
      <Heading
        size="3xl"
        pb="1"
        pl="4"
        pr="4"
        style={{ borderBottom: '2px grey solid ', display: 'inline-block' }}
      >
        {title}
      </Heading>
    </Box>
  )
}

export default Section
