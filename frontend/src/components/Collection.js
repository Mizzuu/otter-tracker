import React, { useState } from "react";
import axios from "axios";

function Collection() {
    const [aqua, setAqua] = useState();
    const [chosenOtter, setChosenOtter] = useState();
    const [imgURL, setImgURL] = useState("");

    const postOtter = async (e) => {
        e.preventDefault();

        let collectionConfig = {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "/collection",
            },
        };
        const data = JSON.stringify({ aqua, chosenOtter, imgURL });
        console.log(data);

        await axios
            .post("http://localhost:5000/collection", data, collectionConfig)
            .then(
                (res) => localStorage.setItem({ aqua, chosenOtter, imgURL }),
                setAqua(""),
                setChosenOtter(""),
                setImgURL("")
            )
            .catch((error) => console.log(error));
    };

    const showCollection = (e) => {
        e.preventDefault();
        axios
            .get("http://localhost:5000/collection")
            .then((result) => {
                if (result) {
                    setChosenOtter(result.data);
                    console.log(chosenOtter);
                }
            })

            .catch((error) => console.log(error));
    };

    const handleChange = (e) => {
        setAqua(e.target.value);
    };

    const handleOtterChange = (e) => {
        setChosenOtter(e.target.value);
    };

    let otters;
    switch (aqua) {
        case "vancouver":
            otters = (
                <div>
                    <legend>Which otter?</legend>
                    <label>
                        Katmai
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="katmai"
                        />
                    </label>
                    <label>
                        Mak
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="mak"
                        />
                    </label>
                    <label>
                        Kunik
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="kunik"
                        />
                    </label>
                    <label>
                        Rialto
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="rialto"
                        />
                    </label>
                    <label>
                        Hardy
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="hardy"
                        />
                    </label>
                    <label>
                        Tazlina
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="tazlina"
                        />
                    </label>
                    <label>
                        Joey
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="joey"
                        />
                    </label>
                    <label>
                        Quatse
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="quatse"
                        />
                    </label>
                </div>
            );
            break;
        case "seattle":
            otters = (
                <div>
                    <legend>Which otter?</legend>
                    <label>
                        Mishka
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="mishka"
                        />
                    </label>
                    <label>
                        Sekiu
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="sekiu"
                        />
                    </label>
                </div>
            );
            break;
        case "birmingham":
            otters = (
                <div>
                    <legend>Which otter?</legend>
                    <label>
                        Ola
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="ola"
                        />
                    </label>
                    <label>
                        Ozzy
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="ozzy"
                        />
                    </label>
                </div>
            );
            break;
        case "toba":
            otters = (
                <div>
                    <legend>Which otter?</legend>
                    <label>
                        Mei
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="mei"
                        />
                    </label>
                    <label>
                        Kira
                        <input
                            type="radio"
                            onChange={(e) => handleOtterChange(e)}
                            name="chosenOtter"
                            value="kira"
                        />
                    </label>
                </div>
            );
            break;
        default:
            otters = <div>🦦🦦</div>;
    }

    return (
        <>
            <form
                action="/collection"
                method="post"
                name="otter-collection"
                onSubmit={(e) => postOtter(e)}
            >
                <legend>Which Aquarium?</legend>
                <label>
                    Vancouver🇨🇦
                    <input
                        type="radio"
                        name="aqua"
                        value="vancouver"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label>
                    Seattle🇺🇸
                    <input
                        type="radio"
                        name="aqua"
                        value="seattle"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label>
                    Birmingham🇬🇧
                    <input
                        type="radio"
                        name="aqua"
                        value="birmingham"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label>
                    Toba🇯🇵
                    <input
                        type="radio"
                        name="aqua"
                        value="toba"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                {otters}
                <label>
                    Add image URL
                    <input
                        type="text"
                        name="imgURL"
                        onChange={(e) => setImgURL(e.target.value)}
                        value={imgURL}
                    />
                </label>
                <button type="submit" onClick={(e) => showCollection(e)}>
                    Add Otter
                </button>
            </form>

            {chosenOtter ? (
                <div>
                    <p>{console.log(chosenOtter)}</p>
                    <ul>
                        {chosenOtter.forEach((otter) => {
                            <li key={otter.aqua}>
                                <p>{otter.aqua}</p>
                                <p>{otter.chosenOtter}</p>
                                <img
                                    src={otter.imgURL}
                                    alt={otter.chosenOtter}
                                />
                            </li>;
                        })}
                    </ul>
                </div>
            ) : null}
        </>
    );
}

export default Collection;
