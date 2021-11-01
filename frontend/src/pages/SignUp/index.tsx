import { Container, Form } from "./styles";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";
import { useUser } from "../../hooks/useUser";
import { FormEvent, useState } from "react";

export function SignUp() {
    const { signUp } = useUser();

    const [ email, setEmail ] = useState("");
    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ error, setError ] = useState("");

    const onSubmitSignUp = async (e: FormEvent) => {
        e.preventDefault();

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if(name === "" || password === "" || email === "") {
            setError("Não pode haver campos vazios");
            return false;
        }

        if(!email.match(re)) {
            setError("Email deve conter um @");
            return false;
        }

        if(password !== confirmPassword) {
            setError("As senhas estão diferentes")
            return false;
        }
        
        await signUp({
            name,
            email,
            password
        });
        window.location.href = "/login"
        setEmail("");
        setName("");
        setConfirmPassword("");
        setPassword("");
        setError("");
    }

    return (
        <Container>

            <div className="left-side">
                <h1> Devaria </h1>
                <h2> Cadastre-se </h2>
                <p> Já tem uma conta? <a href="/login">Faça Login</a></p>
            </div>

            <Form onSubmit={e => onSubmitSignUp(e)}>
                    <p className="error"> {error}</p>
                <div className="form-input">
                    <FaUserAlt />
                    <input 
                        type="text" 
                        placeholder="Nome"  
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                    />
                </div>
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
                <div className="form-input">
                    <FaLock />
                    <input 
                        type="password" 
                        placeholder="Confirme a senha" 
                        value={confirmPassword} 
                        onChange={e => setConfirmPassword(e.target.value)} 
                    />
                </div>
                <button>Cadastre-se</button>
            </Form>

        </Container>
    );
}