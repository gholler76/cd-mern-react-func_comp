import React, { useState } from 'react';

const Box = (props) => {
    const [boxcolor, setBoxcolor] = useState("");

    //array of boxes and push new boxes
    const [boxarray, setBoxarray] = useState([]);


    const makeSquare = (e) => {
        e.preventDefault();
        const boxStyle = {
            backgroundColor: boxcolor,
            width: "150px",
            height: "150px",
            padding: "10px",
            display: "inline-flex"
        };

        setBoxarray([...boxarray, boxStyle])

    }


    return (
        <>
            <form onSubmit={makeSquare}>
                <div>
                    <label>Enter a color: </label>
                    <input type="text" onChange={(e) => setBoxcolor(e.target.value)} value={boxcolor} />
                </div>
                <button type="submit">Add</button>
            </form>
            <div style={{ display: "flex" }}>
                {boxarray.map((box, i) => {
                    return (
                        <div key={i} style={box} />
                    )
                })}
            </div>
        </>
    );
}

export default Box;