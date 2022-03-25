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
    letter-spacing: -1px;
		color: var(--black);
		font-family: 'Noto Sans KR', sans-serif;
		font-weight: 400;
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
		font-family: 'Noto Sans KR', sans-serif;
	}

	.blue {
		color: var(--blue);
  }
  .green {
    color: #9bd728;
  }
  .red {
    color: #f62459;
  }

	:root {
		--black: #1f334a;
		--deep-blue: #005fcc;
		--blue: #0077ff;
		--dark-gray: #6c7a89;
	}
`;

export default GlobalStyles;
