        import style from 'styled-components';
        import {view, Text, Image ,TextInput,TouchableOpacity} from 'react-native';
        import constants from 'expo-constants';

        const StatusBarHeight = constants.StatusBarHeight;

//colors
export const colors={
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darklight: "#9CA3AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: "#EF4444",
};

const{ primary, secondary, tertiary, darklight, brand, green, red} = colors;

export const styledcontainer = styled.view`
flex: 1;
padding: 25px;
padding-top: ${StatusBarHeight + 10}px;
background-color: ${primary};
`;

export const InnerContainer = styled.view`
flex: 1;
width: 100%;
align-items: center;
`;

export const pagelogo = styled.Image`
width: 250px;
height: 200px;
`;

export const pagetitle = styled.text`
 font-size: 30px;
font-align: center;
font-weight: bold;
color: ${brand};
padding: 10px;
`;

export const subTitle=style.Text`
  font-size:18px;
  margin-bottom:20px;
  letter-spacing:1px;
  font-weight:bold;
  color:$(tertiary);
  `;
  export const styledFormArea=styled.view`
    width:90%;
  `;

  export const styleTextInput=styled.TextIput`
  background-color:$(secondary);
  padding:15px;
  padding-left:55px;
  border-radius:5px;
  padding-right:55px;
  font-size:16px;
  height:60px;
  margin-vertical:3px;
  margin-bottom:10px;
  color:${tertiary};
  `;

  export const styledInputLabel=styled.Text`
    color: ${tertiary};
    font-size:13px;
    text-align:left;
    `;
    export const leftIcon=styled.view`
      left:15px;
      top:30px;
      position:absolute;
      z-index:1;
       `;

    export const RightIcon=styled.uchableOpacity`
       left:15px;
       top:30px;
       position:absolute;
       z-index:1;
        `;
    export const styledButton=styled.TouchableOpacity`
      padding:15px;
      background-color:${brand};
      justify-items:center;
      align-content: center;
      border-radius:5px;
      margin-vertical:5px;
      height:60px
    `;

    export const ButtonText =styled.Text`
    color: ${primary};
    font-size:16px; 
    `;


    export const MsBox=styled.Text`
      text-align: center;
      font-size:13px;
      
      `;
      export const Line =styled.view`
        height:1px;
        width:100px;
        background-color:${daeklight};
        margin-vertical:10px;
        `;