import styled from "styled-components";
const Button = () => {
    const Buttonstyle = styled.button`
  padding: 12px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const Inputstyled=styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
   
`;
return (
    <inputwarpper>
    <Inputstyled type="text" placeholder="Type here..." />
    <Buttonstyle>Submit</Buttonstyle>
    </inputwarpper>
)
    return (
        <Buttonstyle className="btn">
            Click Me
        </Buttonstyle>
    );
}
export default Button;