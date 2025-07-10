import { AmpStoryGridLayer, AmpStory, AmpStoryPage, AmpImg, AmpParagraph } from 'react-google-stories'
import './index.css';
import slide1 from './images/p1.jpg'
import slide2 from './images/p2.jpg'
import slide3 from './images/p3.jpg'
import slide4 from './images/p4.jpg'
import slide5 from './images/p5.jpg'
import slide6 from './images/p6.jpg'
import slide7 from './images/p7.jpg'
import slide8 from './images/p8.jpg'
import arrow  from './images/Asset 13.png'
import arrow2 from './images/Asset 12.png'
import bubble from './images/bubble.png'
import bubbleRe from './images/bubble-re.png'
import bubble21 from './images/bubble21.png'
import bubble22 from './images/bubble22.png'
import bubble23 from './images/bubble23.png'
import bubble21Re from './images/bubble21-re.png'
import telegram from './icons/Telegram-Logo.svg'
import eitaa from './icons/Eitaa-Logo.svg'
import call from './icons/call.svg'
import spark from './icons/spark.svg'
import hami from './icons/hamiteam.jpg'


function App() {
  return (
      <AmpStory
          title="Example title"
          publisher="Example publisher"
          publisher-logo-src="logo128.png"
          poster-portrait-src="3x4.jpg"
      >
        <AmpStoryPage id="first">
          <AmpStoryGridLayer template="fill">
            <AmpImg src={slide1} height="720" width="1280" layout="responsive" />
          </AmpStoryGridLayer>
          <AmpStoryGridLayer template="vertical" className="text-layer" style={{ justifyContent: 'flex-end', paddingBottom: '40px' }} >
            <div className="bottom-box">

              <div className="pos">
                <p className="bottom-text">به زودی این حال و هوا نصیبتون میشه...</p>
              </div>
            </div>
            <div className="row">
              <p className="bottom-button">با من بیا</p>
              <AmpImg src={arrow} layout="responsive" className="arrow1"/>
            </div>
          </AmpStoryGridLayer>
        </AmpStoryPage>


        <AmpStoryPage id="second">
          <AmpStoryGridLayer template="fill">
            <AmpImg src={slide2} height="720" width="1280" layout="responsive" />
          </AmpStoryGridLayer>
          <AmpStoryGridLayer template="vertical">
            <div className="speechbox">
            <AmpImg level={1} src={bubble} layout="responsive" className="bubble1"/>
            <AmpParagraph text="ولی برای اینکه به اینجا برسم،باید چند میلیون هزینه سفر،غذا و هتل بدم ...
            فکر نکنم قسمتم بشه ..." className="textbubble" />
            </div>
            <div className="row">
              <p className="q1">ولی اگه بشه چی؟</p>
              <AmpImg src={arrow2} layout="responsive" className="arrow2"/>
            </div>
          </AmpStoryGridLayer>
        </AmpStoryPage>



        <AmpStoryPage id="third">
          <AmpStoryGridLayer template="fill">
            <AmpImg src={slide3} height="720" width="1280" layout="responsive" />
          </AmpStoryGridLayer>
          <AmpStoryGridLayer template="vertical" className="text-layer" style={{ justifyContent: 'flex-end', paddingBottom: '40px' }}>
            <div className="bottom-box">

              <div className="pos">
                <div className="bottom-text3">
                  <p> کاش میشد برم مشهد...</p>
                  <p>میدونم حالم خیلی خوب میشه...</p>
                  </div>
              </div>
            </div>
            <div className="row">
              <p className="bottom-button3">ولی دلم روشنه...</p>
            </div>
          </AmpStoryGridLayer>
        </AmpStoryPage>





        <AmpStoryPage id="forth">
          <AmpStoryGridLayer template="fill">
            <AmpImg src={slide4} height="720" width="1280" layout="responsive" />
          </AmpStoryGridLayer>
          <AmpStoryGridLayer template="vertical">
            <div className="speechbox2">
              <div className="bubbleWithText">
                <AmpImg src={bubble21} layout="responsive" className="bubble2" />
                <AmpParagraph text="الان چجوری بریم؟" className="textbubble2" />
              </div>
              <div className="bubbleWithText">
                <AmpImg src={bubble22} layout="responsive" className="bubble2" />
                <AmpParagraph text="از کجا هتل بگیریم؟" className="textbubble2" />
              </div>
              <div className="bubbleWithText">
                <AmpImg src={bubble23} layout="responsive" className="bubble2" />
                <AmpParagraph text="به کی اعتماد کنیم؟" className="textbubble2" />
              </div>
            </div>
          </AmpStoryGridLayer>

          <AmpStoryGridLayer template="vertical">
            <div className="footerText">
              <p>جواب اینجاست...</p>
              <AmpImg src={arrow2} layout="responsive" className="arrow2"/>
            </div>
          </AmpStoryGridLayer>
        </AmpStoryPage>




        <AmpStoryPage id="fifth">
          <AmpStoryGridLayer template="fill">
            <AmpImg src={slide5} height="720" width="1280" layout="responsive" />
          </AmpStoryGridLayer>
          <AmpStoryGridLayer template="vertical" className="text-layer" style={{ justifyContent: 'flex-end', paddingBottom: '130px' }} >

              <div className="pos5">
                <div className="bubbleWithText">
                  <AmpImg src={bubbleRe} layout="responsive" className="bubble5" />
                  <AmpParagraph text="من گروه حامی_تیم رو توی اینترنت دیدم،کانال هم دارن...هم هتلهای خوبی دارن هم قیمتاشون منصفانه است..." className="textbubble5" />
                </div>
              </div>
          </AmpStoryGridLayer>
        </AmpStoryPage>




        <AmpStoryPage id="sixth">
          <AmpStoryGridLayer template="fill">
            <AmpImg src={slide6} height="720" width="1280" layout="responsive" />
          </AmpStoryGridLayer>
          <AmpStoryGridLayer template="vertical">
            <div className="bubbleWithText6">
              <AmpImg src={bubble21} layout="responsive" className="bubble6" />
              <AmpParagraph text="عکسها واقعیه؟" className="textbubble6" />
            </div>
          </AmpStoryGridLayer>
          <AmpStoryGridLayer template="vertical">
            <div>
                <div className="bottom-text6">
                    اینجا توضیح دادن که هتلهارو خودشون از نزدیک میبینن،قیمت هارو با تخفیف لحاظ میکنن و همه چی از فیلتر خودشون رد میشه.
                </div>
            </div>
          </AmpStoryGridLayer>
          <AmpStoryGridLayer template="vertical">
            <div className="footerText6">
              *یکی از کارشناسان رزرو در حال بررسی جزئیات هتل ها
            </div>
          </AmpStoryGridLayer>
        </AmpStoryPage>



        <AmpStoryPage id="seventh">
          <AmpStoryGridLayer template="fill">
            <AmpImg src={slide7} height="720" width="1280" layout="responsive" />
          </AmpStoryGridLayer>
          <AmpStoryGridLayer template="vertical" className="text-layer" style={{ justifyContent: 'flex-end', paddingBottom: '40px' }}>
            <div>
              <div>
                <AmpImg src={bubble21Re} layout="responsive" className="bubble7" />
                <div className="bottom-text7">
                  چطوری رزرو کنیم؟
                  <br/>
                  با کی باید هماهنگ کنیم؟
                </div>
              </div>
            </div>
            <div className="row row7">
              <p className="bottom-button7">بزن بعدی</p>
              <AmpImg src={arrow2} layout="responsive" className="arrow27"/>
            </div>
          </AmpStoryGridLayer>
        </AmpStoryPage>

        <AmpStoryPage id="eight">
          <AmpStoryGridLayer template="fill">
            <AmpImg src={slide8} height="720" width="1280" layout="responsive"/>
          </AmpStoryGridLayer>
          <AmpStoryGridLayer template="vertical">
            <div className="box">
                  <div className="layoutbox">
                        <div className="box1">
                          <AmpImg  src={hami} id="hami-logo" width="60" height="60" layout="fixed"
                                   alt="hamiteam logo"></AmpImg>
                            <span id="title">حامی،گروه تخصصی رزرو هتل</span>
                            <span id="msg">برای رزرو هتل،کد هتلی که در کانال دیدید رو برای یکی از مشاورین ما بفرستید.
                            <br/> فرم رزرو براتون ارسال میشه و با پرداخت بیعانه ی شب اول،رزرو صورت میگیره.</span>
                        </div>

                        <div className="box2">
                          <div className="b2-r1">
                            <AmpImg src={spark}  className="spark-logo" width="20" height="20" layout="fixed"
                                     alt="spark"></AmpImg>
                            <span>راههای ارتباطی </span>
                            <AmpImg src={spark} className="spark-logo" width="20" height="20" layout="fixed"
                                     alt="spark"></AmpImg>
                          </div>


                          <div className="b2b">
                            <AmpImg src={call} className="phone-logo"  width="20" height="20" layout="fixed"
                                     alt="phone"></AmpImg>
                            <span className="no1"><a href="tel:05191690169">05191690169</a></span>
                            <span className="contact">پاسخگوی هوشمند</span>
                          </div>

                          <div className="b2b">
                            <AmpImg src={call} className="call-logo"  width="20" height="20" layout="fixed"
                                     alt="call"></AmpImg>
                            <span className="no2"><a href="tel:+989353160169">09353160169</a></span>
                            <span className="contact">مشاور 1 (تماس،ایتا،تلگرام)</span>
                          </div>

                          <div className="b2b">
                            <AmpImg src={call} className="call-logo" width="20" height="20" layout="fixed"
                                     alt="call"></AmpImg>
                            <span className="no3"><a href="tel:+989351630169">09351630169</a></span>
                            <span className="contact">مشاور 2 (تماس،ایتا،تلگرام)</span>
                          </div>

                          <div className="b2b">
                            <AmpImg src={call} className="call-logo" width="20" height="20" layout="fixed"
                                     alt="call"></AmpImg>
                            <span className="no4"><a href="tel:+989150100898">09150100898</a></span>
                            <span className="contact">ارتباط با مدیریت (پیامک)</span>
                          </div>
                        </div>

                       <div className="box3">
                         <div className="linkbox">
                           <a href="https://eitaa.com/s/HAMI_HOTEL" >
                            <AmpImg src={eitaa} className="eitaa-logo" width="45" height="45" layout="fixed"
                                     alt="eitaa"></AmpImg>
                           </a>
                           <span>ایتا</span>
                        </div>

                         <div className="linkbox">
                           <a href="https://t.me/Hami_hotel" >
                            <AmpImg src={telegram} className="telegram-logo" width="45" height="45"
                                     layout="fixed" alt="telegram"></AmpImg>
                          </a>
                           <span>تلگرام</span>
                         </div>

                          <div id="apps-title">
                            <span id="apps-title-text">
                             کانال ارتباطی <br/>
                             حامـی_تیم در <br/>
                              پیام رسان‌ ها
                            </span>
                          </div>
                       </div>
                  </div>
            </div>
          </AmpStoryGridLayer>
        </AmpStoryPage>
      </AmpStory>
  );
}

export default App;