import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Speech = () => {

  const [transcription, setTranscription] = useState(''); 
  const [isListening, setIsListening] = useState(false);

  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous: true
    });
  }

  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  }

  useEffect(() => {
    if(transcript !== '') {
      setTranscription(transcript);
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <button onClick={startListening} disabled={isListening}>
        Start 
      </button>

      <button onClick={stopListening} disabled={!isListening}>
        Stop
      </button>

      {isListening ?
        <div 
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => {
            setTranscription(e.target.innerText);
          }}
        >
          {transcription}
        </div> 
       : null}

    </div>
  );
};

export default Speech;