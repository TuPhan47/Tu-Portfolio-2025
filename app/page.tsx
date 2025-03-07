import Image from "next/image";
import MainVisualTop from "./components/common/MainVisual/MainVisualTop";

export default function Home() {
  return (
    <>
      <MainVisualTop />
      <section id="skills" className="box-base">
        <div className="wrp-container">
          <h2 className="hdg-lv2 hdg-lv2--primary"><span className="hdg-lv2__txt">SKILLS</span></h2>
          <div className="box-card grid-row">
            <div className="box-card__item grid-col--4">
              <div className="box-card__inner">
                <h3 className="box-card__title hdg-lv3">UX / UI</h3>
                <p className="box-card__txt txt-base">Figma, Adobe XD, Photoshop, Adobe Illustrator</p>
              </div>
            </div>
            <div className="box-card__item grid-col--4">
              <div className="box-card__inner">
                <h3 className="box-card__title hdg-lv3">UX / UI</h3>
                <p className="box-card__txt txt-base">Figma, Adobe XD, Photoshop, Adobe Illustrator</p>
              </div>
            </div>
            <div className="box-card__item grid-col--4">
              <div className="box-card__inner">
                <h3 className="box-card__title hdg-lv3">UX / UI</h3>
                <p className="box-card__txt txt-base">Figma, Adobe XD, Photoshop, Adobe Illustrator</p>
              </div>
            </div>
            <div className="box-card__item grid-col--4">
              <div className="box-card__inner">
                <h3 className="box-card__title hdg-lv3">UX / UI</h3>
                <p className="box-card__txt txt-base">Figma, Adobe XD, Photoshop, Adobe Illustrator</p>
              </div>
            </div>
            <div className="box-card__item grid-col--4">
              <div className="box-card__inner">
                <h3 className="box-card__title hdg-lv3">UX / UI</h3>
                <p className="box-card__txt txt-base">Figma, Adobe XD, Photoshop, Adobe Illustrator</p>
              </div>
            </div>
            <div className="box-card__item grid-col--4">
              <div className="box-card__inner">
                <h3 className="box-card__title hdg-lv3">UX / UI</h3>
                <p className="box-card__txt txt-base">Figma, Adobe XD, Photoshop, Adobe Illustrator</p>
              </div>
            </div>
            <div className="box-card__item grid-col--4">
              <div className="box-card__inner">
                <h3 className="box-card__title hdg-lv3">UX / UI</h3>
                <p className="box-card__txt txt-base">Figma, Adobe XD, Photoshop, Adobe Illustrator</p>
              </div>
            </div>
            <div className="box-card__item grid-col--4">
              <div className="box-card__inner">
                <h3 className="box-card__title hdg-lv3">UX / UI</h3>
                <p className="box-card__txt txt-base">Figma, Adobe XD, Photoshop, Adobe Illustrator</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="box-base">
        <div className="bg-green">
          <div className="wrp-container">
            <h2 className="hdg-lv2 hdg-lv2--primary"><span className="hdg-lv2__txt">EXPERIENCE</span></h2>
            <div className="box-timeline">
              <div className="box-timeline__item">
                <div className="box-timeline__head">
                  <h3 className="box-timeline__head--main">Sep 2020 - Present</h3>
                  <p className="box-timeline__head--sub txt-base">Fullstack Developer</p>
                </div>
                <div className="box-timeline__content">
                  <div className="box-timeline__inner">
                    <div className="box-timeline__row grid-row">
                      <div className="box-timeline__img"><Image src="/images/top/img-pct-01.jpg" width={640} height={381} alt="" /></div>
                      <div className="box-timeline__des">
                        <div className="box-timeline__title">
                          <p className="box-timeline__title__txt">CAILY ONE MEMBER COMPANY LIMITED</p>
                        </div>
                        <p className="txt-base"><b>Achievements/tasks:</b></p>
                        <ul className="lst-dot">
                          <li className="lst-dot__item">Lorem text is myself</li>
                          <li className="lst-dot__item">Lorem text is myself</li>
                          <li className="lst-dot__item">Lorem text is myself</li>
                          <li className="lst-dot__item">Lorem text is myself</li>
                        </ul>
                        <p className="txt-base"><b>Tech stacks:</b></p>
                        <p className="txt-base">Lorem text is myself</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-timeline__item">
                <div className="box-timeline__head">
                  <h3 className="box-timeline__head--main">Sep 2020 - Present</h3>
                  <p className="box-timeline__head--sub txt-base">Fullstack Developer</p>
                </div>
                <div className="box-timeline__content">
                  <div className="box-timeline__inner">
                    <div className="box-timeline__row box-timeline__row--reverse grid-row">
                      <div className="box-timeline__img"><Image src="/images/top/img-pct-01.jpg" width={640} height={381} alt="" /></div>
                      <div className="box-timeline__des">
                        <div className="box-timeline__title">
                          <p className="box-timeline__title__txt">CAILY ONE MEMBER COMPANY LIMITED</p>
                        </div>
                        <p className="txt-base"><b>Achievements/tasks:</b></p>
                        <ul className="lst-dot">
                          <li className="lst-dot__item">Lorem text is myself</li>
                          <li className="lst-dot__item">Lorem text is myself</li>
                          <li className="lst-dot__item">Lorem text is myself</li>
                          <li className="lst-dot__item">Lorem text is myself</li>
                        </ul>
                        <p className="txt-base"><b>Tech stacks:</b></p>
                        <p className="txt-base">Lorem text is myself</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section id="projects" className="box-base">
        <div className="wrp-container">
          <h2 className="hdg-lv2 hdg-lv2--primary"><span className="hdg-lv2__txt">PROJECTS</span></h2>
          
        </div>
        <div className="slide grid-row">
            <div className="slide__item">
              <a href="" className="slide__inner">https://caily.com.vn/</a>
            </div>
            <div className="slide__item">
              <a href="" className="slide__inner">https://caily.com.vn/</a>
            </div>
            <div className="slide__item">
              <a href="" className="slide__inner">https://caily.com.vn/</a>
            </div>
            <div className="slide__item">
              <a href="" className="slide__inner">https://caily.com.vn/</a>
            </div>
            <div className="slide__item">
              <a href="" className="slide__inner">https://caily.com.vn/</a>
            </div>
          </div>
      </section>
      <div className="bg-cover">
        <figure className="bg-cover"><Image src="/images/top/bg-cover.jpg" width={1920} height={800} alt="" className="fluid-image" /></figure>
      </div>
    </>
  );
}
