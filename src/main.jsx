
import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector('#app'))


function MainContent() {
    return <h1>React is great</h1>
}



root.render(<>
    <MainContent />
    <h1>"Hello, World!"</h1>
</>
)
