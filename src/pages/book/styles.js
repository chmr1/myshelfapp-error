import styled from 'styled-components';

const ContainerIndex = styled.View`
  flex: 1;
  backgroundColor: #f5f5f5;
`;

const ContainerAdd = styled.View`
  alignItems: center;
  justifyContent: center;
  backgroundColor: #f5f5f5;
`;

const BookContainer = styled.View`
  backgroundColor: #FFF;
  borderWidth: 1;
  borderColor: #DDD;
  borderRadius: 5px;
  padding: 20px;
  marginBottom: 20px;
`;

const Logo = styled.Image`
  height: 30%;
  marginBottom: 40px;
`;

const BookTitle = styled.Text`
  fontSize: 18px;
  fontWeight: bold;
  color: #333;
`;

const BookDescription = styled.Text`
  fontSize: 16px;
  color: #999;
  marginTop: 5px;
  lineHeight: 24px
`;

const SuccessMessage = styled.Text`
  textAlign: center;
  color: #08a092;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #fff;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = styled.TouchableHighlight`
  padding: 20px;
  borderRadius: 5px;
  backgroundColor: #fc6663;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const MainLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 20px;
`;

const MainLinkText = styled.Text`
  color: #999;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export {
  ContainerIndex,
  ContainerAdd,
  BookContainer,
  Logo,
  BookTitle,
  BookDescription,
  SuccessMessage,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  MainLink,
  MainLinkText,
};