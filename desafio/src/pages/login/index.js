import { useState } from 'react';
import Swal from 'sweetalert2'
import './index.css';
import imglogin from '../login/UI-UX team-rafiki.svg'

import usuarioService from '../../service/usuario-service';

function Login (){
    const [email, setEmail] = useState('admin@admin.com');
    const [senha, setSenha] = useState('123456');

    const logar = () => {
  
        if(!email || !senha){
            Swal.fire({
                icon: 'error',
                text: 'Os campos de e-mail e senha são obrigatórios!',
                showConfirmButton: true
            });
            return;
        }     
        // Me comunicar com a api e fazer a autenticação...

        usuarioService.autenticar(email, senha)
        .then(response => {
            usuarioService.salvarToken(response.data.token);
            usuarioService.salvarUsuario(response.data.usuario);
            
            window.location='/';
        })
        .catch(erro =>{
            console.log(erro)
        })
    };

    return (
        <div className="container">

        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <img className = "col-sm-6" src = {imglogin}/>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Seja bem vindo!</h1>
                                    </div>
                                    <form className="user">
                                    <div className="form-group">
                                        <label for="email">E-mail</label> <br/>
                                        
                                        <input id="email" className="form-control form-control-user" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="exemplo@exemplo.com" />
                                    </div>
                                    <div className="form-group">
                                        <label for="senha">Senha</label> <br/>
                                        
                                        <input id="senha" className="form-control form-control-user" value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="123456" />
                                    </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                <label className="custom-control-label" for="customCheck">Lembre de mim</label>
                                            </div>
                                        </div>
                                        <button id="btn-entrar" className="btn btn-primary btn-user btn-block" onClick={logar}> Entrar</button>
                                        
                                    </form>
                                    <hr/>
                                    <div className="text-center">
                                        <a className="small" href="#">Esqueceu sua senha?</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    )
}

export default Login;