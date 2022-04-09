import React from "react";

function Vancouver(props) {
    return (
        <div className="otterList">
            <h2>Vancouver Aquarium</h2>
            {props.otters ? (
                <ul className="otter">
                    {props.otters.map((item) => (
                        <li key={item.name}>
                            <p>Name: {item.name}</p>
                            <p>Age: {item.age}</p>
                            <p>{item.gender}</p>
                            <img src={item.img} alt={item.name} />
                            <div>{item.description}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>🦦🇨🇦🦦🇨🇦🦦🇨🇦🦦🇨🇦🦦🇨🇦🦦🇨🇦🦦🇨🇦🦦🇨🇦</div>
            )}
        </div>
    );
}

export default Vancouver;
