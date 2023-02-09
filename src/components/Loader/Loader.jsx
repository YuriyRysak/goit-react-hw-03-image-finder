import { Audio} from 'react-loader-spinner'

import React from "react"


export const Loader = () => {
  return (
    <div className="Loader">
   <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />
  </div>
)

}