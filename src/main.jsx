
import { createRoot } from "react-dom/client"
import "./main.css"
const root = createRoot(document.querySelector('#app'))



function Header() {
    return (
        <header className="header">
            <img src="vite.svg" alt="Vite logo" width="40px" />
            <nav className="header-nav">
                <ul className="header-nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function ReactFacts() {
    return (
        <>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first release in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </>)
}

console.log(<h1>Fun facts about React</h1>)
console.log("<h1>Fun facts about React</h1>")


root.render(<>
    <Header />
    <ReactFacts />
</>
)
