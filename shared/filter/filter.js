import React from "react";
import FilterStyle from "./filter.style";
import Genres from "./component/geners"
import Regions from "./component/regions"
import Dates from "./component/dates"
import Tags from "./common/tags";
import Link from "next/link";

const Filters = () => {

    return (
        <>
            <div className="">
                <div className="genres_regions_dates col-md-6">
                    <Genres />
                    <Regions />
                    <Dates />
                </div>
                <div className="grid_schedule col-md-6">
                    <span className="v135_114">Sort by: Date</span>
                    <div className="v135_142">
                        <Link href="/">
                            <div className="v144_111">
                                <span className="v135_115" style={{ color: "white" }}>Grid  </span>
                                <div className="v135_129">
                                    <div className="v135_123"></div>
                                    <div className="v135_126"></div>
                                    <div className="v135_124"></div>
                                    <div className="v135_127"></div>
                                    <div className="v135_125"></div>
                                    <div className="v135_128"></div>
                                </div>
                            </div>
                        </Link>
                        <div className="v158_576">
                            <Link href="/schedule">
                                <span className="v135_116">Schedule</span>
                            </Link>
                            <div className="v271_5125">
                                <div className="v271_5126">
                                    <div className="v271_5127"></div>
                                </div>
                            </div>
                            <div className="v135_141">
                                <div className="fa fa-calendar" aria-hidden="true">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="tags">

                <Tags />
                {/* <span className="a133_814">💖 SAVE THIS SEARCH</span> */}
            </div>
            <style jsx>{FilterStyle}</style>
        </>
    )
}

export default Filters;