import styled, { css } from "styled-components"

export const Item = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   gap: 0.5em;
   padding: 0.5em;

   &:hover {
      cursor: pointer;
      background-color: rgba(236, 236, 236, 0.699);
      border-radius: 0.5em;
      color: ${({ theme }) => theme.settingsItemLabelHoverColor};
   }

   @media (max-width: 425px) {
      width: 100%;
   }
`

export const SettingsContainer = styled.div`
   ${({ theme }) =>
			theme &&
			css`
         background-color: ${theme.quinaryColor};
         box-shadow: ${theme.shadowBox};
         color: ${theme.tertiaryColor};
         outline: ${theme.settingsOutline};

         width: 100%;
         outline: 1px solid rgba(209, 209, 209, 0.4);
         border-radius: 0.5rem;
         display: flex;
         justify-content: space-between;
         align-items: center;
         display: flex;
         flex-direction: column;

         transition: box-shadow 0.5s ease, background-color 0.5s ease,
            outline 0.5s ease, color 0.5s ease;
      `}
`
