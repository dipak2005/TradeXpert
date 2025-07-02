import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-1 text-center ">People</h1>
      </div>

      <div className="row p-5 mb-3">
        <div className="col-4 ">
          <img
            src="media\images\d1.png"
            style={{ borderRadius: "100%", width: "70%", margin: "0 0 0 70px" }}
            alt=""
          />
          <h6
            className="text-center mt-3"
            style={{ fontSize: "21px", fontWeight: "400" }}
          >
            Dipak Thakur
          </h6>
          <p
            className="text-center"
            style={{ fontWeight: "500", color: "#666666" }}
          >
            Founder, CEO
          </p>
        </div>
        <div className="col-5 ">
          <p className="text-muted">
            I'm Dipak Kumar, a Computer Science Engineering student passionate
            about building full-stack web and AI-powered applications. I
            specialize in the MERN stack, with hands-on experience in React,
            Node.js, and MongoDB, and I’m currently developing an AI-driven
            e-commerce platform. I enjoy turning ideas into scalable, real-world
            projects.
          </p>

          <p>Pro-Level Coder</p>
          <p>
            Connect on <a href="https://github.com/dipak2005">Github</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
