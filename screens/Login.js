import React from 'react';
import {StatusBar} from 'expo-status-bar';

//formik
import{formik} from 'formik';

//icons
import {Octions} from 'expo/vector-icons';

//colors
import {colors,darklight} from './../components/styles';
const {brand}=colors;


import {
    styledContainer,
    InnerContainer,
    pagelogo,
    pageTitle,
    subTitle,
    styledFormArea,
    leftIcon,
    styledInputLabel,
    styledTextInput,
    RightIcon,
    colors,
    BottomText,
    MsBox,
    Line

}

from {react} 
const Login =() => {
    return(
        <styledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <pageLogo resizeMode="cover"source={require('./../assets/img/logo.jpg')}/>
                <pageTitle> Nayar Shopping App </pageTitle>
                <subTitle>Accounts Login</subTitle> 

                <formik>
                        initialValues={{email: '',password: ''}}
                        onsubmit={(values)=>{
                            console.log(values);
                        }}
                        {({handlechange,handleBlur,handleSubmit,values})=> 
                        <styledFormArea>
                            <MyTextInput 
                            label="Email address"
                            icon="mail"
                            placeholder="numbonayar@gmail.com"
                            placeholderTextColor="{darkLight}"
                            onchangeText={handlechange('email')}
                            onchangeText={handlechange('email')}
                            oncBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            />


                             <MyTextInput 
                             label="Password"
                             icon="Lock"
                             placeholder="*************"
                             placeholderTextColor="{darkLight}"
                             onchangeText={handlechange('password')}
                             onchangeText={handlechange('email')}
                             oncBlur={handleBlur('password')}
                             value={values.password}
                             secureTextEntry={true}
                             ispassword={true}
                             hidepassword={hidepassword}
                             setHidepassword={setHidepassword}
                             />
                             <MsBox>...</MsBox>

                             <styleButton onPress={handleSet}>
                                 <Button>
                                     Login
                                 </Button>
                             </styleButton>
                             <Line />
                                
                            </styledFormArea>}
                        </formik> 
            </InnerContainer>
        </styledContainer>
    );
}
    const MyTextInput=({label,icon, ispassword,...props}) =>{
        return(
         <view>
        <leftIcon>
            <Octions name={icon} size={30} color={brand}/>
            </leftIcon> 
            <styledInputLabel>{label}</styledInputLabel>
            <styledTextInput {...props} />
            {ispassword && (
                <RightIcon>

                </RightIcon>
            )}

        </view>
        );

    }
export default Login;