"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";

const AboutSection7 = () => {
  return (
    <div className="pc-about4-area pt-90 pb-90" id="About">
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-xl-6 col-lg-6"
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="pc-about-left-img">
              <img src="img/about-left.png" alt="img" />
            </div>
          </motion.div>
          <motion.div
            className="col-xl-6 col-lg-6"
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="pc-service-info-right pl-50 mb-30">
              <CustomGsapTextSplit> 
                <span className="pc-about-subtitle text-white"> 
                  I'm a Professional Full Stack Developer 
                </span> 
              </CustomGsapTextSplit> 

              <h4 className="pc-about4-title text-white mb-25"> 
                <CustomGsapTextSplit> 
                  I've been building scalable web applications since 2018
                </CustomGsapTextSplit> 
              </h4> 

              <CustomGsapTextSplitLine className="text-white"> 
                I design and implement robust web applications using modern technologies like React, Node.js, and Django, deployed on cloud platforms such as AWS and GCP. My solutions prioritize scalability, efficiency, and cost-effectiveness to support growing businesses and demanding workloads.
              </CustomGsapTextSplitLine> 


              <div className="pc-about-list mt-35"> 
                <span className="pc-about-list-left-img"> 
                  <img src="img/quality.png" alt="Exceptional Quality" /> 
                </span> 
                <div className="pc-about-right-text"> 
                  <h4 className="pc-about-right-title"> 
                    <CustomGsapTextSplit> 
                      Exceptional Quality 
                    </CustomGsapTextSplit> 
                  </h4> 
                  <CustomGsapTextSplitLine> 
                    I build reusable, tested, and well-documented code to ensure reliability and ease of maintenance. 
                  </CustomGsapTextSplitLine> 
                </div> 
              </div>

              <div className="pc-about-info-inner-button mt-25">
                <a
                  href="#Portfolio"
                  className="def-btn def-btn-4 btn-hover btn-bounce-animated"
                >
                  <span className="dot"></span>{" "}
                  <span className="txt">
                    My works <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection7;
