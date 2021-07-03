// import React from "react";
// import PropTypes from "prop-types";

// const YoutubeEmbed = ({ embedUrl }) => (
//   <div className="video-responsive">
//     <iframe
//       width="560"
//       height="315"
//       src={`https://www.youtube.com/embed/${embedUrl.substring(
//         embedUrl.lastIndexOf("/") + 1
//       )}`}
//       title="YouTube video player"
//       frameborder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowfullscreen
//     ></iframe>
//   </div>
// );

// YoutubeEmbed.propTypes = {
//   embedUrl: PropTypes.string.isRequired,
// };

// export default YoutubeEmbed;

// /   return {
//     termid: 1,
//     term: "boolean",
//     definition:
//       "A type with two values, true or false used in boolean expressions.",
//     resources: [
//       {
//         resid: 1,
//         link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
//         type: "web",
//         language: "javascript",
//       },
//       {
//         resid: 2,
//         link: "https://www.w3schools.com/js/js_booleans.asp",
//         type: "web",
//         language: "javascript",
//       },
//       {
//         resid: 3,
//         link: "https://youtu.be/B4ZCFdrBmbE",
//         type: "video",
//         language: "javascript",
//       },
//     ],
//   };

// const term = SingleTerm();

  // function embed(resource) {
  //   let item;
  //   if (resource.type === "web") {
  //     item = <li key={resource.resid}>{resource.link}</li>;
  //   } else {
  //     item = <YoutubeEmbed embedUrl={resource.link} />;
  //   }

  //   return item;
  // }