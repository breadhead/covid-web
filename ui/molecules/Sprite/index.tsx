import React from 'react'

const Sprite = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      width: 0,
      height: 0,
    }}
    overflow="hidden"
  >
    <defs>
      <symbol id="icon-SliderArrowLeftIcon" viewBox="0 0 14 24">
        <g fill="none">
          <polyline strokeWidth="2" points="13 1 2 12 13 23" />
        </g>
      </symbol>
      <symbol id="icon-SliderArrowRightIcon" viewBox="0 0 14 24">
        <g fill="none">
          <polyline strokeWidth="2" points="1 1 12 12 1 23" />
        </g>
      </symbol>
    </defs>
  </svg>
)

export default Sprite
