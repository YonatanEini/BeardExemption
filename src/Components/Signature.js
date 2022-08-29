import React, { useState, useRef } from "react";
import SignaturePad from "react-signature-canvas";
import './SignatureStyle.css'

function Signature(props) {


    const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url
    const sigCanvas = useRef({});
    const clear = () => sigCanvas.current.clear();
  
    function SaveSignature(){
        var signaturePad = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")
        sendBeardRequest(signaturePad)
    }

    function getUpdateRequestUrl(){
      if (props.requestDocuments.autorise == 1)
        return 'http://127.0.0.1:8080/gafCommanderRequestUpdate'
      
        if (props.requestDocuments.autorise == 2)
            return 'http://127.0.0.1:8080/rasarRequestUpdate'
      
          return 'http://127.0.0.1:8080/unitCommanserRequestUpdate'
        
      }

    async function sendBeardRequest(signature){
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        decisdedDocumet : props.requestDocuments.requestDocuments,
        signature : signature
    })
  };

  fetch(getUpdateRequestUrl(), requestOptions)
      .then(response =>{
        if (response.status == 200){
            alert("בקשות נחתמו בהצלחה במערכת")
            window.location.reload(); 

        }
        else{
          alert('בקשת פטור זקן נכשלה')
          window.location.reload(); 

        }
      })   
  }
            
    return (
      <div className="signature-wrapper">
        <h1>אנא חתום על הבקשות </h1>
        <SignaturePad
                ref={sigCanvas}
                canvasProps={{
                  className: "signatureCanvas"
                }}
              />
              <div className="buttons-wrapper-pad">
              <button onClick={SaveSignature}>Save</button>
              <button onClick={clear}>Clear</button>
              </div>
        <br />
        <br />
        
        {imageURL ? (
          <img
            src={imageURL}
            alt="my signature"
            style={{
              display: "block",
              margin: "0 auto",
              border: "1px solid black",
              width: "150px"
            }}
          />
        ) : null}
      </div>
        );
            
    }
  
export default Signature;
