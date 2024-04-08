export const IconDropDownArrow = ({ width, height, color, className }) => {
  return (
    <svg
      width={width || 25}
      height={height || 25}
      viewBox="0 0 25 25"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 10L12.5 15L18 10" stroke={color || '#F6A723'} />
      <path
        d="M7 10L12.5 15L18 10"
        stroke={color || '#F6A723'}
        strokeWidth="2.5"
      />
    </svg>
  )
}
