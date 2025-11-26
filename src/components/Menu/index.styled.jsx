import styled, { css } from "styled-components"

const MenuButton = styled.div`
   ${({ theme }) =>
			theme &&
			css`
         border-radius: 0.3rem;
         position: absolute;
         left: 1rem;
         top: 1rem;
         width: 2.5rem;
         height: 2.5rem;
         display: flex;
         justify-content: center;
         align-items: center;

         & svg {
            fill: ${theme.tertiaryColor};
            width: 0.8rem;
         }

         &:hover {
            background-color: rgba(128, 128, 128, 0.548);
         }

         @media (max-width: 425px){
            left: auto;
         }
      `}
`

const MenuElement = styled.div`
   ${({ theme }) =>
			theme &&
			css`
         position: absolute;
         top: 0;
         left: 0;
         background-color: ${theme.quaternaryColor};
         color: ${theme.tertiaryColor};
         border-radius: 0.3rem;
         box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
         padding: 2rem 3rem;
         display: flex;
         flex-direction: column;
         gap: 1rem;
         z-index: 1;
         transition: background-color 0.5s ease, color 0.5s ease,
            transform 0.5s ease;

         @media (max-width: 560px) {
            width: 100%;
         }

         &.show {
            transform: translateY(0%);
         }

         &.hidden {
            transform: translateY(-110%);
         }

         & .title {
            font-size: 1.5rem;
         }

         & .item {
            display: flex;
            align-items: center;
            gap: 1rem;
         }

         & .closeButton {
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 2rem;
            height: 2rem;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
               background-color: rgba(128, 128, 128, 0.548);
            }

            & svg {
               fill: ${theme.tertiaryColor};
               width: 0.5rem;
            }
         }
      `}
`

export { MenuButton, MenuElement }
