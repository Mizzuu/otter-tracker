import React, { useState } from "react";
import Vancouver from "./Vancouver";
import Seattle from "./Seattle";
import Birmingham from "./Birmingham";
import Toba from "./Toba";
import axios from "axios";
import Collection from "./Collection";

function Home() {
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
            break;
        default:
    }

    return (
        <div className="home">
            <form>
                <h3>Choose Aquarium</h3>
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
        </div>
    );
}

export default Home;
