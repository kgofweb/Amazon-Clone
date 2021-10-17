import { 
  LoginStyled, 
  LoginContainer, 
  SignInButton,
  RegisterButton 
} from "./Login.styled"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <LoginStyled>
      <Link to='/'>
        <img
          className="login__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        />
      </Link>

      <LoginContainer>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' />

          <h5>Password</h5>
          <input type='password' />

          <SignInButton type='submit'>
            Sign In
          </SignInButton>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <RegisterButton>Create your Amazon Account</RegisterButton>
      </LoginContainer>
    </LoginStyled>
  )
}

export default Login
