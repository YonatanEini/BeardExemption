import React,{Component} from "react";
import { NavBarComponent } from './NavBarHtml';
import './SubmitBeardRequestStyle.css'
import religousIcon from '../Images/religousIcon.png'
import peopleIcon from '../Images/peopleIcon.png'
import medicalIcon from '../Images/mediaclIcon.png'
import soliderImage from '../Images/soliderImg.jpg'
import religousSoliderImage from '../Images/religousSolider.jpg'
import medicalSoliderImage from '../Images/medicalSoliderImage.jpg'
import PendingBeardRequest from "./PendingBeardRequest";

export class BeardRequestComponent extends Component {

componentDidMount() {

const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
var requestType = 0

wrapper.addEventListener("scroll", (e) => {
 e.target.scrollTop > 30
  ? header.classList.add("header-shadow")
  : header.classList.remove("header-shadow");
});


const jobCards = document.querySelectorAll(".job-card");
const jobDetailTitle = document.querySelector(
 ".job-explain-content .job-card-title"
);

const jobBg = document.querySelector(".job-bg");
const jobDetailOverview = document.querySelector(
  ".overview-text-subheader"
 );

jobCards.forEach((jobCard) => {
 jobCard.addEventListener("click", () => {
   var cardValue = jobCard.querySelector(".job-card-title").getAttribute('value')
   if (cardValue == 0){
      jobBg.src = soliderImage;
  }  
  else{ 
      if (cardValue == 1){
          jobBg.src = religousSoliderImage;
      }
      else{
        jobBg.src = medicalSoliderImage;
      }
  }

  const title = jobCard.querySelector(".job-card-title");
  jobDetailTitle.textContent = title.textContent;
  requestType = parseInt(cardValue)
  document.getElementById("keepRequestType").innerHTML = cardValue

  const data = jobCard.querySelector(".job-card-subtitle");
  jobDetailOverview.textContent = data.textContent


  wrapper.classList.add("detail-page");
  wrapper.scrollTop = 0;
  
 });
});



}

async sendBeardRequest(){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      personalId : "1313131313",
      beardRequestType :  document.getElementById("keepRequestType").innerHTML,
      requestDescription : document.getElementById("NameArea").value,
      requestStatus : 0,
      gafName : "somsom",
      gafCommanderSignature : " ",
      rasarSignature : " ",
      unitCommanderSignature : " "
  })
};
fetch('http://127.0.0.1:8080/addBeardRequest', requestOptions)
    .then(response =>{
      if (response.status == 200){
        alert('בקשת פטור זקן בתקבלה בהצלחה במערכת')
      }
      else{
        alert('בקשת פטור זקן נכשלה')
      }
    })   
}


    render() {
      return (
        <>
        
 
  <NavBarComponent> </NavBarComponent>
  <div className="job">
  
    <div className="wrapper">
      <div className="main-container">
        <div className="searched-jobs">
          <div className="searched-bar">
            <div style={{ marginLeft: "40%" }} className="searched-show">
              סוגי פטורים זמינים 
            </div>
            <h1 id="keepRequestType">
</h1>
          </div>
          <div className="job-cards">
            <div className="job-card">
              <div className="job-card-header">
               <img src = {peopleIcon}>
               </img>
                <div className="menu-dot" />
              </div>
              <div className="job-card-title"  value="0">פטור אישי</div>
              <div className="job-card-subtitle">
                פטור זה מוענק לחייל שהזקן או השפם מהווה חלק מדמותו, מהווייתו או
                מזהותו או כי קיימת סיבה חריגה המצדיקה מתן היתר לקבלת הפטור. לחץ
                למטה על מנת להגיש בקשה על רקע לפטור זקן על רקע אישי{" "}
              </div>
              <div className="job-detail-buttons">
                <button className="search-buttons detail-button">זהות</button>
                <button className="search-buttons detail-button">
                  סיבה חריגה
                </button>
              </div>
              <div className="job-card-buttons">
                <button className="search-buttons card-buttons">
                  הגש בקשה
                </button>
              </div>
            </div>
            <div className="job-card">
              <div className="job-card-header">
                 <img id ='religousImg' src = {religousIcon}>
                 </img>
                <div className="menu-dot" />
              </div>
              <div className="job-card-title"  value="1">פטור דתי</div>
              <div className="job-card-subtitle">
                פטור זקן דתי ניתן למי שמגדל זקן מטעמי דת. אם ברצונך לקבל את
                הפטור הזה עליך להוכיח כי אתה מקיים אורח חיים דתי, שומר את מצוות
                השבת, משתתף קבוע בתפילות, בקיא בברכות השונות ומקיים את כל המצוות{" "}
              </div>
              <div className="job-detail-buttons">
                <button className="search-buttons detail-button">
                  אורח חיים דתי
                </button>
                <button className="search-buttons detail-button">
                  שמירה על מצוות
                </button>
              </div>
              <div className="job-card-buttons">
                <button className="search-buttons card-buttons">
                  הגש בקשה
                </button>
              </div>
            </div>
            <div className="job-card">
              <div className="job-card-header">
              <img id ='medicalImg' src = {medicalIcon}>
                 </img>
                <div className="menu-dot" />
              </div>
              <div className="job-card-title"  value="2">פטור רפואי</div>
              <div className="job-card-subtitle">
                בקשת פטור מטעמים רפואיים הפטור - חיילים עם מעל 20 פצעים על עור
                הפנים, אסתמה של העור, אקזמה באזור הפנים, אלרגיה חמורה בפנים,
                פסוריאזיס, צלקות או חתכים, שומות ונגעים בפנים
              </div>
              <div className="job-detail-buttons">
                <button className="search-buttons detail-button">
                  בעיה רפואית
                </button>
                <button className="search-buttons detail-button">
                  אלרגיות
                </button>
              </div>
              <div className="job-card-buttons">
                <button className="search-buttons card-buttons">
                  הגש בקשה
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="job-overview">
          <div className="job-overview-cards">
            <div className="job-overview-card">
              <div className="job-card overview-card">
                <div className="overview-wrapper">
                <img src = {peopleIcon}>
               </img>
                  <div className="overview-detail">
                    <div className="job-card-title" value="0">פטור אישי</div>
                  
                    <div className="job-card-subtitle">
                      פטור זה מוענק לחייל שהזקן או השפם מהווה חלק מדמותו,
                      מהווייתו או מזהותו או כי קיימת סיבה חריגה המצדיקה מתן היתר
                      לקבלת הפטור. לחץ למטה על מנת להגיש בקשה על רקע לפטור זקן
                      על רקע אישי
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-overview-card">
              <div className="job-card overview-card">
                <div className="overview-wrapper">
                <img id ='religousImg' src = {religousIcon}>
                 </img>
                  <div className="overview-detail">
                    <div className="job-card-title" value="1">פטור דתי</div>
                    <div className="job-card-subtitle">
                      פטור זקן דתי ניתן למי שמגדל זקן מטעמי דת. אם ברצונך לקבל
                      את הפטור הזה עליך להוכיח כי אתה מקיים אורח חיים דתי, שומר
                      את מצוות השבת, משתתף קבוע בתפילות, בקיא בברכות השונות
                      ומקיים את כל המצוות
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-overview-card">
              <div className="job-card overview-card">
                <div className="overview-wrapper">
                <img id ='medicalImg' src = {medicalIcon}>
                 </img>
                  <div className="overview-detail">
                    <div className="job-card-title" value="2">פטור רפואי</div>
                    <div className="job-card-subtitle">
                      בקשת פטור מטעמים רפואיים הפטור - חיילים עם מעל 20 פצעים על
                      עור הפנים, אסתמה של העור, אקזמה באזור הפנים, אלרגיה חמורה
                      בפנים, פסוריאזיס, צלקות או חתכים, שומות ונגעים בפנים
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job-explain">
            <img className="job-bg" alt="" />
            <div className="job-logos"></div>
            <div style={{minWidth:"0"}} className="job-explain-content">
              <div className="job-title-wrapper">
                <div className="job-card-title" />
                <div className="job-action"></div>
              </div>
              <div className="overview-text">
                <div className="overview-text-header">תיאור הפטור</div>
                <div className="overview-text-subheader">
                  We believe that design (and you) will be critical to the
                  company's success. You will work with our founders and our
                  early customers to help define and build our product
                  functionality, while maintaining the quality bar that
                  customers have come to expect from modern SaaS applications.
                  You have a strong background in product design with a
                  quantitavely anf qualitatively analytical mindset. You will
                  also have the opportunity to craft our overall product and
                  visual identity and should be comfortable to flex into
                  working.
                </div>
              </div>
              <div className="overview-text">
                <div className="overview-text-header"> פירוט בקשת הפטור</div>
                <textarea id="NameArea" cols={70} rows={8} defaultValue={"\n       "}  />

              </div>
              <div className="endContainer">
              <button onClick = {this.sendBeardRequest} className="submitBtn">
                    הגש בקשה
              </button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
      );
    }
   
    
}