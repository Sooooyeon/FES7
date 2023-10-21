import React, { useState } from 'react'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (email,password)=>{
        const baseUrl = "https://api.mandarin.weniv.co.kr";
        const reqPath = "/user/login";
        const reqUrl = baseUrl + reqPath

        const loginData = {
            "user": {
                "email": email,
                "password": password,
            }
        };

        try{
            const res = await fetch(reqUrl,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(loginData)
            })
            console.log(res);

            const json = await res.json();
            console.log(json);

            const token = json.user.token;
            console.log(token);

            console.log(localStorage);
            localStorage.setItem("token",token);
            console.log(localStorage);
        }
        catch(error){
            console.error(error);
        }

        

    }


    const handleInputEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handleInputPassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleSubmitLogin = (e) =>{
        e.preventDefault();
        login(email,password)
    }
    

    return (
        <>
            <h1>로그인</h1>
            <section>
                <h2>이메일, 비밀번호 입력하는곳</h2>
                <form onSubmit={handleSubmitLogin}>
                    <input type="text" placeholder='이메일입력' onChange={handleInputEmail} value={email} />
                    <input type="text" placeholder='비밀번호입력' onChange={handleInputPassword} value={password} />

                    <button>로그인</button>
                    <button type='button'>회원가입</button>
                </form>
            </section>
        </>
    )
}
