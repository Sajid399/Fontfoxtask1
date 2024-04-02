import React from 'react'

const ParagraphComponent = ({ className, children }) => {
  return (
    <p className={className}>{children}</p>
  )
}

export default ParagraphComponent