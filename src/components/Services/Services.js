import styled from 'styled-components';

const StyledServices = styled.div`
    display:flex;
    justify-content:center;
    h1{
        color:#4c4ca9;
    }
`;

const Services = () => {
	return (
		<StyledServices >
			<h1> Services</h1>
		</StyledServices>
	)
}

export default Services;