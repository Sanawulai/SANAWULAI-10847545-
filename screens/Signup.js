import React from 'react';
import {StatusBar} from 'expo-status-bar';

//formik
import{formik} from 'formik';

//icons
import {Octions} from 'expo/vector-icons';

//colors
import {ButtonText, colors,darklight} from './../components/styles';
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
const Signup =() => {
    return(
        <styledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <pageLogo resizeMode="cover"source={require('./../assets/img/logo.jpg')}/>
                <pageTitle> Nayar Shopping App </pageTitle>
                <subTitle>Accounts Signup</subTitle> 

                <formik>
                        initialValues={{Fullname: '', password: ''}}
                        onsubmit={(values)=>{
                            console.log(values);
                        }}
                        {({handlechange,handleBlur,handleSubmit,values})=> 
                        <styledFormArea>
                            <MyTextInput 
                            label="Full Name"
                            icon="person"
                            placeholder="sanawulai Numbo"
                            placeholderTextColor="{darkLight}"
                            onchangeText={handlechange('fullname')}
                            
                            oncBlur={handleBlur('fullname')}
                            value={values.fullname}
                            
                        />

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
                            label="Date of Birth"
                            icon="calender"
                            placeholder="YYY-MM-DD"
                            placeholderTextColor="{darkLight}"
                            onchangeText={handlechange('date of birth')}
                        
                            oncBlur={handleBlur('edate of birth')}
                            value={values.dateofBirth}
                            
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

                        <MyTextInput 
                             label="Confirm Password"
                             icon="Lock"
                             placeholder="*************"
                             placeholderTextColor="{darkLight}"
                             onchangeText={handlechange('password')}
                             onchangeText={handlechange('email')}
                             oncBlur={handleBlur('confirm password')}
                             value={values.password}
                             secureTextEntry={true}
                             ispassword={true}
                             hidepassword={hidepassword}
                             setHidepassword={setHidepassword}
                             />

                             <MsBox>...</MsBox>

                        <styleButton onPress={handleSet}>
                            <ButtonText Login/>
                                     
                                 
                             </styleButton>
                             <Line />
                             <ExtraView>
                                <ExtraText Do not have an account/>
                                <TextLinkContent> Signup</TextLinkContent>
                            </ExtraView>
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
export default Signup;