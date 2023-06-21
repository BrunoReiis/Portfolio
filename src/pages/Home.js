import './Home.css'

export const Home = () => {
    return (

        <section id='main' className='main'>
            <div className='infoMain'>
                <h1>Olá, sou Bruno Reis!</h1>
                <h2>Programador FullStack Júnior</h2>
                <h2>Habilidades:</h2>
                <div className='iconsLinguagens'>
                    <a href="https://react.dev" target='_blank' rel="noreferrer"><img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></img></a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target='_blank' rel="noreferrer"><img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"></img></a>
                    <a href="https://www.typescriptlang.org" target='_blank' rel="noreferrer"><img align="center" alt="TypeJs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"></img></a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target='_blank' rel="noreferrer"><img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"></img></a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target='_blank' rel="noreferrer"><img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"></img></a>
                    <a href="https://nodejs.org/en" target='_blank' rel="noreferrer"><img align="center" alt="nodejs" height="30" width="40" src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"></img></a>
                    <a href="https://git-scm.com" target='_blank' rel="noreferrer"><img align="center" alt="git" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"></img></a>
                    <a href="https://www.python.org" target='_blank' rel="noreferrer"><img align="center" alt="Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"></img></a>
                    <a href="https://angular.io" target='_blank' rel="noreferrer"><img align="center" alt="Angular" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg"></img></a>
                    <a href="https://learn.microsoft.com/pt-br/dotnet/csharp/" target='_blank' rel="noreferrer"><img align="center" alt="C#" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"></img></a>
                </div>

                <div className='buttons'>
                    <button>About Me</button>
                    <button>View CV</button>
                </div>
            </div>

            <div className="gifAtomo">
                <div className="circulo Um"></div>
                <div className="circulo Dois"></div>
                <div className="circulo Tres"></div>
            </div>
        </section>
    );
}