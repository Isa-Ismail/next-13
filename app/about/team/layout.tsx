import React from 'react'

export const metadata = {
  title: 'Create team App',
  description: 'team',
}

interface Props {
    children: React.ReactElement
}

const layout: React.FC<Props> = ({children}) => {
    return (
    <div>
      {children}
    </div>
    )
}

export default layout