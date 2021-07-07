import styled from 'styled-components/macro'
import { AutoColumn } from 'components/Column'
import CurrencyInputPanel from 'components/CurrencyInputPanel'
import Input from 'components/NumericalInput'
import { BodyWrapper } from 'pages/AppBody'

export const PageWrapper = styled(BodyWrapper)<{ wide: boolean }>`
  max-width: ${({ wide }) => (wide ? '870px' : '480px')};
  width: 100%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    max-width: 480px;
  `};
`

export const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  min-width: 480px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    min-width: 400px;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  min-width: 340px;
`};
`

export const ScrollablePage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const DynamicSection = styled(AutoColumn)<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'initial')};
`

export const CurrencyDropdown = styled(CurrencyInputPanel)`
  width: 48.5%;
`

export const StyledInput = styled(Input)`
  background-color: ${({ theme }) => theme.bg0};
  text-align: left;
  font-size: 18px;
  width: 100%;
`

/* two-column layout where DepositAmount is moved at the very end on mobile. */
export const ResponsiveTwoColumns = styled.div<{ wide: boolean }>`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: ${({ wide }) => (wide ? '1fr 1fr' : '1fr')};
  grid-template-rows: max-content;
  grid-auto-flow: row;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
  `};
`

export const DepositAmountsContainer = styled.div`
  grid-column: 1;
  grid-row: 2 / 3;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  grid-column: 1;
  grid-row: 3 / 4;
  `};
`

export const RightContainer = styled(AutoColumn)`
  grid-row: 1 / 3;
  grid-column: 2;
  height: fit-content;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  grid-row: 2 / 3;
  grid-column: 1;
  `};
`

export const StackedContainer = styled.div`
  display: grid;
`

export const StackedItem = styled.div<{ zIndex?: number }>`
  grid-column: 1;
  grid-row: 1;
  height: 100%;
  z-index: ${({ zIndex }) => zIndex};
`
