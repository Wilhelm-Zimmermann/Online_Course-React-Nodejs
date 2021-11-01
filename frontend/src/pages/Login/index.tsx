import { Container, Form } from "./styles";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useUser } from "../../hooks/useUser";
import { FormEvent, useState } from "react";
import { login, setAdm, removeAdm } from "../../services/auth";

export function Login() {
    const { userLogin } = useUser();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");

    const onSubmitLogin = async (e: FormEvent) => {
        e.preventDefault();

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        console.log(email.match(re));

        if(email === "" || password === "") {
            setError("Não pode haver campos vazios");
            return false;
        }

        const {user} = await userLogin({
            email,
            password
        });

        login(user.token);

        if(user.admin === true) {
            setAdm(user.admin);
        }else {
            removeAdm();
        }
        
        window.location.href = "/"
        setEmail("");
        setPassword("");
        setError("");
    }

    return (
        <Container>

            <div className="left-side">
                <h1> Devaria </h1>
                <h2> Login </h2>
            </div>

            <Form onSubmit={e => onSubmitLogin(e)}>
                <div className="form-input">
                    <FaEnvelope />
                    <input 
                        type="text" 
                        placeholder="Email"  
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                </div>
                <div className="form-input">
                    <FaLock />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                </div>
                <button>Login</button>
                <div className="new-user">
                    <span>Ainda não tem conta?</span>
                    <a href="/signup">Cadastre-se</a>
                </div>
            </Form>

        </Container>
    );
}