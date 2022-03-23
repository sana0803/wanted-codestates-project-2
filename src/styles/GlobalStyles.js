import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	//style reset
	${reset}

	body {
    letter-spacing: -0.04em;
    background-color: #eee;
		color: var(--black);
		font-family: 'Pretendard Variable';
		font-size: 12px;
  }

	a {
		text-decoration: none;
		color: var(--black);
		vertical-align: baseline;
	}

	:root {
		--black: #1f334a;
		--blue: #0077ff;

	}
`;

export default GlobalStyles;
