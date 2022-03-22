import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	//style reset
	${reset}

	body {
    letter-spacing: -0.02em;
    background-color: var(--light-gray);
		color: #333;
		font-family: 'Pretendard Variable';
  }

	:root {
	}
`;

export default GlobalStyles;
