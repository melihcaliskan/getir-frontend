import styled from 'styled-components'

const Hr = styled.hr`  
  margin:0 ${props => props.center};
  padding:0;
  border:${props => props.height + " solid " + props.color};

  width:${props => props.width};

  margin-top:${props => props.marginTop + "px"};
  margin-bottom:${props => props.marginBottom + "px"};
  margin-left:${props => props.marginLeft + "px"};
  margin-right:${props => props.marginRight + "px"};

  border-radius:${props => props.borderRadius + "px"};
  transform: ${props => props.vertical && "rotate(90deg)"};
`

const CustomSeparator = ({
  color = "#464646",
  width = "99%",
  height = "1px",
  borderRadius = 0,
  marginTop = -10,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  vertical,
  center = false }) => {
  return (
    <Hr
      color={color}
      width={width}
      height={height}
      borderRadius={borderRadius}
      marginTop={marginTop}
      marginBottom={marginBottom}
      vertical={vertical}
      center={center}
    />
  )
}

export default CustomSeparator