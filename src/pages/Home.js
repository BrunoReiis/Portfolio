import './Home.css'
import '../components/Navbar.css'

export const Home = () => {
    return (

        <section id='main' className='main'>
            <h1>Hi, i'm Bruno Reis!</h1>
            <h2>A Júnior Fullstack Developer</h2>
            <div className='buttons'>
            <button>About Me</button>
            <button>View CV</button>
            </div>
        </section>
    );
}