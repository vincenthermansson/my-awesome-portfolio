"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  logo: string;
  style: string;
  shapeStyle?: string;
};

const FooterSection5 = ({ style, logo, shapeStyle }: Props) => {
  return (
    <section>
      <footer className={style}>
        <div className={`animated-shape shape-1 ${shapeStyle}`}>
          <div className="layer-1"></div>
          <div className="layer-2"></div>
          <div className="layer-3"></div>
          <div className="layer-4"></div>
          <div className="layer-5"></div>
        </div>
        <div className={`animated-shape shape-2 ${shapeStyle}`}>
          <div className="layer-1"></div>
          <div className="layer-2"></div>
          <div className="layer-3"></div>
          <div className="layer-4"></div>
          <div className="layer-5"></div>
        </div>
        <div className="container">
          <div className="main-footer">
            <motion.div
              className="row justify-content-between g-lg-4 gy-5"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              <div className="col-lg-3 col-md-8 col-sm-6">
                <div className="footer-menu">
                  <div className="logo">
                    <img src={logo} alt="LOGO" />
                  </div>
                  <p className="contact-number">
                    <a
                      href="tel:+13125552847"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      +1 (312) 555-2847
                    </a>
                  </p>
                  <p>2242 W 19th St, Chicago, IL 60608</p>
                  <p>
                    <a
                      href="mailto:hermansson.vin@gmail.com"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      hermansson.vin@gmail.com
                    </a>
                  </p>
                  <ul className="social-network social-circle">
                    <li>
                      <a
                        href="https://linkedin.com/in/vincenth26/"
                        title="LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/vincenthermansson"
                        title="GitHub"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.com/users/1402853924460826675"
                        title="Discord"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-discord"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://t.me/yourtelegramhandle"
                        title="Telegram"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-telegram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/yourwhatsappnumber"
                        title="WhatsApp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-menu">
                  <h3 className="footer-heading">Languages</h3>
                  <ul className="footer-menu-list">
                    <li>
                      <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        JavaScript
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.typescriptlang.org/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        TypeScript
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.python.org/doc/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Python
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.oracle.com/javase/8/docs/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Java
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.postgresql.org/docs/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SQL
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-menu">
                  <h3 className="footer-heading">Frontend Frameworks</h3>
                  <ul className="footer-menu-list">
                    <li>
                      <a
                        href="https://reactjs.org/docs/getting-started.html"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        React
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://nextjs.org/docs"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Next.js
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://angular.io/docs"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Angular
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://vuejs.org/guide/introduction.html"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Vue.js
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/docs"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Tailwind CSS
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-menu">
                  <h3 className="footer-heading">Backend & Cloud</h3>
                  <ul className="footer-menu-list">
                    <li>
                      <a
                        href="https://nodejs.org/en/docs/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Node.js
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://expressjs.com/en/starter/installing.html"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Express.js
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.djangoproject.com/en/stable/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Django
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://flask.palletsprojects.com/en/latest/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Flask
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://spring.io/projects/spring-boot"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Spring Boot
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://aws.amazon.com/documentation/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        AWS
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cloud.google.com/docs"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Cloud Platform
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-menu">
                  <h3 className="footer-heading">Tools & Testing</h3>
                  <ul className="footer-menu-list">
                    <li>
                      <a
                        href="https://jestjs.io/docs/getting-started"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Jest
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cypress.io/docs/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Cypress
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mochajs.org/#getting-started"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Mocha
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.selenium.dev/documentation/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Selenium
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.docker.com/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Docker
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kubernetes.io/docs/home/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Kubernetes
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.jenkins.io/doc/"
                        className="foot-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Jenkins
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <motion.div
                  className="copyright text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeIn" }}
                  viewport={{ once: true }}
                >
                  <p className="copy">
                    Copyright <strong>Vincent</strong>{" "}
                    {new Date().getFullYear()} All Right Reserved
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection5;
