import React from "react";
import FilterStyle from "../filter.style";

const Dates = () => {

    const onClickDates = () => {
        console.log("Clicked on Dates")
    }

    return (
        <>
            <div className="v136_8">
                <span className="v135_969" onClick={onClickDates}>Dates</span>
                <div className="name"></div>
            </div>
            <style jsx>{FilterStyle}</style>
        </>
    )
}

export default Dates;