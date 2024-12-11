import React from 'react';

const LoginScreen = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#161616' }}>
      <div style={{ width: 604, height: 604, left: 50, top: 167, position: 'absolute' }}>
        <div style={{ width: 604, height: 604, left: 0, top: 0, position: 'absolute', background: '#2C2C2C', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10, border: '1px black solid' }} />
        <img style={{ width: 250, height: 250, left: 177, top: 168, position: 'absolute' }} src="https://via.placeholder.com/250x250" alt="Placeholder" />
        <div style={{ width: 467, left: 60, top: 54, position: 'absolute', textAlign: 'center' }}>
          <span style={{ color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
            Organizado? Sobrecarregado? Ou precisa <br />
          </span>
          <span style={{ color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>
            guardar e ver suas tarefas com facilidade?!
          </span>
        </div>
        <div style={{ left: 116, top: 504, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
          Gerencie suas tarefas sem esforço em qualquer lugar!
        </div>
      </div>
      <div style={{ width: 1191, height: 42, left: 50, top: 32, position: 'absolute' }}>
        <div style={{ left: 0, top: 3, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
          Clockwork
        </div>
        <div style={{ left: 949, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
          Já é um usuário? Faça login
        </div>
      </div>
      <div style={{ width: 290, height: 414, left: 900, top: 240, position: 'absolute' }}>
        <div style={{ width: 290, height: 38, left: 0, top: 275, position: 'absolute' }}>
          <div style={{ width: 290, height: 38, left: 0, top: 0, position: 'absolute', background: '#D3263C', borderRadius: 50 }} />
          <div style={{ left: 99, top: 10, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
            Inscreva-se
          </div>
        </div>
        <div style={{ left: 83, top: 335, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
          ou faça login com
        </div>
        <div style={{ width: 290, height: 38, left: 0, top: 376, position: 'absolute' }}>
          <div style={{ width: 139, height: 38, left: 0, top: 0, position: 'absolute', background: '#D3263C', borderRadius: 50 }} />
          <div style={{ left: 39, top: 10, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
            Google
          </div>
          <div style={{ width: 139, height: 38, left: 151, top: 0, position: 'absolute', background: '#D3263C', borderRadius: 50 }} />
          <div style={{ left: 187, top: 10, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
            Facebook
          </div>
        </div>
        <div style={{ width: 290, height: 259, left: 0, top: 0, position: 'absolute' }}>
          <div style={{ width: 290, height: 40, left: 0, top: 65, position: 'absolute' }}>
            <div style={{ width: 290, height: 40, left: 0, top: 0, position: 'absolute', background: '#2C2C2C', borderRadius: 50 }} />
            <div style={{ left: 17, top: 14, position: 'absolute', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
              Seu nome completo
            </div>
          </div>
          <div style={{ width: 290, height: 40, left: 0, top: 116, position: 'absolute' }}>
            <div style={{ width: 290, height: 40, left: 0, top: 0, position: 'absolute', background: '#2C2C2C', borderRadius: 50 }} />
            <div style={{ left: 17, top: 12, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
              Seu nome de usuário único
            </div>
          </div>
          <div style={{ width: 290, height: 91, left: 0, top: 168, position: 'absolute' }}>
            <div style={{ width: 290, height: 40, left: 0, top: 0, position: 'absolute', background: '#2C2C2C', borderRadius: 50 }} />
            <div style={{ width: 290, height: 40, left: 0, top: 51, position: 'absolute', background: '#2C2C2C', borderRadius: 50 }} />
            <div style={{ left: 17, top: 11, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
              Senha
            </div>
            <div style={{ left: 17, top: 62, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
              Repita a senha
            </div>
          </div>
          <div style={{ left: 29, top: 0, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
            Faça seu cadastro aqui!
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;