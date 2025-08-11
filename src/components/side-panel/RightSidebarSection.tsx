"use client";
import { toggleRightSidebarClose } from "@/redux/features/rightSidebarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import Navigation2 from "../header/Navigation2";
import { sidebarData } from "@/data/Data";
import { toggleLightboxOpen } from "@/redux/features/lightboxSlice";
type Props = {
  logo: string;
};
const RightSidebarSection = ({ logo }: Props) => {
  const dispatch = useAppDispatch();
  const isRightSidebarOpen = useAppSelector(
    (state) => state.rightSidebar.isRightSidebarOpen
  );
  const closeRightSidebar = () => {
    dispatch(toggleRightSidebarClose());
  };
  const openLightbox = (src: string) => {
    dispatch(toggleLightboxOpen(src));
  };
  return (
    <>
      <div
        className={`pc-sidebar-info-wrapper side-info ${
          isRightSidebarOpen ? "info-open" : ""
        }`}
      >
        <div className="pc-sidebar-info-inner">
          <div className="row mb-30">
            <div className="col-6">
              <Link href="/" className="pc-sidebar-logo">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="col-6 text-end">
              <button
                className="pc-sidebar-close side-info-close"
                onClick={closeRightSidebar}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <Navigation2 style="mobile-nav" mobile={true} />
          <div className="pc-sidebar-about mb-30">
            <h4 className="pc-sidebar-about-title">About Me</h4>
              <p className="pc-sidebar-short-desc">
                I'm a professional Full Stack Developer with over 7 years of experience building scalable and efficient web applications. I have successfully delivered projects in finance, healthcare, and e-commerce sectors, driving measurable business impact and reducing infrastructure costs. Passionate about clean code, mentoring, and innovative cloud solutions.
              </p>
            <div className="sidebar-photography-imgs mt-20">
              {sidebarData.map((item) => (
                <a
                  role="button"
                  onClick={() => openLightbox(item.img)}
                  key={item.id}
                >
                  <img src={item.img} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div className="pc-sidebar-contact">
            <h4 className="pc-sidebar-contact-title mb-15">Get In Touch Me</h4>
            <span className="pc-sidebar-contact-meta">
              <i className="fa-solid fa-location-dot"></i> 2242 W 19th St, Chicago, IL 60608
            </span>
            <a href="tel:+13125552847" className="pc-sidebar-contact-meta">
              <i className="fa-solid fa-phone-flip"></i> +1 (312) 555-2847
            </a>
            <a
              href="mailto:hermansson.vin@gmail.com"
              className="pc-sidebar-contact-meta"
            >
              <i className="fa-solid fa-envelope"></i> hermansson.vin@gmail.com
            </a>
            <div className="pc-sidebar-social mt-20">
              <a href="https://github.com/vincenthermansson" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/vincenth26/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:hermansson.vin@gmail.com" title="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://discord.com/users/1402853924460826675" target="_blank" rel="noopener noreferrer" title="Discord">
                <i className="fa-brands fa-discord"></i>
              </a>
              <a href="https://t.me/yourtelegramhandle" target="_blank" rel="noopener noreferrer" title="Telegram">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas-overlay ${
          isRightSidebarOpen ? "overlay-open" : ""
        }`}
        role="button"
        onClick={closeRightSidebar}
      ></div>
    </>
  );
};

export default RightSidebarSection;
