"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import VerticalSlider from "./VerticalSlider";

const Homepage = () => {
  return (
    <main>
      <div className="flex justify-between bg-EFEBFF rounded-large">
        <div className="left px-20 py-44 my-20">
          <p className="text-xl font-medium">Ahead app</p>
          <p className="font-bold text-6xl my-4">
            {" "}
            Master your life <br /> by mastering <br /> emotions
          </p>
          <div className="playstore my-10">
            <img src="app-store.svg" className="" />
            <div className="full"></div>
          </div>
        </div>
        <div className="right p-20 py-44 my-20 mx-20">
          <div className="circle1 ">
            <div className="circle2"></div>
          </div>
        </div>
      </div>
      {/* section 2*/}
      <div className="page2">
        <div className="upper-section flex justify-between px-32 py-20">
          <p className="font-bold  text-3xl">EQ beats IQ</p>
          <p className="text-xl">
            People with high emotional
            <br />
            intelligence (EQ) live more fulfilled
            <br />
            lives.They tend to be happier and
            <br />
            have healthier relationships.
          </p>
          <p className="text-xl">
            They are more successful in their
            <br />
            pursuits and make for inspiring
            <br />
            leaders. According to science, they
            <br />
            earn $29k a year.
          </p>
        </div>
        <div className="lower-section px-24 py-20">
          <div className="flex">
            <p className="text-6xl font-bold">Does this sound familiar...</p>
            <img src="ghost1.svg" className="w-16 mx-5" />
          </div>
          <div className="swiper my-10">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className="m-10">
                <SwiperSlide>
                  <div className="card rounded-2xl bg-slate-300 p-8 h-52 ">
                    <p className="text-3xl">&#128544;</p>
                    <div className="text my-3">
                      <p className="font-bold ">You argue with a colleague</p>
                      <p>
                        You get angry and defensive, instead of staying open and
                        working towards common ground.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card rounded-2xl bg-red-300 p-8 h-52">
                    <p className="text-3xl">&#128563;</p>
                    <div className="text my-3">
                      <p className="font-bold ">You got a promotion at work</p>
                      <p>
                        You question yourself and wonder when they'll realize
                        you're and unqualified imposter, instead of trusting
                        yourself & your abilities.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card rounded-2xl bg-orange-200  p-8 h-52 ">
                    <p className="text-3xl">&#129320;</p>
                    <div className="text my-3">
                      <p className="font-bold ">You attend a class reunion</p>
                      <p>
                        You compare yourself with your peers' achievements,
                        instead of making your self-judgement more independent
                        of others.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card rounded-2xl bg-amber-200   p-8 h-52 ">
                    <p className="text-3xl">&#128530;</p>
                    <div className="text my-3">
                      <p className="font-bold ">
                        You are at lively dinner party
                      </p>
                      <p>
                        You play on your phone, instead of confidently
                        approaching strangers and striking up a chat.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card rounded-2xl bg-lime-200 p-8 h-52 ">
                    <p className="text-3xl">&#128556;</p>
                    <div className="text my-3">
                      <p className="font-bold ">
                        You hit dead end in a negotiation
                      </p>
                      <p>
                        You get nervous, frazzled, and frustated, instead of
                        staying optmistic and solution oriented.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      {/* section 2 ends*/}
      {/* section 3*/}
      <div className="section3 px-32 py-28 overflow-hidden">
      <div className="text">
      <p className="text-xl font-medium">Built out of frustation</p>
      <p className="text-6xl font-bold my-4">Meet the ahead app </p>
      </div>
      <div className="flex justify-between gap-96  overflow-hidden">
        <div className="left my-28">
          <img src="ghost-happy.svg" className="w-60 z-10 mx-24" />
          <img src="circle.svg" className="circle w-64 "></img>
          <img src="medal.svg" className="medal w-16"></img>
          <img src="clutter-1.svg" className="clutter1 w-12"></img>
        </div>
        <div className="right my-28 mx-20">
          <p className="text-2xl text-gray-600 " >
            A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
          </p>
          <p className="text-2xl my-4 text-gray-600 ">
            Think of it as a pocket cheerleader towards a better, more fulfilling.
          </p>
        </div>
      </div>
      </div>
      {/* section 3 ends*/}
      {/* section 4*/}
      <div className="section 4 px-40">
        <p className="text-2xl" >Wrong with self-improvement & how we're fixing it.</p>
        <div className="flex">
        <p className="text-6xl font-bold my-3">Self-improvement. Ugh.</p>
        <img src="ghost-crying.svg" className="w-16 mx-10"></img>
        </div>
        <div className="container my-5">
          <div className="scrollable-content">
            <VerticalSlider/>
          </div>
        </div>
      </div>
      {/* section 4 ends*/}
      {/* section 5 */}
      <div className="upper-section flex justify-between px-32 py-20 my-64">
          <p className="font-bold  text-3xl">Be the best you<br/>with EQ</p>
          <p className="text-xl">
            Not having your emotions<br/> under control might be holding<br/> you back.
          </p>
          <p className="text-xl">
            Additionally, not understanding
            <br />
            those of others stops you from
            <br />
            being parent, friend you can be.
          </p>
        </div>
        {/* section 5 ends*/}
        {/* section 6 */}
        <div className="flex-col justify-center px-40">
          <p className="text-center text-2xl font-semibold">Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
          <p className="text-center text-6xl my-4 font-bold"> Ever wondered what others think of you? </p>
          <div className="line"></div>
          <div className="flex justify-between">
          <div className="flex-col justify-center align-middle">
          <img src="medal.svg" className="w-40 align-middle justify-center"></img>
          <p className="text-center text-xl">
            Answer questions on your social skills
          </p>
          </div>
          <div className="flex-col justify-center">
          <img src="medal.svg" className="w-40"></img>
          <p className="text-center text-xl">
            Answer questions on your social skills
          </p>
          </div>
          <div className="flex-col justify-center">
          <img src="medal.svg" className="w-40"></img>
          <p className="text-center text-xl">
            Answer questions on your social skills
          </p>
          </div>
          </div>
        </div>
    </main>
  );
};

export default Homepage;
