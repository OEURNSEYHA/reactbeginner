import React from 'react'
import { connect } from 'react-redux'

export const NewCakeContainer = (props) => {
  return (
    <div>NewCakeContainer</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)