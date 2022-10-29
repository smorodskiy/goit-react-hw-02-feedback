// For stylish components
import styled from 'styled-components';

// CSS in JS
export const Button = styled.button`
  outline: 0;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  padding: 12px 16px;
  text-decoration: none;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.65);
  transition: all 0.14s ease-out;

  background-color: ${p => {
    switch (p.id) {
      case 'Good':
        return '#5DC3D0';
      case 'Neutral':
        return '#FAB778';
      case 'Bad':
        return '#FF8181';

      default:
        break;
    }
  }};

  :hover {
    box-shadow: 4px 4px 0 #000;
    transform: translate(-4px, -4px);
  }

  :active{
    transform: translateY(0px);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.35);
}

  :focus-visible {
    outline-offset: 1px;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 5px;
`;
