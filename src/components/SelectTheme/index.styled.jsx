import styled, { css } from "styled-components"

const SelectThemeContainer = styled.div`
   ${({ theme }) =>
			theme &&
			css`
         align-items: center;
         box-shadow: inset 0px 2px 8px rgba(0, 0, 0, 0.404);
         border-radius: 200px;
         padding: .3rem;
         background: ${theme.buttonSelectTheme.backgroundColor};
         transition: background 0.3s ease;
         width: 4rem;
         display: flex;

         & .switch {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 100%;
            background-color: ${theme.buttonSelectTheme.switchButtonColor};
            box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.404);
            transition: transform .3s ease;
         }
      `}
`

export default SelectThemeContainer
