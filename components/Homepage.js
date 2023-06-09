"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import VerticalSlider from "./VerticalSlider";
import ScrollerElements from "./ScrollerElements";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
import { useIntersection } from "react-use";
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  //references
  const titleRef = useRef(null);
  const title2Ref = useRef(null);
  const circleRef = useRef(null);
  const medalRef = useRef(null);
  const medal1Ref = useRef(null);
  const medal2Ref = useRef(null);
  const medal3Ref = useRef(null);
  const medalContainerRef = useRef(null);
  const happyGhostRef = useRef(null);
  const angryGhostRef = useRef(null);
  const cryingGhostRef = useRef(null);
  const excitedGhostRef = useRef(null);
  const lineRef = useRef(null);
  const line2Ref = useRef(null);
  const youRef = useRef(null);
  const a1Ref = useRef(null);
  const a2Ref = useRef(null);
  const a3Ref = useRef(null);
  const buttonRef = useRef(null);
  const flowSequenceRef = useRef(null);
  const title2Element = title2Ref.current;
  const circleElement = circleRef.current;
  const medalElement = medalRef.current;
  const medal1Element = medal1Ref.current;
  const medal2Element = medal2Ref.current;
  const medal3Element = medal3Ref.current;
  const lineRefElement = lineRef.current;
  const line2RefElement = line2Ref.current;
  const youRefElement = youRef.current;
  const a1RefElement = a1Ref.current;
  const a2RefElement = a2Ref.current;
  const a3RefElement = a3Ref.current;
  const happyGhostElement = happyGhostRef.current;
  const angryGhostElement = angryGhostRef.current;
  const cryingGhostElement = cryingGhostRef.current;
  const excitedGhostElement = excitedGhostRef.current;
  const buttonRefElement = buttonRef.current;

  //functions to trigger animation
  const title2Animation = () => {
    gsap.fromTo(
      title2Element,
      {
        x: -100,
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        delay: 0.5,
        duration: 1,
        ease: "power2",
        scrollTrigger: {
          trigger: title2Element,
        },
      }
    );
  };
  const circleAnimation = () => {
    gsap.fromTo(
      circleElement,
      {
        x: 300,
      },
      {
        x: 10,
        duration: 2,
        ease: "power1",
        scrollTrigger: {
          trigger: title2Element,
        },
      }
    );
  };
  const medalAnimation = () => {
    gsap.fromTo(
      medalElement,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 2,
        delay: 0.5,
        ease: "power1",
        scrollTrigger: {
          trigger: title2Element,
        },
      }
    );
  };
  const happyGhostAnimation = () => {
    gsap.fromTo(
      happyGhostElement,
      {
        rotate: 50,
      },
      {
        rotate: 0,
        duration: 2,
        delay: 0.5,
        ease: "power1",
        scrollTrigger: {
          trigger: title2Element,
        },
      }
    );
  };
  const angryGhostAnimation = () => {
    gsap.fromTo(
      angryGhostElement,
      {
        rotate: -100,
        x: 300,
        y: 0,
      },
      {
        rotate: -50,
        x: 0,
        y: -30,
        duration: 2,
        delay: 0.5,
        ease: "power1",
        scrollTrigger: {
          trigger: title2Element,
        },
      }
    );
  };
  const cryingGhostAnimation = () => {
    gsap.fromTo(
      cryingGhostElement,
      {
        rotate: -100,
        x: 300,
        y: 0,
      },
      {
        rotate: 0,
        x: 0,
        y: -30,
        duration: 2,
        delay: 0.5,
        ease: "power1",
        scrollTrigger: {
          trigger: title2Element,
        },
      }
    );
    gsap.to(cryingGhostElement, {
      rotate: 0,
      scrollTrigger: {
        trigger: title2Element,
      },
    });
  };
  const medalSequenceAnimation = () => {
    const timeline = gsap.timeline({ defaults: { duration: 0.4 } });
    timeline
      .fromTo(
        [medal1Element, youRefElement],
        {
          scale: 0,
          opacity: 0,
          ease: "power1",
        },
        {
          delay: 1,
          scale: 1,
          opacity: 1,
        }
      )
      .fromTo(
        [medal2Element, a1RefElement],
        {
          scale: 0,
          opacity: 0,
          ease: "power1",
        },
        {
          scale: 1,
          opacity: 1,
        }
      )
      .fromTo(
        [medal3Element, a2RefElement],
        {
          scale: 0,
          opacity: 0,
          ease: "power1",
        },
        {
          scale: 1,
          opacity: 1,
        }
      )
      .fromTo(
        a3RefElement,
        {
          scale: 0,
          opacity: 0,
          ease: "power1",
        },
        {
          scale: 1,
          opacity: 1,
        }
      );
  };
  const lineAnimation = () => {
    gsap.fromTo(
      [lineRefElement, line2RefElement],
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 5,
        scrollTrigger: {
          trigger: lineRefElement,
        },
      }
    );
  };
  const buttonAnimation = () => {
    gsap.fromTo(
      buttonRefElement,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.7,
        delay: 0.5,
        ease: "power1",
        scrollTrigger: {
          trigger: buttonRefElement,
        },
      }
    );
  };
  const excitedGhostAnimation = () => {
    gsap.fromTo(
      excitedGhostElement,
      {
        scale: 0.4,
        rotate: 10,
      },
      {
        scale: 1.4,
        rotate: 0,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: excitedGhostElement,
        },
      }
    );
  };

  // configuring intersection points/thresholds
  const intersection = useIntersection(title2Ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersectionCircle = useIntersection(circleRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersectionMedal = useIntersection(medalRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersectionHappyGhost = useIntersection(happyGhostRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersectionAngryGhost = useIntersection(angryGhostRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersectionCryingGhost = useIntersection(cryingGhostRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersectionMedalContainer = useIntersection(medalContainerRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersectionButton = useIntersection(buttonRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersectionExcitedGhost = useIntersection(buttonRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });

  // triggering animation functions
  if (intersection && intersection.intersectionRatio < 0.6) {
    title2Animation();
  }
  if (intersectionCircle && intersectionCircle.intersectionRatio < 0.6) {
    circleAnimation();
  }
  if (intersectionMedal && intersectionMedal.intersectionRatio < 0.6) {
    medalAnimation();
  }
  if (
    intersectionHappyGhost &&
    intersectionHappyGhost.intersectionRatio < 0.6
  ) {
    happyGhostAnimation();
  }
  if (
    intersectionAngryGhost &&
    intersectionAngryGhost.intersectionRatio < 0.6
  ) {
    angryGhostAnimation();
  }
  if (
    intersectionCryingGhost &&
    intersectionCryingGhost.intersectionRatio < 0.6
  ) {
    cryingGhostAnimation();
  }
  if (
    intersectionMedalContainer &&
    intersectionMedalContainer.intersectionRatio < 0.6
  ) {
    medalSequenceAnimation();
    lineAnimation();
  }
  if (intersectionButton && intersectionButton.intersectionRatio < 0.6) {
    buttonAnimation();
  }
  if (
    intersectionExcitedGhost &&
    intersectionExcitedGhost.intersectionRatio < 0.6
  ) {
    excitedGhostAnimation();
  }

  useEffect(() => {
    const titleElement = titleRef.current;
    gsap.from(titleElement, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2",
    });
  }, []);

  return (
    <main>
      <div className="flex justify-between bg-EFEBFF rounded-large">
        <div className="left px-20 py-44 my-20" ref={titleRef}>
          <p className="text-xl font-medium">Ahead app</p>
          <p className="font-bold text-6xl my-4">
            Master your life <br /> by mastering <br /> emotions
          </p>
          <div className="playstore my-10">
            <img src="app-store.svg" className="" />
            <div className="full"></div>
          </div>
        </div>
        <img
          id="ghostC"
          src="ghost-crying.svg"
          className="w-14 z-10 ghostC"
        ></img>
        <img id="ghostP" src="ghost-pink.svg" className="w-20 ghostP"></img>
        <img id="ghostR" src="ghost1.svg" className="w-20 ghostR"></img>
        <div className="right p-20 py-44 my-20 mx-20">
          <div id="circle1" className="circle1 ">
            <div id="circle2" className="circle2">
              <img src="app.svg" className="w-48 my-16 ml-40"></img>
            </div>
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
            <p id="title2" ref={title2Ref} className="text-6xl font-bold">
              Does this sound familiar...
            </p>
            <img
              id="ghost1"
              src="ghost1.svg"
              className="w-16 mx-5"
              ref={angryGhostRef}
            />
          </div>
          <div className="swiper my-10">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              autoplay={{ delay: 500 }}
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
            <img
              src="ghost-happy.svg"
              className="w-60 z-10 mx-24"
              ref={happyGhostRef}
            />
            <img
              src="circle.svg"
              className="circle w-64 "
              ref={circleRef}
            ></img>
            <img src="medal.svg" className="medal w-16" ref={medalRef}></img>
            <img src="clutter-1.svg" className="clutter1 w-12"></img>
          </div>
          <div className="right my-28 mx-20">
            <p className="text-2xl text-gray-600 ">
              A personalized pocket coach that provides bite-sized,
              science-driven tools to boost emotional intelligence.
            </p>
            <p className="text-2xl my-4 text-gray-600 ">
              Think of it as a pocket cheerleader towards a better, more
              fulfilling.
            </p>
          </div>
        </div>
      </div>
      {/* section 3 ends*/}
      {/* section 4*/}
      <div className="section 4 px-40">
        <p className="text-2xl">
          Wrong with self-improvement & how we're fixing it.
        </p>
        <div className="flex">
          <p className="text-6xl font-bold my-3">Self-improvement. Ugh.</p>
          <img
            src="ghost-crying.svg"
            className="w-16 mx-10"
            ref={cryingGhostRef}
          ></img>
        </div>
        <div className="container my-5">
          <div className="scrollable-content">
            <VerticalSlider />
          </div>
        </div>
      </div>
      {/* section 4 ends*/}
      {/* section 5 */}
      <div className="upper-section flex justify-between px-32 py-20 my-64">
        <p className="font-bold  text-3xl">
          Be the best you
          <br />
          with EQ
        </p>
        <p className="text-xl">
          Not having your emotions
          <br /> under control might be holding
          <br /> you back.
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
        <p className="text-center text-2xl font-semibold">
          Let your friends, family, and co-workers (anonymously) rate your
          social skills.
        </p>
        <p className="text-center text-6xl my-4 font-bold">
          Ever wondered what others think of you?
        </p>
        <div className="flex justify-center align-middle items-center">
          <div className="px-48 line" ref={lineRef}></div>
        </div>
        <div
          className="flex justify-between my-20 z-10"
          ref={medalContainerRef}
        >
          <div
            className="flex flex-col items-center justify-center"
            ref={medal1Ref}
          >
            <img
              src="medal1.svg"
              className="w-20 align-middle justify-center"
              ref={medal1Ref}
            ></img>
            <p className="text-center text-base  my-6 font-medium">
              Answer questions on your social skills
            </p>
          </div>
          <div
            className="flex flex-col items-center justify-center"
            ref={medal2Ref}
          >
            <img
              src="medal2.svg"
              className="w-20 align-middle justify-center"
            ></img>
            <p className="text-center text-base  my-6 font-medium">
              Let others anonymously answer the same
              <br />
              questions about you
            </p>
          </div>
          <div
            className="flex flex-col items-center justify-center"
            ref={medal3Ref}
          >
            <img
              src="medal3.svg"
              className="w-20 align-middle justify-center"
            ></img>
            <p className="text-center text-base  my-6 font-medium">
              Find out where you and others can see things
              <br />
              the same way - and where not!
            </p>
          </div>
        </div>
        <div className="horizontal-timeline px-40" ref={flowSequenceRef}>
          <div className="line2" ref={line2Ref}></div>
          <div className="flex justify-between">
            <div className="you" ref={youRef}>
              <div className="flex-col flex rounded-md bg-blue-600 text-white justify-center py-3 px-4 text-xl">
                You
              </div>
              <div className="rounded-full bg-blue-600 h-10 w-10 my-6"></div>
              <div className="flex-col flex rounded-md bg-white text-white justify-center py-3 px-4 text-xl">
                You
              </div>
            </div>
            <div className="anonymonos1" ref={a1Ref}>
              <div className="flex-col flex rounded-md bg-white text-white justify-center py-3 px-4 text-xl">
                Anonymonos 1
              </div>
              <div className="rounded-full bg-cyan-400   h-10 w-10 my-6"></div>
              <div className="flex-col flex rounded-md bg-cyan-400 text-white justify-center py-3 px-4 text-xl">
                Anonymonos 1
              </div>
            </div>
            <div className="anonymonos2" ref={a2Ref}>
              <div className="flex-col flex rounded-md bg-amber-400  text-white justify-center py-3 px-4 text-xl">
                Anonymonos 2
              </div>
              <div className="rounded-full bg-amber-400 h-10 w-10 my-6"></div>
              <div className="flex-col flex rounded-md bg-white text-white justify-center py-3 px-4 text-xl">
                Anonymonos 2
              </div>
            </div>
            <div className="anonymonos3" ref={a3Ref}>
              <div className="flex-col flex rounded-md bg-white text-white justify-center py-3 px-4 text-xl">
                Anonymonos 3
              </div>
              <div className="rounded-full bg-green-400 h-10 w-10 my-6"></div>
              <div className="flex-col flex rounded-md bg-green-400  text-white justify-center py-3 px-4 text-xl">
                Anonymonos 3
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section6 ends */}
      {/* section7 */}
      <div className="mx-64 flex-col text-center p-52 ">
        <p className="font-medium text-lg"> We take privacy seriously </p>
        <p className="font-bold text-3xl my-2"> Before you get started </p>
        <p className="font-medium text-lg my-5 text-gray-600">
          {" "}
          "We won't share your answers with anyone (and won't ever tell
          <br /> you which friends said what about you)"
        </p>
        <div className="flex justify-center items-baseline">
          <p className="my-3 font-medium"> with love,</p>
          <img src="sign.png" alt="text" className="mx-2" />
        </div>
        <button
          className=" rounded-full bg-black text-white px-5 py-3 m-5 font-medium text-lg"
          ref={buttonRef}
        >
          Start a test
        </button>
        <p className="text-gray-600 font-medium"> Takes only 5 minutes</p>
      </div>
      {/* section7 ends */}
      {/* section8 */}
      <div className="flex justify-between p-40">
        <div className="left flex-col">
          <p className="text-6xl font-bold">Work with us</p>
          <div className="px-10 my-16">
            <img
              src="excited-ghost.svg"
              className="w-10 my-6"
              ref={excitedGhostRef}
            ></img>
            <div className="">
              <p className="font-bold text-3xl">About</p>
              <p className="text-gray-600 my-3 font-medium text-xl">
                At ahead our goal is to make self-
                <br />
                improvement fun and lasting. We know there's <br /> a way how to
                make it work. And that's what <br />
                ahead is all about!
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-3xl">Product</p>
              <p className="text-gray-600 my-3 font-medium text-xl">
                Sure, you could spend ages reading books or
                <br /> sitting in seminars on how t become a better
                <br /> spouse, parent, or manager- like we did...
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="text-6xl font-bold text-theme mr-20 text-right">
            ahead
          </p>
          <div className="container2 my-16 px-28  py-16">
            {ScrollerElements.map((element) => {
              return (
                <div
                  className={element.key === "6" ? "" : "mb-20"}
                  key={element.key}
                >
                  <h3 className="text-lg font-semibold"> {element.title1} </h3>
                  <h3 className="text-lg font-semibold"> {element.title2} </h3>
                  <div className="my-3">
                    <h5 className="text-gray-600 font-medium">
                      {element.description1}
                    </h5>
                    <h5 className="text-gray-600 font-medium">
                      {element.description2 ? element.description2 : ""}
                    </h5>
                    <h5 className="text-gray-600 font-medium">
                      {element.description3 ? element.description3 : ""}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* section8 ends */}
      {/* section9  */}
      <div className=" flex-col m-16">
        <p className="text-6xl font-bold">Open Vacancies</p>
        <div className="flex justify-between my-10 p-10">
          <div className="vacancies rounded-2xl p-10">
            <p className="font-semibold text-2xl py-3">
              Senior Full-Stack Engineer
            </p>
            <ul className="list-disc ml-5">
              <li className="my-2 font-medium text-base">Full-time position</li>
              <li className="my-2 font-medium text-base ">Berlin or remote</li>
              <li className="my-2 font-medium text-base">
                $65-85k, 0.5-1.50% equity share options
              </li>
            </ul>
            <button className="bg-black mt-4 px-5 py-4 rounded-full  text-white">
              See details
            </button>
          </div>
          <div className="vacancies rounded-2xl p-10">
            <p className="font-semibold text-2xl py-3">Senior Designer</p>
            <ul className="list-disc ml-5">
              <li className="my-2 font-medium text-base">Full-time position</li>
              <li className="my-2 font-medium text-base ">Berlin or remote</li>
              <li className="my-2 font-medium text-base">
                $65-85k, 0.5-1.50% equity share options
              </li>
            </ul>
            <button className="bg-black mt-4 px-5 py-4 rounded-full  text-white">
              See details
            </button>
          </div>
          <div className="vacancies rounded-2xl p-10">
            <p className="font-semibold text-2xl py-3">Rockstar Intern</p>
            <ul className="list-disc ml-5">
              <li className="my-2 font-medium text-base">Full-time position</li>
              <li className="my-2 font-medium text-base ">Berlin or remote</li>
              <li className="my-2 font-medium text-base">
                $65-85k, 0.5-1.50% equity share options
              </li>
            </ul>
            <button className="bg-black mt-4 px-5 py-4 rounded-full  text-white">
              See details
            </button>
          </div>
        </div>
      </div>
      {/* section9 ends */}
      {/* section10 */}
      <div className="mx-20 flex flex-col items-center justify-center">
        <img src="logo2.svg" className="h-16"></img>
        <p className="text-theme font-bold text-3xl mt-2">ahead</p>
        <div className="flex my-6 gap-10">
          <p className="font-medium flex gap-2">
            {" "}
            <img src="map-location-dot-solid.svg" className="h-5" />{" "}
            AuguststraBe 26, 10117 Berlin
          </p>
          <p className="font-medium flex gap-2">
            <img src="envelope-solid.svg" className="h-5" /> hi2ahead-app.com
          </p>
        </div>
        <img src="app-store.svg" className="h-12"></img>
        <p className="my-6 text-gray-600 font-medium">
          2022 ahead app. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default Homepage;