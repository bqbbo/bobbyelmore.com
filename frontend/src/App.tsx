import { useState, useEffect } from "react";

// Define what the backend JSON response looks like
interface StatusResponse {
    message: string;
}

function App() {
    // Tell React this state will hold a string
    const [message, setMessage] = useState<string>("Loading...");

    useEffect(() => {
        fetch("/api/status")
            .then((res) => res.json())
            .then((data: StatusResponse) => setMessage(data.message))
            .catch((err) => setMessage(`API fetch failed: ${err.message}`));
    }, []);

    return (
        <div>
            <p>
                hi i'm extremely lazy and haven't coded this yet, please check
                back later
            </p>
            <p>
                backend status: <strong>{message}</strong>
            </p>
        </div>
    );
}

export default App;
