import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../Components";
import { experiences, skills, education } from "../constants";
import Achievements from "../Components/Achievements";
import Certifications from "../Components/Certifications";

import "react-vertical-timeline-component/style.min.css";
import "../styles/timeline.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text animate-fade-in'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Piyush Saxena
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 animate-slide-up'>
        <p className='section-text text-lg leading-relaxed'>
         💻 I am a pre-final year B.Tech student in Information Technology at G.L. Bajaj Institute of Technology and Management, focusing on Web Development. I enjoy creating websites and applications that are useful, easy to use, and can make an impact. 🚀 My aim is to become a skilled IT professional and web developer who uses technology to solve real-life problems and contribute to the tech community.
        </p>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Education</h3>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {education.map((edu, index) => (
              <VerticalTimelineElement
                key={edu.school}
                iconStyle={{ background: edu.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden transition-transform duration-300 hover:scale-110'>
                    {edu.icon && (
                      <img
                        src={edu.icon}
                        alt={edu.school}
                        className='w-full h-full object-contain'
                      />
                    )}
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: edu.iconBg,
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${edu.iconBg}`,
                }}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <div style={{ marginBottom: '10px', fontWeight: 'bold', color: '#2b77e7', fontSize: '0.9rem' }}>
                  {edu.date}
                </div>
                <div>
                  <h3 className='section-title'>
                    {edu.title}
                  </h3>
                  <p
                    className='section-subtitle'
                    style={{ margin: 0 }}
                  >
                    {edu.school}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {edu.points.map((point, index) => (
                    <li
                      key={`education-point-${index}`}
                      className='section-points pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20 group' key={skill.name}>
              <div className='btn-back rounded-xl transition-all duration-300 group-hover:scale-110' />
              <div className='btn-front rounded-xl flex justify-center items-center flex-col transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain transition-transform duration-300 group-hover:scale-110'
                />
                <p className='skill-name text-sm text-center mt-2'>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p className='section-text text-lg leading-relaxed'>
            I've gained valuable experience working with innovative companies, enhancing my skills and collaborating with talented professionals. Here's my journey:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden transition-transform duration-300 hover:scale-110'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${experience.iconBg}`,
                }}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <div style={{ marginBottom: '10px', fontWeight: 'bold', color: '#2b77e7', fontSize: '0.9rem' }}>
                  {experience.date}
                </div>
                <div>
                  <h3 className='section-title'>
                    {experience.title}
                  </h3>
                  <p
                    className='section-subtitle'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='section-points pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <Certifications />

        {/* Resume Section */}
      {/* <div className="py-16 flex flex-col items-center">
        <h3 className='subhead-text'>Resume</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p className='section-text text-lg leading-relaxed text-center'>
            Want to know more about my experience and skills? Check out my detailed resume.
          </p>
        </div>
        <a
          href="https://shorturl.at/urZqe"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#2563eb] transition-all duration-300"
        >
          View Resume
        </a>
      </div> */}


      <Achievements />

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;