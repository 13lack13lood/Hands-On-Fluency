import React, { useState, useRef } from "react";

function WebCamCapture({ setSubmitted }) {
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [videoChunks, setVideoChunks] = useState([]);
    const [recordingText, setRecordingText] = useState("Start");

    const startRecording = () => {
        setVideoChunks([]);
        setRecordingText("Submit");
        setSubmitted(null);

        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
                mediaRecorderRef.current = new MediaRecorder(stream);
                mediaRecorderRef.current.ondataavailable = (e) => {
                    if (e.data.size > 0) {
                        videoChunks.push(e.data);
                    }
                };
                mediaRecorderRef.current.onstop = () => {
                    const blob = new Blob(videoChunks, { type: "video/webm" });
                    sendVideoToBackend(blob);
                };
                mediaRecorderRef.current.start();
            })
            .catch((error) => console.error("Error accessing webcam:", error));
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setRecordingText("Start");
        }
    };

    const sendVideoToBackend = (blob) => {
        if (blob) {
            const formData = new FormData();
            formData.append("video", blob, "recorded-video.webm");

            fetch("http://127.0.0.1:5000/upload", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.text())
                .then((res) => {
                    console.log(res);
                    setSubmitted(res);
                })
                .catch((error) => {
                    console.error("Error sending video to the backend:", error);
                });
        }
    };

    return (
        <div className="flex flex-row py-5 items-center">
            <video ref={videoRef} autoPlay muted />
            <button
                className="bg-primary text-white text-3xl p-3 px-4 rounded-3xl ml-10 transition ease-in-out hover:scale-125 duration-200"
                onClick={
                    recordingText == "Start"
                        ? () => startRecording()
                        : () => stopRecording()
                }
            >
                Submit
            </button>
        </div>
    );
}

export default WebCamCapture;
