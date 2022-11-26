import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";

import * as tf from "@tensorflow/tfjs-core";
const cocoSsd = require("@tensorflow-models/coco-ssd");

export default function Detector() {
  const videoRef = useRef(null);

  // load coco ssd model
  cocoSsd.load().then((res) => {
    const model = res;
    console.log("loaded");
  });

  useEffect(() => {
    //getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 600 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  return (
    <div>
      <button>Take a photo</button>
      <video ref={videoRef} />
      <canvas />
    </div>
  );
}
