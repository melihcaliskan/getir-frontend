import styled from 'styled-components'

const Separator = styled.div`
	width:1px;
	height:24px;
	margin:0 0.8em;
	background:${({ theme }) => theme.SEPARATOR};
`

const VerticalSeparator = () => {
    return (
        <Separator />
    )
}

export default VerticalSeparator