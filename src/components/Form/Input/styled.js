import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label {
    margin-bottom: 0.6em;
    font-weight: bold;
  }

  input {
    padding: 0.7em;

    border: 0.1px solid;
    border-color: black;

    input::placeholder {
      color: #7b7b7b;
    }
  }
`
