import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	//style reset
	${reset}

	body {
		position: relative;
    background-color: #fafafa;
    min-height: 800px;
    padding-bottom: 100px;
    letter-spacing: -0.04em;
		color: var(--black);
		font-family: 'Pretendard Variable';
		font-size: 12px;
  }

	a {
		margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    text-decoration: none;
		color: var(--black);
	}

	button {
		font-family: 'Pretendard Variable';
	}

	:root {
		--black: #1f334a;
		--deep-blue: #005fcc;
		--blue: #0077ff;
		--dark-gray: #6c7a89;
	}
`;

export default GlobalStyles;
