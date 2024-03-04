import React from "react"

const skills = [
  { skill: "Golang" },
  { skill: "C#" },
  { skill: "JavaScript" },
  { skill: "MySQL" },
  { skill: "Docker" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Linux" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Azril and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Beginners Backend Developer
              based in Bandung, West Java.
            </p>
            <br />
            <p>
              I am a beginner backend developer who specializes in using the Golang language with 3 months
              of experience. I have a little expertise in creating simple projects such as CRUD, Authentication,
              and REST API, using a MySQL database. I also have the expertise to create simple
              games using C# or C sharp for 1 month.
            </p>
            <br />
            <p>
              I have various hobbies and talents to fill my daily life. From working out, gaming, music arts and
              to making YouTube videos, i am always looking for new experiences and love to stay involved
              and learn new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s and that is what I strive
              to see where my career takes me and I am always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
