import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  footer {
    background-color: blueviolet;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid black;
  }
`

export default EstiloGlobal
