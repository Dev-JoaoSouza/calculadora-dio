import { ButtonLargeContainer } from "./styles";

const ButtonLarge = ({label, onClick}) => {
    return (
      <ButtonLargeContainer onClick={onClick}>
        {label}
      </ButtonLargeContainer>
    );
  }
  
  export default ButtonLarge;