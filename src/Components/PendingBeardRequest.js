import { NavBarComponent } from './NavBarHtml';
import './PendingBeardRequestStyle.css'
import backgroundImg from '../Images/paperImage.jpg'
import React, { useState, useEffect } from 'react';
import Signature from './Signature';


function PendingBeardRequest() {
    const commanderAutorise = 3

    const [state, setCurrentState] = useState({
        index : 0,
        descidedDocuments : [],
        signaturePad : []
    });
    var pendingDocument = [];

    function getPendingRequestUrl(){
      if (commanderAutorise == 1){
          return "http://127.0.0.1:8080/getGafCommanderPendingRequests" 
      }
      if (commanderAutorise == 2)
        return "http://127.0.0.1:8080/getRasarPendingRequests"
      
        return "http://127.0.0.1:8080/getUnitCommanderPendingRequests"
    }

    useEffect(() => {
        fetch(getPendingRequestUrl())
        .then(response => response.json())
        .then(data => { 
            pendingDocument = data
            updateRequestValues()
        }, []);
    });

    return <div className="PendingBeardRequest">
        <NavBarComponent/>
        <>
  <meta charSet="UTF-8" />
  <div className="job">
    <div className="wrapper">
        {state.signaturePad}
      <div className="detail-page">
        <div className="main-container">
          <div className="searched-jobs">
            <div id="frame" className="job-overview">
              <div className="job-explain">
                  <div className="confirm-btn">
                  {state.descidedDocuments.length > 0
                    ? <button id="confirm-btn" onClick={()=>{
                        setCurrentState({
                            index : state.index,
                            descidedDocuments : state.descidedDocuments,
                            signaturePad : state.signaturePad.concat(<Signature requestDocuments = { {
                              requestDocuments : state.descidedDocuments,
                              autorise : commanderAutorise
                            }}></Signature>)
                        })
                    }} style = {{backgroundColor: 'forestgreen'}} class="noselect"><span class='text'>Submit All</span><span class="icon">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                              <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                          </svg>
                    </span>
                    </button>
                    : <br></br>
                     }             
                  
                  </div>
              <p className="pBtn">
	                    <a class="prev" onClick = {()=>{
                        if (state.index > 0){
                            setCurrentState({
                                index : state.index - 1,
                                descidedDocuments : state.descidedDocuments,
                                signaturePad : []
                            })
                        }
                        else{
                            setCurrentState({
                                index : state.index,
                                descidedDocuments : state.descidedDocuments,
                                signaturePad : []
                            })
                        }

                        }}>Previous</a>

	                    <a class="next" onClick = {()=>{
                        if (state.index < pendingDocument.length -1 ){
                            setCurrentState({
                                index : state.index + 1,
                                descidedDocuments : state.descidedDocuments,
                                signaturePad : []
                            });
                        }
                        else{
                            setCurrentState({
                                index : state.index,
                                descidedDocuments : state.descidedDocuments,
                                signaturePad : []
                            });
                        }
                      
                        }}>Next</a>
                </p>


                <img className="job-bg" src={backgroundImg} />
                <div className="job-logos">
                </div>
                <div style={{minWidth:"75rem"}} className="job-explain-content">
                  <div className="job-title-wrapper">
                    <div id="request-title" className="job-card-title"> בקשת פטור ממתינה לאישור</div>
                   
                    <div className="job-action">
                     
                    </div>
                  </div>
                  
                  <div className="explain-bar">
                    <div className="explain-contents">
                      <div className="explain-title">מספר אישי מבקש</div>
                      <div id='requester-id' className="explain-subtitle"></div>
                    </div>
                    <div className="explain-contents">
                      <div className="explain-title">סוג הבקשה</div>
                      <div id='request-type' className="explain-subtitle">פטור זקן דתי</div>
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
                    <div className="overview-text-header">דרישות לקבלת הפטור המבוקש</div>
                    <div id="request-demands" className="explain-subtitle">
                    </div>
                    
                  </div>
                
                    <div className="buttons-wrapper">
                    <button onClick={()=>AddDecidedRequest(0)} class="noselect"><span class='text'>Reject</span><span class="icon">
                  <svg viewBox="0 0 20 20">
							<path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z">

                            </path>
						</svg>
                  
                  </span>
                  </button>

                    <button onClick={()=>AddDecidedRequest(1)} style = {{backgroundColor: '#1bbb3d'}} class="noselect"><span class='text'>Accept</span><span class="icon">
                  <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
						</svg>
                  </span>
                  </button>
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
    var requestDemand = document.getElementById('request-demands')

    personalID.innerHTML = pendingDocument[state.index].personalId
    gafName.innerHTML = pendingDocument[state.index].gafName
    requestDescribtion.innerHTML = pendingDocument[state.index].requestDescription
    requestType.innerHTML = convertToRquesType(pendingDocument[state.index].beardRequestType)
    requestDemand.innerHTML = findRequestDemands(pendingDocument[state.index].beardRequestType)
    updateFrameColor(personalID.innerHTML)

}

function convertToRquesType(index){
   var requestType = ['פטור אישי', 'פטור דתי','פטור רפואי']
   return requestType[index]
}

function findRequestDemands(index){
    var requestDemands = ['פטור זה מוענק לחייל שהזקן או השפם מהווה חלק מהותי מדמותו, מהוויתו או מזהותו או כי קיימת סיבה חריגה המצידה את מתן היטר לקבלת הפטור ',
    'פטור זקן דתי ניתן למי שמגדל זקן מטעמי דת. אם ברצונך לקבל את הפטור עליך להוכיח כי אתה מקיים אורח חיים דתי, שומר את מצוות השבת, משתתף קבוע בתפילות, בקיא בברכות השונות ומקיים את כל המצוות', 
    'בקשת פטור מעטמיים רפואיים - חייל עם מעל 20 פצעים על עור הפנים, אסתמה של העור, אקזמה בעור הפנים, אלרגיה חמורה, צלקות או חתכים במהלך גילוח']
    
    return  requestDemands[index]
}
function AddDecidedRequest(requestType){
    var personalID = document.getElementById('requester-id').innerHTML
    var index = checkIRequestDocumentExist(personalID)

    if (index == -1){
        if (state.index < pendingDocument.length - 1){
            
            setStateStatus(state.index + 1, state.descidedDocuments.concat({
                personalId : personalID,
                requestStatus : requestType
            }))
        }
        else{

            setStateStatus(state.index, state.descidedDocuments.concat({
                personalId : personalID,
                requestStatus : requestType
            }))
        }
    }
    else{
        state.descidedDocuments[index] = {personalId : state.descidedDocuments[index].personalId, requestStatus : requestType}
            if (state.index < pendingDocument.length - 1){
                setStateStatus(state.index + 1, state.descidedDocuments)
            }
            else{
                setStateStatus(state.index, state.descidedDocuments)

            }
        
    }
    
}

function updateFrameColor(personalId){
    var color = 'none'
    const index = checkIRequestDocumentExist(personalId)
    if (index != -1){
        if (state.descidedDocuments[index].requestStatus == 0)
            color = 'red'
        else
            color = 'green'
    }
    if (color != 'none'){
            document.getElementById('frame').style.border = color + " 2px solid"
    }
    else{
             document.getElementById('frame').style.border = "none"
    }
}

function checkIRequestDocumentExist(personalId){
        return  state.descidedDocuments.findIndex(request => { return request.personalId == personalId });
    }

function setStateStatus(indexValue, documentValue){
    setCurrentState({
        index : indexValue,
        descidedDocuments : documentValue,
    signaturePad : [] })
}
}


export default PendingBeardRequest