import styled, { keyframes } from 'styled-components';

export const Button = styled.button`
  margin: 10px auto;
  background-color: #acacac;
  color: #000000;
  width: fit-content;
  font-size: 28px;
  height: 32px;
  line-height: 32px;
  border-radius: 5px;
  border-style: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const NoteInfo = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`;

export const UpdateAt = styled.div`
  font-size: 16px;
  color: #3d3d3d;
  margin-top: 5px;
`;

export const Author = styled.div`
  padding: 5px;
  width: max-content;
  text-align: left;
  display: flex;
  justify-content: left;
  background-color: #d4d4d4;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  img {
    width: 50px;
    height: 50px;
    margin: auto 5px;
    border-radius: 50%;
    border-style: solid;
    border-color: #878787;
    border-width: 2px;
  }
  > div {
    font-size: 18px;
    margin: 5px 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    code {
      font-size: 16px;
      color: #3d3d3d;
      text-decoration: none;
    }
    div {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

export const StyledTextArea = styled.textarea<{ inNote: boolean }>`
  margin: 10px auto;
  width: 100%;
  padding: 0;
  height: 100%;
  min-height: calc(100vh - 284px);
  font-family: 'Noto Sans TC', sans-serif;
  resize: none;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-y: hidden;
  ${({ inNote }) =>
    inNote
      ? `
  border: none;
  background-color: #e4e4e4;
  font-size: 20px;
  line-height: 24px;
  &:focus {
    outline: none;
  }`
      : `
  font-size: 28px;
  line-height: 32px;
  `}
`;

export const StyledInput = styled.input<{ inNote: boolean }>`
  margin: 10px auto;
  padding: 0;
  width: 100%;
  height: 32px;
  font-size: 28px;
  line-height: 32px;
  font-family: 'Noto Sans TC', sans-serif;
  ${({ inNote }) =>
    inNote
      ? `
  border: none;
  background-color: #e4e4e4;
  font-size: 32px;
  &:focus {
    outline: none;
  }`
      : `
  font-size: 28px;
  `}
`;

export const StyledNewNote = styled.form`
  padding: 10px 20px;
  hr {
    margin-top: 7px;
    *margin: 0;
    border: 0;
    color: #4b4b4b;
    background-color: #4b4b4b;
    height: 2px;
  }
`;

export const StyledNavBar = styled.div`
  background-color: #00baba;
  width: 100%;
  height: 77px;
  margin: 0px;
  padding: 0px;
  top: 0;
  left: 0;
  position: fixed;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

export const MainLogo = styled.div`
  font-size: 64px;
  font-weight: 500;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  > a {
    text-decoration: none;
    color: #000000;
  }
`;

export const UserProfile = styled.div`
  margin: auto 30px;
  > a {
    height: 50px;
    width: 50px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
`;

export const StyledHamburger = styled.div<{ checked: boolean }>`
  margin: auto 0;

  label {
    display: flex;
    align-items: center;
    margin: auto 30px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  label > span,
  label > span::before,
  label > span::after {
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #000000;
    transition-duration: 0.25s;
  }
  label > span::before {
    content: '';
    top: -8px;
  }
  label > span::after {
    content: '';
    top: 8px;
  }

  ${({ checked }) =>
    checked
      ? `
      label > span {
        transform: rotate(45deg);
      }

      label > span::before {
        top: 0;
        transform: rotate(0);
      }

      label > span::after {
        top: 0;
        transform: rotate(90deg);
      }
      `
      : ``}
`;

export const MenuBox = styled.ul<{ visible: boolean }>`
  display: block;
  position: fixed;
  visibility: hidden;
  top: -100%;
  left: 0;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #eceff1;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  transition-duration: 0.25s;
  z-index: 50;
  ${({ visible }) =>
    visible
      ? `
      visibility: visible;
      top: 77px;
    `
      : ``}

  li * {
    display: block;
    padding: 12px 24px;
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    transition-duration: 0.25s;
  }

  li:hover {
    background-color: #cfd8dc;
  }
`;

export const StyledMarkdown = styled.div`
  font-size: 20px;
  text-align: left;
  font-weight: 400;

  p,
  pre,
  code {
    white-space: pre-wrap;
    color: #000000;
  }
  a {
    white-space: pre-wrap;
    color: #004fb6;
    text-decoration: none;
  }

  blockquote {
    background-color: #d4d4d4;
    border-radius: 5px;
  }
`;

export const StyledNote = styled.div`
  padding: 10px 20px;

  > span {
    padding: 5px;
    font-size: 48px;
    font-weight: 400;
    max-width: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`;

export const StyledTags = styled.div`
  margin: 10px auto;
  padding: 5px 0;
  min-width: calc(100% - 40px);
  width: auto;
  display: flex;
  justify-content: flex-start;
  background-color: #d4d4d4;
  border-radius: 5px;
  overflow-x: auto;

  a {
    width: auto;
    margin: auto 5px;
    padding: 3px 5px;
    background-color: #000000;
    border-radius: 5px;
    text-decoration: none;
    color: #ffffff;
    white-space: nowrap;
  }

  span {
    min-width: 1px;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin: auto;
  height: auto;
  position: absolute;
  top: 77px;

  > div {
    margin: 12px auto;
    width: 100%;
    max-width: 600px;
    height: auto;
    min-height: calc(100vh - 101px);
    background-color: #e4e4e4;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const ModalBackground = styled.div<{ showModal: boolean }>`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  animation: ${({ showModal }) => (showModal ? fadeIn : null)} 0.2s linear;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ModalBody = styled.div`
  width: 90vw;
  padding: 0px 10px;
  max-width: 800px;
  height: auto;
  max-height: 90vh;
  border-radius: 10px;
  border: none;
  background-color: #e4e4e4;
  z-index: 600;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const PreviewContent = styled.div`
  max-width: 560px;
  width: 80%;
  margin: 5px auto;
  padding: 0 20px;
  background-color: #d6d6d6;
  height: auto;
  overflow-y: scroll;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const PreviewTitle = styled.p`
  font-size: 36px;
  font-weight: 500;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 5px auto;
`;

export const ModalClose = styled.div`
  z-index: 650;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 0;
  cursor: pointer;
  justify-content: left;
  flex-direction: row-reverse;
  position: relative;
  top: 32px;
  right: 12px;

  > span,
  > span::after {
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #000000;
    content: '';
  }

  > span {
    transform: rotate(45deg);
  }

  > span::after {
    transform: rotate(90deg);
  }
`;
