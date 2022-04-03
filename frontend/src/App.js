import React, { useState } from "react";

import Vancouver from "./components/Vancouver";
import Seattle from "./components/Seattle";
import Alaska from "./components/Alaska";
import Toba from "./components/Toba";

function App() {
    const [aqua, setAqua] = useState();

    const handleAquaChange = (aquarium) => {
        setAqua(aquarium);
        console.log(aqua);
    };

    let location;
    switch (aqua) {
        case "van":
            location = <Vancouver />;
            break;
        case "seattle":
            location = <Seattle />;
            break;
        case "alaska":
            location = <Alaska />;
            break;
        case "toba":
            location = <Toba />;
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
                        onChange={() => handleAquaChange("van")}
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
                    Alaska
                    <input
                        type="radio"
                        name="aqua"
                        onChange={() => handleAquaChange("alaska")}
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
                <button type="submit">See Otters</button>
            </form>
            {location}
        </>
    );
}

export default App;
