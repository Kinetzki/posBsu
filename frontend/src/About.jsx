import React from "react";
import Header from "./components/header";
import Footer from "./components/Footer";

function About({ srcode }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header srcode={srcode} />
      <h1 className="w-full px-[100px] py-[50px] text-[20px] font-semibold font-Inter italic">About</h1>
      <p className="flex flex-col gap-5 px-[100px] pb-[50px]">
        Welcome to the Alangilan Graduate School POS Generation System <br />
        <br />
        At Alangilan Graduate School, we are proud to uphold the vision and
        mission of our esteemed institution, which serves as the foundation of
        our commitment to excellence and innovation. <br />
        <br />
        University Vision: <br />
        A premier national university that develops leaders in the global
        knowledge economy. <br />
        <br />
        University Mission: <br />
        A university committed to producing leaders by providing a 21st century
        learning environment through innovations in education, multidisciplinary
        research, and community and industry partnerships in order to nurture
        the spirit of nationhood, propel the national economy, and engage the
        world for sustainable development. <br />
        <br />
        Core Values: <br />
        Our core values serve as the guiding principles that shape our actions
        and decisions as an institution. They reflect our unwavering commitment
        to excellence, integrity, and service to others. Our core values are:
        <ul className="l list-disc pl-10">
          <li>Patriotism</li>
          <li>Service</li>
          <li>Integrity</li>
          <li>Resilience</li>
          <li>Excellence</li>
          <li>Faith</li>
        </ul>
        About the POS Generation System: <br />
        The Alangilan Graduate School POS Generation System is an innovative
        solution designed to optimize the allocation of students across
        subjects, maximizing the participation in every course offered.
        Developed with the specific purpose of maximizing the number of students
        for every subject, our system represents a significant advancement in
        administrative efficiency and student enrollment management. <br />
        <br />
        Join us as we embrace our university's vision, mission, and core values,
        and work together towards a brighter future for all.
      </p>
      <Footer/>
    </div>
  );
}

export default About;
