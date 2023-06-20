import React from 'react'

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