import React from "react";
import Header from "./components/header";
import Footer from "./components/Footer";

function Programs({ srcode }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header srcode={srcode} />

      <h1 className="w-full px-[100px] py-[50px] text-[20px] font-semibold font-Inter italic">
        Programs
      </h1>

      <p className="flex flex-col gap-5 px-[100px] pb-[50px]">
        Discover the wide array of graduate programs available through the
        Alangilan Graduate School POS Generation System. Our programs are
        meticulously designed to provide students with opportunities to explore
        their potentials and enhance their technical and creative skills in a
        vibrant academic environment. <br />
        <br />
        Each program focuses on practical learning and prepares you for success
        in various fields. We teach you skills like teamwork, problem-solving,
        and using new technology, which are essential for success in today's
        professional world.
        <br />
        <br />
        Our graduate programs offer advanced learning in specialized
        disciplines, providing professionals with more opportunities for career
        advancement and nurturing greater intellectual curiosity and passion for
        inquiry. Through transformative solutions to real-world problems, our
        programs mold students into leaders, managers, and innovators.
        <br />
        <br />
        Programs Offered:
        <br />
        -Straight Master's-Doctoral in Electronics Engineering <br />
        -Doctor of Philosophy in Engineering Management <br />
        -Doctor of Philosophy in Engineering Education <br />
        -Doctor of Philosophy in Electronics Engineering <br />
        -Master of Science in Transportation Engineering <br />
        -Master of Science in Material Science and Engineering <br />
        -Master of Science in Earthquake Engineering <br />
        -Master of Science in Advanced Manufacturing <br />
        -Master of Science in Engineering Management <br />
        -Master of Science in Construction Management <br />
        -Master of Science in Electronics Engineering <br />
        -Master of Science in Computer Engineering <br />
        -Master of Engineering major in Mechanical Engineering <br />
        -Master of Engineering major in Industrial Engineering <br />
        -Master of Engineering major in Environmental Engineering <br />
        -Master of Engineering major in Electrical Engineering <br />
        -Master of Engineering major in Electronics Engineering <br />
        -Master of Engineering major in Computer Engineering <br />
        -Master of Engineering major in Chemical Engineering <br />
        -Master of Engineering major in Civil Engineering <br />
        -Master of Science in Computer Science <br />
        -Master of Science in Data Science <br />
        -Master in Information Technology <br />
        -Master of Technology <br />
        -Doctor of Technology <br />
      </p>
      <Footer />
    </div>
  );
}

export default Programs;
