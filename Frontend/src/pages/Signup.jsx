import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { createUsers } from '../movieAPI'
import { setUserLogin } from '../features/user/userSlice'

const Signup = () => {
    const [emailQuery, setEmailQuery] = useState("")
    const [passwordQuery, setPasswordQuery] = useState("")
    const [confirmPasswordQuery, setConfirmPasswordQuery] = useState("")

    const dispatsh = useDispatch()
    const navigate = useNavigate()

    return (
        <Container>
            <span>
                Log in or sign up to continue
            </span>
            <EmailInput 
                type="text"
                placeholder="Enter Email"
                title="Enter Email"
                onChange={event => setEmailQuery(event.target.value)} />
            <PasswordInput 
                type="password"
                placeholder="Enter Password"
                title="Enter Password"
                onChange={event => setPasswordQuery(event.target.value)} />
            <ConfirmPasswordInput 
                type="password"
                placeholder="Confirm Password"
                title="Enter Email"
                onChange={event => setConfirmPasswordQuery(event.target.value)} />

            {passwordQuery !== confirmPasswordQuery ?
                    <ErrorDisplay>
                        Make Sure The Password Matches
                    </ErrorDisplay>
                : ""
            }
            <SignupButton 
                onClick={() =>
                    passwordQuery === confirmPasswordQuery ?
                            createUsers({
                                email: emailQuery,
                                password: passwordQuery
                            }).then(() => {
                                dispatsh(setUserLogin({
                                    email: emailQuery,
                                    password: passwordQuery
                                }))
                                navigate("/")
                            })
                        : null}>
                Signup
                <FontAwesomeIcon icon={faAngleRight} className="faAngleRight" />
            </SignupButton>
            <Signin>
                Already Have An Account? <a href="/signin">Sign In</a>
            </Signin>
        </Container>
    )
}

export default Signup

const Container = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
        content: "";
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/signup-and-login-background.png");
        opacity: 0.7;
    }

    span {
        font-size: 33px;
        font-weight: 600;
    }
`

const EmailInput = styled.input`
    height: 60px;
    width: 410px;
    margin-top: 70px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 10px;
    border: 1.5px solid #2A2F41;
    color: #FFFFFF;
    padding-left: 30px;
    font-size: 18px;
`

const PasswordInput = styled(EmailInput)`
    margin-top: 20px;
`

const ConfirmPasswordInput = styled(PasswordInput)`
    margin-top: 20px;
`

const ErrorDisplay = styled.div`
    margin-top: 10px;
    color: #ff3e3e;
`

const SignupButton = styled.div`
    cursor: pointer;
    height: 60px;
    width: 410px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to left, #161f80 20% , #0066ff);
    border-radius: 10px;
    border: 1.5px solid #ffffff7f;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
    border: none;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    .faAngleRight {
        font-size: 20px;
        margin-top: 4px;
        margin-left: 6px;
    }

    &:hover {
        transform: scale(1.05);

    }
`

const Signin = styled.div`
    margin-top: 10px;
    color: #ffffff7f;
`