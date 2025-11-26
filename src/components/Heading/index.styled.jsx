import styled, { css } from "styled-components"

const HeadingElement = styled.div`
   ${({ theme }) =>
			theme &&
			css`
         text-align: center;
         display: flex;
         flex-direction: column;
         gap: 1rem;

         & .title {
            color: ${theme.tertiaryColor};
            font-weight: bold;
            transition: color 0.5s ease;
         }

         & .subTitle {
            color: ${theme.tertiaryColor};
            font-weight: 100;
         }
      `}
`

export default HeadingElement
