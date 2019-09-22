import React, { Component } from 'react'
import PropTypes from "prop-types"

const FullWidth = ({ children }) => {

  return (
    <div className='full-width'>
      {children}
    </div>
  )
}

FullWidth.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullWidth
