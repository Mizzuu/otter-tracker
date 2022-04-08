import React, { useState } from "react";

import Vancouver from "./components/Vancouver";
import Seattle from "./components/Seattle";
import Birmingham from "./components/Birmingham";
import Toba from "./components/Toba";
import axios from "axios";

function App() {
    const [aqua, setAqua] = useState();

    const handleAquaChange = (aquarium) => {
        setAqua(aquarium);
        console.log(aqua);
    };

    const [otters, setOtters] = useState();

    const loadVan = (e) => {
        e.preventDefault();
        axios
            .get(`http://localhost:5000/api/${aqua}`)
            .then((result) => {
                if (result) {
                    setOtters(result.data);
                    console.log(otters);
                }
            })

            .catch((error) => console.log(error));
    };

    let location;
    switch (aqua) {
        case "vancouver":
            location = <Vancouver otters={otters} setOtters={setOtters} />;
            break;
        case "seattle":
            location = <Seattle otters={otters} setOtters={setOtters} />;
            break;
        case "birmingham":
            location = <Birmingham otters={otters} setOtters={setOtters} />;
            break;
        case "toba":
            location = <Toba otters={otters} setOtters={setOtters} />;
    }

    return (
        <>
            <form>
                <legend>Choose Aquarium</legend>
                <label>
                    Vancouver
                    <input
                        type="radio"
                        name="aqua"
                        onChange={() => handleAquaChange("vancouver")}
                    />
                </label>
                <label>
                    Seattle
                    <input
                        type="radio"
                        name="aqua"
                        onChange={() => handleAquaChange("seattle")}
                    />
                </label>
                <label>
                    Birmingham
                    <input
                        type="radio"
                        name="aqua"
                        onChange={() => handleAquaChange("birmingham")}
                    />
                </label>
                <label>
                    Toba
                    <input
                        type="radio"
                        name="aqua"
                        onChange={() => handleAquaChange("toba")}
                    />
                </label>
                <button type="submit" onClick={(e) => loadVan(e)}>
                    See Otters
                </button>
            </form>
            {location}
        </>
    );
}

export default App;
