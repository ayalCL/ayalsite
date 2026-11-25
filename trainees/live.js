/* בדיקת טכניקה חיה: שלד על המצלמה (MediaPipe Pose).
   הועתק כמו שהוא מ-index.html הראשי (השורות של live technique check), כדי ששיטת הספירה שנבדקה בטלפון תישאר אותו דבר.
   אם משנים את הספירה שם, צריך להעתיק את השינוי גם לכאן. */
const LIVE_EX={
 pushup:{name:'שכיבות סמיכה',kind:'reps',sig:'arm',full:0.65,joint:'elbow',down:105,up:155,line:true,tip:'הנח את הטלפון על הרצפה, מהצד או מלפנים, שהכתפיים והידיים ייכנסו',al:['שכיבות סמיכה','שכיבה','push up','pushup','push-up']},
 pullup:{name:'מתח',kind:'reps',sig:'pull',full:0.45,joint:'elbow',tip:'צלם מהצד או מלפנים, מהידיים על המוט ועד הרגליים',al:['מתח','pull up','pullup','pull-up','chin up','סנטר']},
 squat:{name:'סקוואט',kind:'reps',sig:'leg',full:0.45,joint:'knee',down:110,up:160,depth:true,tip:'צלם מהצד או מלפנים, בגובה הברכיים, מהמותניים עד הרגליים בפריים',al:['סקוואט','squat','כריעה']},
 bench:{name:'בנץ׳ פרס',kind:'reps',sig:'arm',full:0.45,joint:'elbow',down:100,up:155,tip:'צלם מהצד של הספסל, שהידיים והמוט ייראו',al:['בנץ','בנץ׳','bench','לחיצת חזה']},
 dips:{name:'מקבילים',kind:'reps',sig:'arm',full:0.66,joint:'elbow',down:105,up:155,tip:'צלם מהצד, כל הגוף בפריים',al:['מקבילים','dips','dip']},
 situp:{name:'כפיפות בטן',kind:'reps',sig:'hip',full:0.5,joint:'hip',down:80,up:120,inverse:true,tip:'צלם מהצד, בגובה הרצפה',al:['כפיפות בטן','בטן','sit up','situp','crunch']},
 plank:{name:'פלאנק',kind:'hold',hold:'plank',tip:'צלם מהצד, בגובה הרצפה',al:['פלאנק','plank']},
 frontlever:{name:'פרונט לבר',kind:'hold',hold:'frontlever',tip:'צלם מהצד, מהמוט ועד הרגליים',al:['פרונט לבר','פרונט','front lever','frontlever','לבר']},
 tuckfl:{name:'טאק פרונט לבר',kind:'hold',hold:'tuckfl',tip:'צלם מהצד, מהמוט ועד הרגליים. ברכיים צמודות לחזה',al:['טאק פרונט','tuck front','טאק לבר']},
 advtuckfl:{name:'אדבנס טאק פרונט לבר',kind:'hold',hold:'advtuckfl',tip:'צלם מהצד, מהמוט ועד הרגליים. הירכיים ב-90° מהחזה, ברכיים כפופות',al:['אדבנס טאק פרונט','אדבנס פרונט','advanced tuck front','adv tuck front','טאק מתקדם פרונט','אדבנס טאק פרונט לבר']},
 onelegfl:{name:'פרונט לבר רגל אחת',kind:'hold',hold:'onelegfl',tip:'צלם מהצד: רגל אחת ישרה, השנייה בטאק',al:['פרונט לבר רגל אחת','רגל אחת פרונט','one leg front','single leg front','פרונט רגל אחת']},
 straddlefl:{name:'סטראדל פרונט לבר',kind:'hold',hold:'straddlefl',tip:'צלם מהצד או מלפנים, רגליים ישרות ופתוחות',al:['סטראדל פרונט','straddle front','סטרדל פרונט','פרונט סטראדל','סטראדל פרונט לבר']},
 planche:{name:'פלאנש',kind:'hold',hold:'planche',tip:'צלם מהצד, בגובה הרצפה',al:['פלאנש','planche','פלאנץ','פלאנץ׳']},
 tuckplanche:{name:'טאק פלאנש',kind:'hold',hold:'tuckplanche',tip:'צלם מהצד, בגובה הרצפה. ברכיים צמודות לחזה',al:['טאק פלאנש','טאק פלאנץ','tuck planche','טאק']},
 advtuckpl:{name:'אדבנס טאק פלאנש',kind:'hold',hold:'advtuckpl',tip:'צלם מהצד, בגובה הרצפה. הירכיים ב-90° מהחזה, ברכיים כפופות',al:['אדבנס טאק פלאנש','אדבנס פלאנש','אדבנס טאק פלאנץ','advanced tuck planche','adv tuck planche','טאק מתקדם פלאנש']},
 onelegpl:{name:'פלאנש רגל אחת',kind:'hold',hold:'onelegpl',tip:'צלם מהצד: רגל אחת ישרה, השנייה בטאק',al:['פלאנש רגל אחת','פלאנץ רגל אחת','רגל אחת פלאנש','one leg planche','single leg planche']},
 straddlepl:{name:'סטראדל פלאנש',kind:'hold',hold:'straddlepl',tip:'צלם מהצד או מלפנים, רגליים ישרות ופתוחות',al:['סטראדל פלאנש','סטראדל פלאנץ','straddle planche','סטרדל פלאנש','פלאנש סטראדל']},
 lsit:{name:'L-sit',kind:'hold',hold:'lsit',tip:'צלם מהצד, בגובה הרצפה',al:['l sit','l-sit','lsit','אל סיט','ישיבת L']},
 handstand:{name:'עמידת ידיים',kind:'hold',hold:'handstand',tip:'צלם מהצד, כל הגוף בפריים',al:['עמידת ידיים','הנדסטנד','handstand']}};
const LIVE_BASE=['pullup','squat','bench','dips','pushup','situp'];
const LIVE_MORE=['lsit','handstand','plank'];
const LADDERS=[['סולם פרונט לבר',['tuckfl','advtuckfl','onelegfl','straddlefl','frontlever']],['סולם פלאנש',['tuckplanche','advtuckpl','onelegpl','straddlepl','planche']]];
const FL_FAM=LADDERS[0][1],PL_FAM=LADDERS[1][1];
const PUSH_AL=['שכיבות סמיכה','שכיבת סמיכה','שכיבות','push up','pushup','push-up','פוש אפ'];
const PUSH_VAR={
  pushup_diamond:['שכיבות סמיכה יהלום',['יהלום','diamond','צרות','close grip','משולש']],
  pushup_wide:['שכיבות סמיכה רחבות',['רחבות','רחב','wide']],
  pushup_knee:['שכיבות סמיכה על הברכיים',['ברכיים','על הברכיים','knee']],
  pushup_onearm:['שכיבת סמיכה ביד אחת',['יד אחת','ביד אחת','one arm','one-arm','חד ידית']],
  pushup_clap:['שכיבות סמיכה עם כפיים',['כפיים','כפים','כף','כיף','מחיאה','מחיאת כף','clap','פליאומטרי','plyo'],{handsMove:true}],
  pushup_archer:['שכיבות סמיכה ארצ׳ר',['ארצ׳ר','ארצר','archer','קשת']],
  pushup_decline:['שכיבות סמיכה רגליים מורמות',['רגליים מורמות','רגליים למעלה','decline','דקליין']],
  pushup_pseudo:['פסאודו פלאנש פוש אפ',['פסאודו','pseudo','ppp','פסאודו פלאנש']],
  pushup_pike:['פייק פוש אפ',['פייק','pike'],{pike:true,line:false,tip:'צלם מהצד: ידיים על הרצפה, אגן גבוה, הראש יורד לכיוון הרצפה'}],
  pushup_hspu:['שכיבות סמיכה בעמידת ידיים',['hspu','handstand push','בעמידת ידיים','עמידת ידיים שכיבות'],{pike:true,line:false,tip:'צלם מהצד, כל הגוף בפריים, ליד קיר'}]};
for(const [id,[name,al,extra]] of Object.entries(PUSH_VAR))LIVE_EX[id]={...LIVE_EX.pushup,name,base:'pushup',al:[...al,...PUSH_AL],...(extra||{})};
const LIVE_PUSH=Object.keys(PUSH_VAR);
const isPush=E=>E===LIVE_EX['pushup']||E?.base==='pushup';
let POSE=null,POSE_LOADING=null;
async function loadPose(){if(window.__POSE_STUB)return window.__POSE_STUB;if(POSE)return POSE;if(POSE_LOADING)return POSE_LOADING;
  POSE_LOADING=(async()=>{const V='https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14';
    const v=await import(V+'/vision_bundle.mjs');const fs=await v.FilesetResolver.forVisionTasks(V+'/wasm');
    const mk=d=>v.PoseLandmarker.createFromOptions(fs,{baseOptions:{modelAssetPath:'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task',delegate:d},runningMode:'VIDEO',numPoses:1,minPoseDetectionConfidence:0.4,minPosePresenceConfidence:0.4,minTrackingConfidence:0.4});
    try{POSE=await mk('GPU')}catch(e){POSE=await mk('CPU')}return POSE})();
  try{return await POSE_LOADING}catch(e){POSE_LOADING=null;throw e}}
function findLiveEx(q){q=String(q||'').trim().toLowerCase().replace(/[׳']/g,'');if(!q)return null;let best=null,bl=0;
  for(const [id,e] of Object.entries(LIVE_EX)){let sc=0;const names=[e.name,...e.al].map(a=>a.toLowerCase().replace(/[׳']/g,''));
    if(names.includes(q))sc=1e5;else{const inQ=[...new Set(names.filter(a=>q.includes(a)))];const keep=inQ.filter(a=>!inQ.some(b=>b!==a&&b.includes(a)));
      if(keep.length)sc=1e3+keep.reduce((x,a)=>x+a.length,0);else{const c=names.filter(a=>a.includes(q));if(c.length)sc=500-Math.min(...c.map(a=>a.length))}}
    if(sc>bl){best=id;bl=sc}}
  return best}
// geometry
const P={nose:0,ls:11,rs:12,le:13,re:14,lw:15,rw:16,lh:23,rh:24,lk:25,rk:26,la:27,ra:28};
function pickSide(lm){const vis=(...i)=>i.reduce((a,k)=>a+(lm[k]?.visibility??1),0);
  return vis(11,13,15,23,25,27)>=vis(12,14,16,24,26,28)?{s:11,e:13,w:15,h:23,k:25,a:27}:{s:12,e:14,w:16,h:24,k:26,a:28}}
function ptsOf(lm,ar){return i=>({x:lm[i].x*ar,y:lm[i].y,v:lm[i].visibility??1})}
function ang(a,b,c){const v1={x:a.x-b.x,y:a.y-b.y},v2={x:c.x-b.x,y:c.y-b.y};const d=(v1.x*v2.x+v1.y*v2.y)/((Math.hypot(v1.x,v1.y)*Math.hypot(v2.x,v2.y))||1);return Math.acos(Math.max(-1,Math.min(1,d)))*180/Math.PI}
function tilt(a,b){return Math.abs(Math.atan2(b.y-a.y,Math.abs(b.x-a.x))*180/Math.PI)} // 0 = horizontal
// one analysis step: returns {metric, ok, msg, visible}
// keep measuring the same side of the body; switch only when the other side is clearly better seen
const SIDE_L={s:11,e:13,w:15,h:23,k:25,a:27},SIDE_R={s:12,e:14,w:16,h:24,k:26,a:28};
function poseSide(lm,L){const vis=(...i)=>i.reduce((a,k)=>a+(lm[k]?.visibility??1),0);const l=vis(11,13,15,23,25,27),r=vis(12,14,16,24,26,28);
  if(!L)return l>=r?SIDE_L:SIDE_R;if(!L.side)L.side=l>=r?'l':'r';else if(L.side==='l'&&r>l+1.2)L.side='r';else if(L.side==='r'&&l>r+1.2)L.side='l';
  return L.side==='l'?SIDE_L:SIDE_R}
function liveMeasure(id,lm,ar,L){const E=LIVE_EX[id]||{kind:'general'};const sd=poseSide(lm,L);const g=ptsOf(lm,ar);
  const S_=g(sd.s),El=g(sd.e),W=g(sd.w),H=g(sd.h),K=g(sd.k),A0=g(sd.a),N=g(0);const T=0.35;const A=A0.v>T?A0:K;
  // only the joints this exercise needs have to be in the frame
  const need=E.kind==='general'?[S_,H]:E.kind==='pull'?[S_,El,W]:E.kind==='reps'?(E.sig==='arm'||E.sig==='pull'?[S_]:E.sig==='leg'?[H,K,A0]:[S_,H,K]):[S_,El,W,H,K];
  const visible=need.every(q=>q.v>T);
  // facing the camera? shoulders look wide compared to the torso
  const sw=(lm[11].visibility??1)>T&&(lm[12].visibility??1)>T?Math.hypot((lm[11].x-lm[12].x)*ar,lm[11].y-lm[12].y):0,tl=Math.hypot(S_.x-H.x,S_.y-H.y);const front=lm[11].visibility>T&&lm[12].visibility>T&&(H.v<=T||sw>0.8*tl);
  const shv=[lm[11],lm[12]].filter(q=>(q.visibility??1)>T);const syAvg=shv.length?shv.reduce((a,q)=>a+q.y,0)/shv.length:S_.y;const tlv=H.v>T?tl:null;
  const armBelow=[13,14,15,16].some(i=>(lm[i].visibility??1)>T&&lm[i].y>syAvg+0.02);const elb=[[11,13,15],[12,14,16]].filter(q=>q.every(i=>(lm[i].visibility??1)>T)).map(q=>ang(g(q[0]),g(q[1]),g(q[2])));const elbowAvg=elb.length?elb.reduce((x,y)=>x+y,0)/elb.length:null;
  // average both sides when both are seen
  const both=(f)=>{const vals=[SIDE_L,SIDE_R].map(sd2=>f(g(sd2.s),g(sd2.e),g(sd2.w),g(sd2.h),g(sd2.k),g(sd2.a))).filter(x=>x!=null);return vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:null};
  let sig=null;
  if(E.sig==='arm'||E.sig==='pull'){ // shoulder-to-hand height: shrinks as you go down. Hands on the floor do not move, so a hand hidden for a moment keeps its last place
    const sy=[lm[11],lm[12]].filter(q=>(q.visibility??1)>T);const wv=[lm[15],lm[16]].filter(q=>(q.visibility??1)>T);
    let wy=wv.length?wv.reduce((a,q)=>a+q.y,0)/wv.length:null;if(L){if(wy!=null)L.wyLast=wy;else wy=L.wyLast??null}
    sig=sy.length&&wy!=null?Math.abs(wy-sy.reduce((a,q)=>a+q.y,0)/sy.length):null}
  else if(E.sig==='leg')sig=both((s,e,w,h,k,a)=>h.v>T&&k.v>T&&a.v>T&&a.y-k.y>0.01?Math.max(-0.5,Math.min(1.5,(k.y-h.y)/(a.y-k.y))):null); // hip height above knee, in shin lengths
  else if(E.sig==='hip')sig=ang(S_,H,K)/170;
  const elbow=ang(S_,El,W),knee=A0.v>T?ang(H,K,A0):180,hip=ang(S_,H,K),line=ang(S_,H,A),bodyTilt=tilt(S_,A);
  const avgY=(a,b)=>{const q=[lm[a],lm[b]].filter(x=>x&&(x.visibility??1)>T);return q.length?q.reduce((s,x)=>s+x.y,0)/q.length:null};
  const ys={sh:avgY(11,12),wr:avgY(15,16),hp:avgY(23,24),an:avgY(27,28)};
  const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);const armLen=dist(S_,El)+dist(El,W);
  const pos={ey:El.v>T?El.y:null,sy:S_.y,wy:W.v>T?W.y:(L?.wyLast??null),hy:H.v>T?H.y:null,ky:K.v>T?K.y:null,ay:A0.v>T?A0.y:null,armLen,torsoTilt:H.v>T?tilt(S_,H):null};
  const chin=ys.wr!=null?lm[0].y<ys.wr+0.01:(L?.wyLast!=null?lm[0].y<L.wyLast+0.01:false);
  const noseY=(lm[0].visibility??1)>T?lm[0].y:null;
  // clearly from the side: shoulders overlap and the hips are really seen
  const side=!front&&tlv!=null&&sw<0.5*tlv&&sw<0.1&&H.v>0.6;
  const lineK=K.v>T&&H.v>T?ang(S_,H,K):null;const kneeTilt=K.v>T?tilt(S_,K):null;
  const onKnees=K.v>T&&W.v>T&&A0.v>T&&Math.abs(K.y-W.y)<0.06&&A0.y<K.y-0.03; // knees on the floor (level with the hands), feet up
  const legA=(h,k,a)=>[h,k,a].every(i=>(lm[i].visibility??1)>T)?{knee:ang(g(h),g(k),g(a)),hip:ang(S_,g(h),g(k)),line:ang(S_,g(h),g(a))}:null;
  const legs=[legA(23,25,27),legA(24,26,28)].filter(Boolean);
  return{visible,front,side,lineK,legs,kneeTilt,onKnees,sw,tl:tlv,syAvg,noseY,armBelow,elbowAvg,sig,ys,chin,pos,elbow,knee,hip,line,bodyTilt,noseAboveWrist:N.y<W.y,wristAboveShoulder:W.y<S_.y,inverted:A.y<H.y&&H.y<S_.y,hipBelowKnee:H.y>=K.y-0.02,feetUp:A.y<W.y-0.02}}
// stop = the position is lost (clock stops). tip = still counts, but here is what to improve.
function holdPose(kind,m){const P=m.pos||{};if(P.wy==null)return null;const arm=P.armLen||0.2;
  const below=P.wy>P.sy+0.4*arm, above=P.wy<P.sy-0.4*arm, feetUp=P.ay!=null&&P.ay<P.wy-0.02;
  if(kind==='plank'){if(P.torsoTilt!=null&&P.torsoTilt>35)return 'צריך להיות בשכיבה, גוף מקביל לרצפה';const floor=Math.max(P.wy,P.ey??P.wy);return P.sy>floor-0.25*arm?'הרם את הגוף מהרצפה, על הידיים או האמות':null}
  if(FL_FAM.includes(kind))return above?(P.hy!=null&&P.hy<P.sy-0.6*arm?'זה נראה כמו עמידת ידיים, לא פרונט לבר':null):'צריך לתלות על המוט, ידיים מעל הכתפיים';
  if(PL_FAM.includes(kind))return !below?'ידיים על הרצפה מתחת לכתפיים':(P.ay!=null&&P.ay>P.wy-0.5*arm?'הרגליים צריכות להיות באוויר':null);
  if(kind==='lsit')return !below?'ידיים ישרות על הרצפה או הפרלטים, מתחת לכתפיים':(P.ay!=null&&P.ay>P.wy+0.03?'הרגליים צריכות להיות באוויר':null);
  if(kind==='handstand')return P.wy<P.sy+0.4*arm||(P.torsoTilt!=null&&P.torsoTilt<60)?'ידיים על הרצפה, הגוף הפוך מעליהן':null;
  return null}
// leg shape per stage (side view): tuck = knees against the chest (hip angle under ~70); advanced tuck = thighs at 90 degrees from the chest;
// one leg = one leg straight in line, the other tucked; straddle = both legs straight (legs apart are seen from the front)
function legShape(stage,m,stop,tip){const L=m.legs||[];if(!L.length)return;const st=L.filter(l=>l.knee>150),bent=L.filter(l=>l.knee<130);
  const hipMax=Math.max(...L.map(l=>l.hip)),lineMax=Math.max(...L.map(l=>l.line));
  if(stage==='tuck'){if(bent.length<L.length)tip.push('כופף את הברכיים');else if(hipMax>80)tip.push('הירכיים ב-90° מהחזה: זה כבר אדבנס טאק 💪');else if(hipMax>65)tip.push('הצמד את הברכיים לחזה')}
  if(stage==='advtuck'){if(hipMax<70)stop.push('הברכיים צמודות לחזה (זה טאק): פתח את הירכיים ל-90° מהחזה');else if(hipMax<80)tip.push('פתח עוד קצת את הירכיים, עד 90° מהחזה');if(st.length===L.length&&L.length)tip.push('הרגליים ישרות: זה כבר שלב מתקדם יותר')}
  if(stage==='oneleg'){const s=L.find(l=>l.knee>150&&l.line>140);if(!s)stop.push('יישר רגל אחת עד הסוף, בקו עם הגוף');else if(s.line<160)tip.push('הרגל הישרה בקו אחד עם הגוף')}
  if(stage==='straddle'){if(st.length<L.length)stop.push('יישר את שתי הרגליים');else if(lineMax<145)stop.push('הרם את האגן: גוף ישר מהכתפיים');else if(lineMax<160)tip.push('עוד קצת ישר, אגן בקו')}}
function holdCheck(kind,m){const stop=[],tip=[];if((FL_FAM.includes(kind)||PL_FAM.includes(kind))&&!['frontlever','planche','straddlefl','straddlepl'].includes(kind)&&m.pos?.torsoTilt!=null)m={...m,bodyTilt:m.pos.torsoTilt};const bad=holdPose(kind,m);if(bad){stop.push(bad);return{stop,tip}}
  if(kind==='plank'){if(m.line<140)stop.push('האגן ירד מדי, יישר את הגוף');else if(m.line<162)tip.push('יישר עוד קצת את הגוף')}
  if(FL_FAM.includes(kind)){if(!m.wristAboveShoulder)stop.push('תלה על המוט, ידיים מעל הכתפיים');if(m.bodyTilt>40)stop.push('הגוף ירד, הרם אותו למקביל לרצפה');else if(m.bodyTilt>20)tip.push('עוד קצת למעלה, מקביל לרצפה');
    if(m.elbow<130)stop.push('ידיים ישרות');else if(m.elbow<155)tip.push('נסה לנעול את המרפקים');
    if(kind==='frontlever'){if(m.line<140)stop.push('האגן נפל, גוף בקו אחד');else if(m.line<160)tip.push('הרם קצת את האגן לקו אחד')}}
  if(PL_FAM.includes(kind)){if(m.elbow<130)stop.push('ידיים נעולות וישרות');else if(m.elbow<155)tip.push('נסה לנעול את המרפקים');if(m.bodyTilt>40)stop.push('הישען קדימה, הגוף מקביל לרצפה');else if(m.bodyTilt>25)tip.push('עוד קצת קדימה');
    if(kind==='planche'){if(m.line<140)stop.push('גוף ישר מהכתפיים עד הרגליים');else if(m.line<160)tip.push('יישר קצת את הגוף')}}
  if(FL_FAM.includes(kind)||PL_FAM.includes(kind))legShape(kind.replace(/fl$|pl$|planche$|tuckplanche$/,'').replace(/^frontlever$/,'full')||'full',m,stop,tip);
  if(kind==='lsit'){if(m.elbow<130)stop.push('ידיים ישרות');else if(m.elbow<150)tip.push('נסה לנעול את המרפקים');if(m.hip>140)stop.push('הרגליים ירדו, הרם אותן');else if(m.hip>110)tip.push('נסה להרים את הרגליים גבוה יותר');
    if(m.knee<110)stop.push('יישר את הרגליים');else if(m.knee<160)tip.push('נסה ליישר את הברכיים')}
  if(kind==='handstand'){if(!m.inverted)stop.push('עלה לעמידת ידיים');else{if(m.elbow<135)stop.push('ידיים נעולות');else if(m.elbow<155)tip.push('נסה לנעול את המרפקים');if(m.line<140)stop.push('הגוף נשבר, יישר אותו');else if(m.line<160)tip.push('פחות קשת בגב')}}
  return{stop,tip}}
let LIVE=null;
function liveNew(id,name){return{id,name,what:LIVE_WHAT,facing:'user',running:false,reps:0,bad:0,state:'up',min:999,max:0,partial:false,holdMs:0,bestHold:0,cur:0,lastT:0,issues:{},smooth:null,msg:'',msgT:0,frames:0,seen:0,log:[],rep:null,attempts:[],hsnaps:[],snapT:0,cleanMs:0,lostMs:0,tips:{},sm:{}}}
// one finished rep: how deep, how straight, how long, and a picture of its bottom
// was this the exercise? push-ups and dips: the shoulders move, the hands stay put. bench: the hands move.
// squats: the hips move, the feet stay put. Also the body has to be in the right position.
// Was this really the exercise? Checks what moved and what stayed still, and the body position.
function realRep(E,rng,m){const d=k=>rng[k]?rng[k][1]-rng[k][0]:null;const sh=d('sh'),wr=d('wr'),hp=d('hp'),an=d('an');const P=m.pos||{};
  const flat=P.torsoTilt!=null&&P.torsoTilt<40, upright=P.torsoTilt!=null&&P.torsoTilt>50&&P.hy!=null&&P.sy<P.hy;
  const handsBelow=m.ys?.wr!=null&&m.ys?.sh!=null?m.ys.wr>m.ys.sh:true, handsAbove=m.ys?.wr!=null&&m.ys?.sh!=null?m.ys.wr<m.ys.sh:false;
  if(isPush(E)){const side=!!m.side;const no=w=>{m.why=w;return false};
    if(sh==null||sh<0.03)return no('הכתפיים כמעט לא זזו');if(wr==null)return no('לא ראיתי את הידיים');if(E.handsMove)return true;if(!side&&!handsBelow)return no('הידיים לא מתחת לכתפיים');
    if(side&&wr!=null&&wr>0.6*sh)return no('הידיים זזו');if(side&&!handsBelow)return no('הידיים לא מתחת לכתפיים');
    if(!side&&wr!=null&&wr>0.6*sh)return no('הידיים זזו יחד עם הגוף');   // from the front: hands travelling with the shoulders = standing up
    if(side&&P.wy!=null&&P.armLen&&P.wy<P.sy+0.3*P.armLen)return no('הידיים לא מתחת לגוף');
    if(side&&!E.pike&&P.torsoTilt!=null&&!flat)return no('הגוף לא אופקי');
    if(side&&!E.pike&&(m.kneeTilt??m.bodyTilt)>45)return no('הגוף לא אופקי');return true}
  if(E===LIVE_EX.dips){if(sh==null||sh<0.03||(wr!=null&&wr>0.6*sh)||!handsBelow)return false;
    if(P.torsoTilt!=null&&P.torsoTilt<35)return false;                       // upright-ish body, not lying
    if(m.ys?.an!=null&&an!=null&&an<0.5*sh)return false;return true}         // the whole body moves with the shoulders (feet off the floor)
  if(E.sig==='pull'){if(sh==null||sh<0.04||(wr!=null&&wr>0.5*sh)||!handsAbove)return false;
    if(P.hy!=null&&P.hy<P.sy)return false;return true}                       // hanging: hips below shoulders
  if(E===LIVE_EX.bench){if(wr==null||wr<0.03)return false;if(sh!=null&&sh>0.6*wr)return false;
    if(P.torsoTilt!=null&&!flat)return false;if(!handsAbove)return false;return true}  // lying on the bench, pressing up
  if(E.sig==='leg'){if(hp==null||hp<0.04)return false;if(an!=null&&an>0.5*hp)return false;
    if(P.torsoTilt!=null&&!upright)return false;if(P.ky!=null&&P.hy!=null&&P.hy>P.ky)return false;return true} // standing tall again at the end
  if(E.sig==='hip'){if(sh==null||sh<0.05)return false;if(an!=null&&an>0.5*sh)return false;
    if(P.torsoTilt!=null&&P.torsoTilt>40)return false;return true}         // back to lying at the end, feet stay put
  return true}
function repEnd(L,t,ok,why){const r=L.rep;if(r&&r.knees>5&&ok)why=(why?why+', ':'')+'על הברכיים';if(r)L.log.push({ok,why:why||'',min:Math.round(r.min),line:r.lineMin<999?Math.round(r.lineMin):null,dur:Math.round((t-r.t0)/100)/10,snap:r.snap||null});L.rep=null}
function liveStep(L,m,t){const E=LIVE_EX[L.id]||{kind:'general'};L.frames++;if(!m.visible){L.msg='צריך לראות את כל הגוף בפריים';L.cls='bad';L.lastT=t;return}L.seen++;
  const dt=L.lastT?Math.min(200,t-L.lastT):0;L.lastT=t;
  const note=x=>{L.issues[x]=(L.issues[x]||0)+1};
  if(E.kind==='reps'){
    // push-ups: decide once whether we film from the front or the side, switch only if it stays different
    // push-ups: how high the shoulders are, measured in body size (shoulder width from the front, torso from the side).
    // Works from any angle, wide or narrow hands, hands seen or not.
    const useFront=false; // push-ups: shoulder-to-hand height, the measure that counted well on the phone
    let raw=useFront?-(m.noseY!=null?(m.syAvg+m.noseY)/2:m.syAvg)/L.swRef:m.sig;if(raw==null){L.msg='צריך לראות את '+(E.sig==='leg'?'המותניים, הברכיים והרגליים':'הכתפיים והידיים');L.cls='bad';return}
    if(!useFront&&(E.sig==='arm'||E.sig==='pull')){L.sMax=Math.max((L.sMax||raw)*0.9985,raw);raw=raw/L.sMax}  // 1 = arms straight, as you stand right now
    L.smooth=L.smooth==null?raw:L.smooth*0.6+raw*0.4;const a=L.smooth,R=0.2;L.dbg=`${m.side?'מהצד':'מלפנים'} · עומק ${Math.max(0,Math.min(100,Math.round(useFront?(L.hiV!=null?(L.hiV-a)/0.45*100:0):(1-a)*100)))}%`;const ang_=isPush(E)?(m.front?(m.elbowAvg??999):(m.elbow??999)):(E.joint==='elbow'&&m.elbowAvg!=null&&m.front?m.elbowAvg:m[E.joint]);
    if(!L.ph){L.ph='top';L.hiV=a;L.loV=a}
    if(L.pend){const lim=useFront?0.35:0.3;
      if(a>L.pend.hiStart+lim){(L.diag||(L.diag={downs:0,why:{}})).why['קמת']=(L.diag.why['קמת']||0)+1;L.pend=null;L.msg='קמת מהתנוחה, לא נספר';L.cls='';L.hiV=a}
      else if(t-L.pend.t>350||L.ph==='bottom'){const f=L.pend.run;L.pend=null;f()}}
    if(!L.rep)L.rep={t0:t,min:999,lineMin:999};
    if(m.ys){const R_=L.rep.rng||(L.rep.rng={});for(const k in m.ys){const y=m.ys[k];if(y==null)continue;const r=R_[k]||(R_[k]=[y,y]);if(y<r[0])r[0]=y;if(y>r[1])r[1]=y}}
    if(L.ph==='top'){if(a>=L.hiV){L.hiV=a;L.rep={t0:t,min:999,lineMin:999}}
      if(a<L.hiV-R){L.ph='bottom';L.loV=a;L.downT=t;L.formBad=false;L.formTip=false;(L.diag||(L.diag={downs:0,why:{}})).downs++}}
    else{if(a<L.loV){L.loV=a;if(t-L.snapT>150){L.snapReq='rep';L.snapT=t}}
      L.rep.min=Math.min(L.rep.min,ang_);if(m.chin)L.rep.chin=true;const ln=isPush(E)&&m.lineK!=null?m.lineK:m.line;if(m.onKnees)L.rep.knees=(L.rep.knees||0)+1;
      if(m.side)L.rep.lineMin=Math.min(L.rep.lineMin,ln);
      if(E.line&&m.side){if(ln<140)L.formBad=true;else if(ln<158)L.formTip=true}
      if(a>=L.loV+Math.max(R,0.7*(L.hiV-L.loV))&&t-L.downT>300){const drop=L.hiV-L.loV;const hiStart=L.hiV,rp=L.rep,lo=L.loV;const absFull=drop>=(m.side?0.6:0.33)||L.rep.min<=100;if(useFront&&absFull&&realRep(E,L.rep.rng||{},{...m,armSeen:L.armSeen}))L.best=Math.max(L.best||0,drop);L.ph='top';L.hiV=a;L.pend={t,hiStart,run:()=>{const cur=L.rep;L.rep=rp;const full=E.sig==='pull'?(L.rep.chin||lo<=0.2):useFront?(absFull||(L.best!=null&&drop>=0.65*L.best)):(lo<=E.full||(E.joint==='elbow'&&L.rep.min<=100));const mx={...m,armSeen:L.armSeen,wyLast:L.wyLast};const real=realRep(E,L.rep.rng||{},mx);if(!real)L.lastWhy=mx.why||'';
        const dg=(k)=>{const d=L.diag||(L.diag={downs:0,why:{}});d.why[k]=(d.why[k]||0)+1};if(!real){dg(L.lastWhy||'לא בתנוחה');L.rep=null;L.msg=useFront&&!L.armSeen?'לא רואה את הידיים. הרחק את הטלפון קצת, שהידיים על הרצפה ייכנסו לתמונה':(L.lastWhy?`לא נספר: ${L.lastWhy}`:`זה לא נראה כמו ${E.name}. ${E.tip}`);L.cls='bad'}
        else if(!full){dg('חצי (ירידה '+Math.round(drop*100)+')');L.bad++;repEnd(L,t,false,E.sig==='pull'?'הסנטר לא עבר את המוט':'חצי חזרה');note(E.sig==='pull'?'סנטר מעל המוט בכל חזרה':E.sig==='leg'?'רד עמוק יותר':'רד עמוק יותר, טווח מלא');L.msg=E.sig==='pull'?'עוד קצת! סנטר מעל המוט':'חצי חזרה: רד עמוק יותר';L.cls='bad'}
        else if(L.formBad){dg('גוף לא ישר');L.bad++;repEnd(L,t,false,'גוף לא ישר');note('גוף ישר לאורך כל החזרה');L.msg='✗ הגוף לא היה ישר';L.cls='bad'}
        else if(L.formTip){L.reps++;repEnd(L,t,true,'נספרה, הגוף לא לגמרי ישר');L.tips['שמור על גוף ישר יותר']=(L.tips['שמור על גוף ישר יותר']||0)+1;L.msg='✓ נספרה · נסה גוף ישר יותר';L.cls='warn'}
        else{L.reps++;repEnd(L,t,true);L.msg='✓ חזרה טובה';L.cls='good'}
        if(useFront&&full&&real){(L.drops||(L.drops=[])).push(drop);const d=L.drops.slice(-5).sort((x,y)=>x-y);L.typ=d[Math.floor(d.length/2)]}if(L.rep===rp)L.rep=null;if(cur!==rp&&cur)L.rep=cur}};L.rep=null}}
    if(L.ph==='bottom'&&E.line&&m.side&&(isPush(E)&&m.lineK!=null?m.lineK:m.line)<140){L.msg='יישר את הגוף!';L.cls='bad'}
    return}
  if(E.kind==='pull'){const a=m.elbow;L.smooth=L.smooth==null?a:L.smooth*0.6+a*0.4;
    if(!L.rep)L.rep={t0:t,min:999,lineMin:999};if(L.smooth<L.rep.min-2){L.rep.min=L.smooth;if(t-L.snapT>150){L.snapReq='rep';L.snapT=t}}L.rep.lineMin=Math.min(L.rep.lineMin,m.line??180);
    if(L.state==='up'){ // "up" here = hanging at the bottom, waiting to pull
      if(L.smooth<80&&m.noseAboveWrist){L.state='top';L.reps++;repEnd(L,t,true);L.msg='✓ חזרה טובה';L.cls='good'}
      else if(L.smooth<95&&!m.noseAboveWrist){L.msg='עוד קצת! סנטר מעל המוט';L.cls='bad';L.near=true}}
    else if(L.smooth>150){L.state='up';L.near=false}
    if(L.state==='up'&&L.near&&L.smooth>150){L.bad++;repEnd(L,t,false,'הסנטר לא עבר את המוט');note('סנטר מעל המוט בכל חזרה');L.near=false}
    else if(L.state==='up'&&!L.near&&L.smooth>150&&L.rep&&L.rep.min>150)L.rep={t0:t,min:999,lineMin:999}
    return}
  if(E.kind==='hold'){ // smooth the angles so camera jitter does not break a hold
    for(const k of ['line','elbow','knee','hip','bodyTilt'])L.sm[k]=L.sm[k]==null?m[k]:L.sm[k]*0.7+m[k]*0.3;const mm={...m,...L.sm};
    const {stop,tip}=holdCheck(E.hold,mm);
    if(t-L.snapT>800){L.snapReq=stop.length?'bad:'+stop[0]:tip.length?'bad:'+tip[0]:'good';L.snapT=t}
    if(stop.length)L.lostMs+=dt;else L.lostMs=0;
    if(!stop.length||(L.cur>0&&L.lostMs<600)){ // a short wobble does not end the hold
      L.cur+=dt;L.holdMs+=dt;L.bestHold=Math.max(L.bestHold,L.cur);
      if(!stop.length&&!tip.length){L.cleanMs+=dt;L.msg='✓ מחזיק נכון';L.cls='good'}
      else{const x=stop[0]||tip[0];if(tip[0])L.tips[tip[0]]=(L.tips[tip[0]]||0)+dt;L.msg='✓ נספר · '+x;L.cls='warn'}}
    else{if(L.cur>500){note(stop[0]);L.attempts.push({sec:Math.round(L.cur/100)/10,broke:stop[0],tips:Object.keys(L.tips),line:Math.round(mm.line),elbow:Math.round(mm.elbow),knee:Math.round(mm.knee),hip:Math.round(mm.hip),tilt:Math.round(mm.bodyTilt)})}L.cur=0;L.msg=stop[0];L.cls='bad'}
    return}
  if(t-L.snapT>1200){L.snapReq='general';L.snapT=t}
  L.msg='השלד עוקב אחריך. לחץ "סיימתי" כשתסיים.';L.cls=''}
function grabSnap(v,mirror){const sc=Math.min(1,640/Math.max(v.videoWidth,v.videoHeight));const c=document.createElement('canvas');c.width=Math.round(v.videoWidth*sc);c.height=Math.round(v.videoHeight*sc);
  const x=c.getContext('2d');if(mirror){x.translate(c.width,0);x.scale(-1,1)}x.drawImage(v,0,0,c.width,c.height);return new Promise(r=>c.toBlob(r,'image/jpeg',.8))}
function takeSnap(L,v){const kind=L.snapReq;L.snapReq=null;const p=grabSnap(v,L.facing==='user');
  if(kind==='rep'){if(L.rep)L.rep.snap=p}
  else{L.hsnaps.push({kind,cur:L.cur,p});if(L.hsnaps.length>60)L.hsnaps.splice(0,L.hsnaps.length-60)}}
// the pictures worth showing the coach: best and worst moments, at most 4
function pickSnaps(L){const E=LIVE_EX[L.id]||{kind:'general'};const out=[];const add=(p,label)=>{if(p&&out.length<4&&!out.some(o=>o.p===p))out.push({p,label})};
  if(E.kind==='reps'||E.kind==='pull'){const R=L.log.map((r,i)=>({...r,i:i+1}));const ok=R.filter(r=>r.ok),bad=R.filter(r=>!r.ok);
    if(ok[0])add(ok[0].snap,`חזרה ${ok[0].i} (נספרה), נקודה תחתונה`);
    bad.forEach(b=>add(b.snap,`חזרה ${b.i} (לא נספרה: ${b.why})`));
    if(ok.length>1)add(ok[ok.length-1].snap,`חזרה ${ok[ok.length-1].i} (נספרה, אחרונה)`)}
  else{const H=L.hsnaps;const g=H.filter(h=>h.kind==='good').sort((a,b)=>b.cur-a.cur);const b=H.filter(h=>h.kind.startsWith('bad'));
    if(g[0])add(g[0].p,'רגע של החזקה נכונה');const seen=new Set();for(const x of b){const k=x.kind.slice(4);if(seen.has(k))continue;seen.add(k);add(x.p,'טעות: '+k)}
    if(E.kind==='general'){const n=H.length;for(const i of [0,Math.floor(n/3),Math.floor(2*n/3),n-1])if(H[i])add(H[i].p,'רגע מהביצוע')}}
  return out}
function liveStats(L){const E=LIVE_EX[L.id]||{kind:'general'};
  if(E.kind==='reps'){const j=E.sig==='pull'?'מרפק בנקודה העליונה':E.joint==='knee'?'ברך בנקודה התחתונה':E.joint==='hip'?'ירך':'מרפק בנקודה התחתונה';
    return `מדידות מהשלד (זוויות במעלות, 180 = ישר; ירידה מלאה = פחות מ-${E.down||80}; קו גוף 180 = כתף-אגן-קרסול בקו ישר):\n`+(L.log.map((r,i)=>`חזרה ${i+1}: ${r.ok?'נספרה':'לא נספרה ('+r.why+')'}${r.ok&&r.why?' ('+r.why+')':''}, זווית ${j}: ${r.min}°, ${r.line!=null?'קו גוף מינימלי: '+r.line+'°':'צילום מלפנים, בלי מדידת קו גוף'}, משך: ${r.dur} שנ׳`).join('\n')||'לא הושלמו חזרות')}
  if(E.kind==='hold')return `ניסיונות החזקה (רק זמן בטכניקה נכונה נספר):\n`+(L.attempts.map((a,i)=>`ניסיון ${i+1}: ${a.sec} שנ׳, נשבר בגלל: ${a.broke}${a.tips?.length?', הערות בזמן ההחזקה: '+a.tips.join(', '):''} (קו גוף ${a.line}°, מרפק ${a.elbow}°, ברך ${a.knee}°, ירך ${a.hip}°, הטיית גוף מהאופק ${a.tilt}°)`).join('\n')||'אין ניסיון של יותר מחצי שנייה')+`\nהחזקה הכי ארוכה: ${(L.bestHold/1000).toFixed(1)} שנ׳. סך הכל ${(L.holdMs/1000).toFixed(1)} שנ׳ בהחזקה, מתוכן ${(L.cleanMs/1000).toFixed(1)} שנ׳ בלי שום הערה.${Object.keys(L.tips).length?' הערות קטנות שעלו: '+Object.entries(L.tips).sort((a,b)=>b[1]-a[1]).map(x=>x[0]).join(', '):''}`;
  return 'מצב מעקב כללי, בלי ספירה אוטומטית'}
// auto-framing: fill the whole screen and follow the body; show the full frame only when the body would not fit
function frameView(L,lm,v){const W=innerWidth,H=innerHeight,vw=v.videoWidth,vh=v.videoHeight;const sc=Math.max(W/vw,H/vh);const fx=W/(vw*sc),fy=H/(vh*sc);
  if(!L.view)L.view={fit:'cover',px:.5,py:.5,t:0};const V=L.view;
  if(lm){const pts=[0,11,12,13,14,15,16,23,24,25,26,27,28].map(i=>lm[i]).filter(q=>q&&(q.visibility??1)>.35);
    if(pts.length>=4){const xs=pts.map(q=>q.x),ys=pts.map(q=>q.y);const x0=Math.min(...xs)-.03,x1=Math.max(...xs)+.03,y0=Math.min(...ys)-.05,y1=Math.max(...ys)+.04;
      const pos=(c,f)=>f>=1?.5:Math.max(0,Math.min(1,(c-f/2)/(1-f)));
      V.px+=(pos((x0+x1)/2,fx)-V.px)*.12;V.py+=(pos((y0+y1)/2,fy)-V.py)*.12}}
  const fit=L.fullFrame?'contain':'cover';v.style.objectFit=fit;$('#live').classList.toggle('whole',fit==='contain');v.style.objectPosition=fit==='cover'?`${(V.px*100).toFixed(1)}% ${(V.py*100).toFixed(1)}%`:'50% 50%';
  return{fit,px:fit==='cover'?V.px:.5,py:fit==='cover'?V.py:.5}}
function drawSkel(cv,lm,vw,vh,fv){const c=cv.getContext('2d');const W=cv.clientWidth,H=cv.clientHeight;if(cv.width!==W*devicePixelRatio){cv.width=W*devicePixelRatio;cv.height=H*devicePixelRatio}
  c.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);c.clearRect(0,0,W,H);if(!lm)return;
  const F=fv||{fit:'contain',px:.5,py:.5};const sc=F.fit==='cover'?Math.max(W/vw,H/vh):Math.min(W/vw,H/vh),ox=(W-vw*sc)*F.px,oy=(H-vh*sc)*F.py;const X=i=>[ox+lm[i].x*vw*sc,oy+lm[i].y*vh*sc];
  const col='#33e1c4';c.lineWidth=5;c.lineCap='round';c.strokeStyle=col;c.shadowColor=col;c.shadowBlur=10;
  for(const [a,b] of [[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28]]){if((lm[a].visibility??1)<.3||(lm[b].visibility??1)<.3)continue;const p=X(a),q=X(b);c.beginPath();c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1]);c.stroke()}
  c.shadowBlur=0;c.fillStyle='rgba(255,255,255,.85)';for(const i of [11,12,13,14,15,16,23,24,25,26,27,28]){if((lm[i].visibility??1)<.3)continue;const p=X(i);c.beginPath();c.arc(p[0],p[1],6,0,7);c.fill()}}
function liveHud(){const L=LIVE;if(!L)return;const E=LIVE_EX[L.id]||{kind:'general'};
  $('#liveBig').textContent=E.kind==='hold'?(L.cur/1000).toFixed(1)+'s':E.kind==='general'?'🦴':String(L.reps);
  $('#liveSub').textContent=E.kind==='hold'?`הכי ארוך: ${(L.bestHold/1000).toFixed(1)} שנ׳`:E.kind==='general'?'':`חזרות${L.bad?` · ${L.bad} לא נספרו`:''}`;
  const rs=$('#liveRes');if(rs)rs.textContent=(L.res||'')+(L.dbg?' · '+L.dbg:'');
  const m=$('#liveMsg');m.textContent=L.msg||'';m.className='live-msg '+(L.cls||'')}
async function startCamera(){const v=$('#liveVid');if(v.srcObject){v.srcObject.getTracks().forEach(t=>t.stop())}
  // phones differ in which request gives an upright, sharp picture: try a few, keep the best
  const portrait=innerHeight>=innerWidth;const key='plc-cam-'+LIVE.facing+(portrait?'-p':'-l');let saved=null;try{saved=JSON.parse(localStorage.getItem(key))}catch(e){}
  const tries=[...(saved?[saved]:[]),{width:{ideal:1440},height:{ideal:1920}},{width:{ideal:1920},height:{ideal:1440}},{width:{ideal:960},height:{ideal:1280}},{width:{ideal:1280},height:{ideal:960}},{}];
  let best=null,bestScore=-1,bestC=null;
  for(const c of tries){let st;try{st=await navigator.mediaDevices.getUserMedia({video:{facingMode:LIVE.facing,...c},audio:false})}catch(e){if(e?.name==='NotAllowedError')throw e;continue}
    v.srcObject=st;await v.play().catch(()=>{});for(let i=0;i<30&&!v.videoWidth;i++)await wait(50);
    const w=v.videoWidth,h=v.videoHeight;const asp=Math.max(w,h)/Math.max(1,Math.min(w,h));
    // upright like the screen first, then the full sensor view (4:3), then detail
    const sc=((h>=w)===portrait?1e8:0)+(Math.abs(asp-4/3)<0.05?1e7:0)+Math.min(w*h,4e6);
    if(sc>bestScore){if(best)best.getTracks().forEach(t=>t.stop());best=st;bestScore=sc;bestC=c}else st.getTracks().forEach(t=>t.stop());
    if(sc>=1.1e8&&w*h>=900*1200)break}
  try{if(bestC)localStorage.setItem(key,JSON.stringify(bestC))}catch(e){}
  if(!best)throw{name:'NoCamera'};if(v.srcObject!==best){v.srcObject=best;await v.play().catch(()=>{})}
  LIVE.res=v.videoWidth?`${v.videoWidth}×${v.videoHeight}`:'';
  $('#live').classList.toggle('mirror',LIVE.facing==='user')}
async function startLive(id,name){closeSheet();LIVE=liveNew(id,name||LIVE_EX[id]?.name||'תרגיל');const box=$('#live');box.classList.remove('hidden');
  $('#liveName').textContent=LIVE.name;$('#liveFitBtn').textContent='⤢ כל הפריים';$('#liveVid').style.objectFit='cover';$('#liveVid').style.objectPosition='50% 50%';$('#live').classList.remove('whole');LIVE.msg=LIVE_EX[id]?.tip||'צלם כך שכל הגוף ייכנס בפריים';LIVE.cls='';liveHud();
  try{if(!navigator.mediaDevices?.getUserMedia)throw{name:'NoCamera'};await startCamera()}
  catch(e){const m=e?.name==='NotAllowedError'?'אין גישה למצלמה. אשר גישה למצלמה בהגדרות הטלפון (ובאייפון: הגדרות → Safari → מצלמה) ונסה שוב.':'לא הצלחתי לפתוח את המצלמה.';LIVE.msg=m;LIVE.cls='bad';liveHud();return}
  LIVE.msg='מוריד את השלד… (רק בפעם הראשונה)';liveHud();
  let pose;try{pose=await loadPose()}catch(e){console.warn(e);LIVE.msg='לא הצלחתי לטעון את השלד. בדוק חיבור לאינטרנט ונסה שוב.';LIVE.cls='bad';liveHud();return}
  if(!LIVE)return;LIVE.running=true;LIVE.msg=LIVE_EX[id]?.tip||'עמוד כך שכל הגוף ייראה';const v=$('#liveVid'),cv=$('#liveCan');let lastHud=0;
  const bg=$('#liveBg'),bgx=bg.getContext('2d');let lastBg=0;
  const loop=()=>{if(!LIVE||!LIVE.running)return;const t=performance.now();
    if(v.videoWidth&&t-lastBg>250){lastBg=t;const w=64,h=Math.round(64*v.videoHeight/v.videoWidth);if(bg.width!==w||bg.height!==h){bg.width=w;bg.height=h}bgx.drawImage(v,0,0,w,h)}
    if(v.readyState>=2&&v.videoWidth){try{const r=pose.detectForVideo(v,t);const lm=r?.landmarks?.[0];drawSkel(cv,lm,v.videoWidth,v.videoHeight,frameView(LIVE,lm,v));
      if(lm){LIVE.miss=0;recFrame(LIVE,lm,t,v);const mm=liveMeasure(LIVE.id,lm,v.videoWidth/v.videoHeight,LIVE);
        // 3 seconds to get into position before anything is counted
        if(!LIVE.goT){LIVE.vis0=LIVE.vis0||t;const left=3000-(t-LIVE.vis0);if(left<=0){LIVE.goT=t;LIVE.msg='יאללה! 💪';LIVE.cls='good'}else{LIVE.msg=`היכנס לתנוחה… מתחילים בעוד ${Math.ceil(left/1000)}`;LIVE.cls='warn'}}
        else liveStep(LIVE,mm,t);if(LIVE.snapReq)takeSnap(LIVE,v)}else{LIVE.miss=(LIVE.miss||0)+1;if(LIVE.miss>20){LIVE.msg='לא רואה אותך. התרחק קצת מהמצלמה';LIVE.cls='bad'}}}catch(e){console.warn(e)}}
    if(t-lastHud>120){liveHud();lastHud=t}LIVE.raf=requestAnimationFrame(loop)};loop()}
function stopLive(){if(!LIVE)return;LIVE.running=false;cancelAnimationFrame(LIVE.raf);const v=$('#liveVid');if(v.srcObject){v.srcObject.getTracks().forEach(t=>t.stop());v.srcObject=null}$('#live').classList.add('hidden')}
function liveResult(L){const E=LIVE_EX[L.id]||{kind:'general'};const top=Object.entries(L.issues).sort((a,b)=>b[1]-a[1]).map(x=>x[0]);
  let score,headline;
  if(E.kind==='hold'){const s=L.bestHold/1000;const clean=L.holdMs?L.cleanMs/L.holdMs:0;score=s<0.5?1:Math.min(10,Math.round(5+clean*3+Math.min(2,s/5)));headline=`החזקת ${s.toFixed(1)} שנ׳`}
  else if(E.kind==='general'){score=null;headline='השלד עקב אחריך'}
  else{const tot=L.reps+L.bad;const tipN=L.log.filter(r=>r.ok&&r.why).length;score=tot?Math.max(1,Math.round(10*(L.reps-tipN*0.3)/tot)):0;headline=`${L.reps} חזרות נספרו${L.bad?`, ${L.bad} לא נספרו`:''}`}
  const tipList=Object.entries(L.tips).sort((a,b)=>b[1]-a[1]).map(x=>x[0]).filter(x=>!top.includes(x));
  return{score,headline,fix:[...top,...tipList].slice(0,3),good:E.kind==='hold'?(L.bestHold>=1000?[`החזקת ${(L.bestHold/1000).toFixed(1)} שנ׳`]:[]):(L.reps?[`${L.reps} חזרות בטווח מלא`]:[])}}
const REC_IDX=[0,11,12,13,14,15,16,23,24,25,26,27,28];
function recFrame(L,lm,t,v){const R=L.rec||(L.rec={t0:t,w:v.videoWidth,h:v.videoHeight,f:[]});if(R.f.length>=2400||t-(R.last||0)<60)return;R.last=t;
  R.f.push([Math.round(t-R.t0),...REC_IDX.flatMap(i=>[Math.round(lm[i].x*1000),Math.round(lm[i].y*1000),Math.round((lm[i].visibility??1)*100)])])}
