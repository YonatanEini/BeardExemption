import { NavBarComponent } from './NavBarHtml';
import React, { useState, useEffect } from 'react';
import logo from '../Images/resultImage.jpg'
import './RequestStatusStyle.css'
import jsPDF from "jspdf";
import { renderToString } from 'react-dom/server';

function RequestStatusComoponent() {

  var id = 1212121212;
  var requestData

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/getActiveRequest/${id}`)
    .then(response => 
      {
        if (response.status == 200){
          response.json().then(data =>{
            requestData = data
            updateRequestValues()
          })

        }
        else{
          alert('לא  קיימת בקשה קיימת במערכת')
          console.log("error");
        }
    }, []);
});

const Prints = () => (
  <table style = {{fontFamily: 'arial, sans-serif' }, {borderCollapse: 'collapse'}, {width: '100%'}}>
  <tr>
    <th>Personal Id</th>
    <th> Type</th>
    <th>Gaf Name</th>
    <th>Descition</th>

  </tr>
  <tr>
    <td>{id}</td>
    <td>{convertFromType(requestData.beardRequestType)}</td>
    <td>{requestData.gafName}</td>
    <td>{converToDeside(requestData.requestStatus)}</td>

  </tr>
</table>
);
    return <div className="RequestStatusComoponent">
        <NavBarComponent/>
        <>
  <meta charSet="UTF-8" />
  <div className="job">
    <div id="data-wrapper" className="wrapper">
      <div className="detail-page">
        <div className="main-container">
          <div className="searched-jobs">
            <div id="frame" className="job-overview">
              <div className="job-explain">
                


                <img id="cover-img" className="job-bg" src={logo} />
                <div className="job-logos">
                </div>
                <div style={{minWidth:"75rem"}} className="job-explain-content">
                  <div className="job-title-wrapper">
                    <div id="request-title" className="job-card-title"> החלטת בקשת פטור הזקן    </div>
                   
                    <div className="job-action">
                     
                    </div>
                  </div>
                  
                  <div id='bar' className="explain-bar">
                    <div className="explain-contents">
                      <div className="explain-title">מספר אישי מבקש</div>
                      <div id='requester-id' className="explain-subtitle"></div>

                    </div>
                    <div className="explain-contents">
                      <div className="explain-title">סוג הבקשה</div>
                      <div id='request-type' className="explain-subtitle"></div>
                    </div>
                    <div className="explain-contents">
                      <div  className="explain-title">שם גף</div>
                      <div id="gaf-name" className="explain-subtitle"></div>
                    </div>
                    <div className="explain-contents">
                      <div className="explain-title">תאריך בקשה</div>
                      <div className="explain-subtitle">20/05/2002</div>
                    </div>
                  </div>
                  <div className="overview-text">
                    <div className="overview-text-header">תיאור הבקשה</div>
                    <div id="request-describton" className="overview-text-subheader">
                      We believe that design (and you) will be critical to the
                      company's success. You will work with our founders and our
                      early customers to help define and build our product
                      functionality, while maintaining the quality bar that
                      customers have come to expect from modern SaaS
                      applications. You have a strong background in product
                      design with a quantitavely anf qualitatively analytical
                      mindset. You will also have the opportunity to craft our
                      overall product and visual identity and should be
                      comfortable to flex into working.
                    </div>
                  </div>
                  <div className="overview-text">
                    <div className="overview-text-header"> החלטת הבקשה </div>
                    <div id="request-result" className="explain-subtitle">
                    </div>
                    
                  </div>
                  <a onClick = {ConvertToPDF}>Download File As PDF</a>
                                    <div className="overview-text">
                    <div className="overview-text-header">  חתימות מצורפות </div>
                    <div id="signatures-wrapper" className="explain-subtitle">

                      <div className="img-container-gaf">
                      <img id = "gaf-commander-signature">
                    </img>  
                    <div className="overlay-gaf">חתימת מפקד הגף</div>

                      </div>
                   
                      <div className="img-container-rasar">
                      <img id = "rasar-signature">
                    </img>  
                    <div className="overlay-rasar">חתימת רס"ר</div>

                      </div>
                      
                      <div className="img-container-unit">
                      <img id = "unit-commander-signature">
                    </img>  
                    <div className="overlay-unit">חתימת מפקד יחידה</div>

                      </div>
                    </div>
                  </div>
                        
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>;

function updateRequestValues(){
  var personalID = document.getElementById('requester-id')
  var gafName = document.getElementById('gaf-name')
  var requestDescribtion = document.getElementById('request-describton')
  var requestType = document.getElementById('request-type')
  var requestResult = document.getElementById('request-result')
  var gafCommanderImg = document.getElementById('gaf-commander-signature')
  var rasarSignature = document.getElementById('rasar-signature')
  var unitCommanderSignature = document.getElementById('unit-commander-signature')

  personalID.innerHTML = id
  gafName.innerHTML = requestData.gafName
  requestDescribtion.innerHTML = requestData.requestDescription
  requestType.innerHTML = convertToRquesType(requestData.beardRequestType)
  requestResult.innerHTML = convertToRquestResponse(requestData.requestStatus)
  gafCommanderImg.src = requestData.gafCommanderSignature
  rasarSignature.src = requestData.rasarSignature
  unitCommanderSignature.src = requestData.unitCommanderSignature

}

function convertToRquesType(index){
  var requestType = ['פטור אישי', 'פטור דתי','פטור רפואי']
  return requestType[index]
}

function convertToRquestResponse(index){
  var requestType = ['סורב', 'בתהליך','אושר']
  return requestType[index]
}

function convertFromType(index){
  var requestType = ['Personal Request', 'Religious Request', 'Medical Request']
  return requestType[index]
}

function converToDeside(index){
  var requestType = ['Not Approve','Pending', 'Approved']
  return requestType[index]

}

function ConvertToPDF(){
  const string = renderToString(<Prints />);
  const pdf = new jsPDF("p", "mm", "a4");
  pdf.text("Beard Request Document", 80, 15)
  pdf.fromHTML(string, 30, 15);
  
  var img = new Image()

  img.src = document.getElementById('gaf-commander-signature').src
  pdf.fromHTML('Gaf Commander Signature',15 ,110)
  pdf.addImage(img, 'png', 20, 125, 40, 40) 

  img.src = document.getElementById('rasar-signature').src
  pdf.fromHTML('Rasar Signature',85 ,110)
  pdf.addImage(img, 'png', 80, 125, 40, 40) 

  img.src = document.getElementById('unit-commander-signature').src
  pdf.fromHTML('Unit Commander Signature',145 ,110)
  pdf.addImage(img, 'png', 150, 125, 40, 40) 
  pdf.save("pdf");

}


}

export default RequestStatusComoponent