import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedUrl }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${embedUrl.substring(
        embedUrl.lastIndexOf("/") + 1
      )}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedUrl: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
