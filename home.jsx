import { Link } from 'react-router-dom';
import '../css/home.css';

function Home() {
    return (
        <div className="home-page">
            <header>
                <h1>Welcome to Our Health Hub</h1>
            </header>

            <nav>
                <Link to="/contacts">Contact Us</Link>
                <Link to="/appointments">Appointments</Link>
                <Link to="/information">Information</Link>
                <Link to="/prescription">Prescription Reminders</Link>
            </nav>

            <main>
                <section id="news1">
                    <h2>Latest News 1</h2>
                    <p>Reschedule in Pediatrician visit.</p>
                </section>

                <section id="news2">
                    <h2>Latest News 2</h2>
                    <p>A seminar on personal hygiene will be conducted on 27th.</p>
                </section>

                <section id="news3">
                    <h2>Latest News 3</h2>
                    <p>This is the third news section.</p>
                </section>
            </main>
        </div>
    );
}

export default Home;