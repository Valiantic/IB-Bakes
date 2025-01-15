import React, { Component } from "react";

class KommunicateChat extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function(d, m) {
      var kommunicateSettings = {
        "appId": "e43d67cc07f5a237628d43e06e0ce004",
        "popupWidget": true,
        "automaticChatOpenOnNavigation": true,
        "onInit": function() {
          // Add responsive styling
          const kmIframe = document.getElementById("kommunicate-widget-iframe");
          if (kmIframe) {
            // Make widget responsive
            kmIframe.style.maxWidth = "100%";
            kmIframe.style.height = "auto";
            
            // Adjust for mobile
            if (window.innerWidth <= 768) {
              kmIframe.style.width = "85%";
              kmIframe.style.bottom = "20px";
              kmIframe.style.right = "20px";
            }
          }
        }
      };

      // Add resize listener for responsive behavior
      window.addEventListener('resize', function() {
        const kmIframe = document.getElementById("kommunicate-widget-iframe");
        if (kmIframe) {
          if (window.innerWidth <= 768) {
            kmIframe.style.width = "85%";
          } else {
            kmIframe.style.width = "380px"; // default width
          }
        }
      });

      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);

      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return (
      <div className="kommunicate-widget-container">
        <style>
          {`
            @media screen and (max-width: 768px) {
              #kommunicate-widget-iframe {
                max-height: 80vh !important;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default KommunicateChat;