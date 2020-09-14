import { Location, Vehicle } from './icons'

import VerticalSeparator from "./VerticalSeparator"
import styled from 'styled-components'

const Container = styled.div`
	display:inline-flex;
	align-items:center;

	margin:2.5rem 0;
	padding:0.4rem 1.5em;
	border-radius: 14px;
	background:${({ theme }) => theme.body};
	box-shadow: 0px 2px 8px -2px #C1BADE;

	font-size:18px;

	transition: all .4s;
	cursor:pointer;
	svg{
		font-size:20px;
		margin-right: 0.5em;
	}

	.brand-color{
		color:${({ theme }) => theme.BRAND_PURPLE};
		font-weight:bold;
	}

	&:hover{
		background:#F4F4F6;
	}
`

// Separator componenti ile yapılacak.
const ETA = (props) => {
	return (
		<Container>
			<Location />
			<VerticalSeparator />
			<p>Bebek Mah. Cevdetpaşa Cad. N..</p>
			<VerticalSeparator />
			<Vehicle />
			<p className="brand-color">9 DK</p>
		</Container>
	)
}

export default ETA