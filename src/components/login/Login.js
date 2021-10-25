import { 
  LoginStyled, 
  LoginContainer, 
  SignInButton,
  RegisterButton 
} from "./Login.styled"
import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import { auth } from "../firebase/firebase"

const Login = () => {
  // Permet de rediriger l'utilisateur vers la Home page apres s'être connecté
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Sign In
  const signIn = e => {
    e.preventDefault()

    // connexion code with firebase
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  // Register
  const register = e => {
    e.preventDefault()

    // registration code with firebase
    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <LoginStyled>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
          alt='amazon-clone'
        />
      </Link>

      <LoginContainer>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <SignInButton 
            type='submit'
            onClick={signIn}
          >
            Sign In
          </SignInButton>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <RegisterButton onClick={register}>Create your Amazon Account</RegisterButton>
      </LoginContainer>
    </LoginStyled>
  )
}

export default Login
