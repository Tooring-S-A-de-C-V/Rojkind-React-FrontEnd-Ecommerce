/* styles.js */
import css from "styled-jsx/css";

export default css`
  .list {
    display: grid;
    margin: 0;
    padding: 5%;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  }

  .list > li {
    display: block;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: stretch;
    color:white;
  }
  .movie_padding{
  padding:inherit;
  color:white;
  }
  .list a {
    text-decoration: none;
    display: block;
    flex-grow: 1;
    color: #333;
  }

  .list h3 {
    margin: 0;
    padding: 0;
    line-height: 1em;
  }

  .list img {
    display: block;
    // height: auto;
    // width: 100%;
    height: 350px !important;
    width: 250px !important;
    margin-right: 0.5rem;
  }

  .list .noImage {
    border: 1px solid red;
  }

  .link {
    cursor: pointer;
  }
`;
