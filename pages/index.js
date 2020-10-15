import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import listStyles from "../styles/list";
import imageUrlFor from "../utils/imageUrlFor";
import Filters from "../shared/filter/filter";
import { concertData } from "../data/data";

const query = `*[_type == "details"] {
  _id,
  title,
  releaseDate,
  poster,
  "posterAspect": poster.asset->.metadata.dimensions.aspectRatio,
  "director": crewMembers[job == "Director"][0].person->name
}[0...50]
`;

const Movies = ({ details }) => {
  return (
    <Layout>
      <div>
        <Filters />
      </div>
      <div className="movies">
        <div className="list">
          {concertData.map(details => (
            <div key={details._id} className="movie_padding">
              <Link href="/details/[id]" as={`/details/${details._id}`}>
                <a>
                  {/* {details.poster && (
                    <img
                      src={imageUrlFor(details.poster)
                        .ignoreImageParams()
                        .width(300)}
                      width="100"
                      height={100 / details.posterAspect}
                    />
                  )} */}
                  <img src={details.imageUrl}/>
                    <div style={{ paddingTop: "0.2em", color: "rgba(255,255,255,1)"}} >
                      {details.name}
                      {details.date}
                      {details.city}
                      {details.state}
                      {details.type}
                    </div>
                    {/* <h3 style={{ color: "rgba(255,255,255,1)" }}>{details.title}</h3>
                  {details.director && (
                    <span style={{ color: "rgba(255,255,255,1)" }} className="movies-list__directed-by">
                      Directed by {details.director}
                    </span>
                  )} */}
                </a>
              </Link>
            </div>
          ))}
            </div>
      </div>
        <style jsx>{`
        .movies {
          padding: 1rem;
          margin-top:-3%;
        }
        .movies-list__directed-by {
          display: block;
          font-size: 1rem;
        }
      `}</style>
        <style jsx>{listStyles}</style>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const details = await sanity.fetch(query);
  return {
        props: { details} // will be passed to the page component as props
  };
};

export default Movies;
