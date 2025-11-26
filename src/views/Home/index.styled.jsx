import styled, { css } from "styled-components"

const HomeElement = styled.div`
   ${({ theme }) =>
			theme &&
			css`
         width: 100vw;
         height: 100%;
         display: flex;
         font-family: 'Inter';
         padding: 3rem 2rem;
         justify-content: center;
         transition: background-color 0.5s ease;
         position: absolute;
         overflow: auto;
         background-color: ${theme.backgroundColorApp};

         & .app {
            display: flex;
            align-items: center;
            max-width: 700px;
            display: flex;
            flex-direction: column;
            gap: 2em;

            @media (max-width: 768px) {
               width: 80%;
            }

            @media (max-width: 426px) {
               max-width: 100%;
               width: 100%;
            }
         }
      `}
`

export default HomeElement
