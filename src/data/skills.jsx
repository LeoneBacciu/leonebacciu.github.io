import React from "react"
import { ReactComponent as FlutterIcon } from "../images/icons/flutter.svg"
import { ReactComponent as DjangoIcon } from "../images/icons/django.svg"
import { ReactComponent as DockerIcon } from "../images/icons/docker.svg"
import { ReactComponent as ReactIcon } from "../images/icons/react.svg"
import { ReactComponent as TensorflowIcon } from "../images/icons/tensorflow.svg"
import { ReactComponent as LinuxIcon } from "../images/icons/linux.svg"
import { ReactComponent as JavaIcon } from "../images/icons/java.svg"
import { ReactComponent as FirebaseIcon } from "../images/icons/firebase.svg"
import { ReactComponent as WordPressIcon } from "../images/icons/wordpress.svg"
import { ReactComponent as UE4Icon } from "../images/icons/ue4.svg"
import { ReactComponent as PythonIcon } from "../images/icons/python.svg"
import { ReactComponent as OpenCvIcon } from "../images/icons/opencv.svg"
import { ReactComponent as GatsbyIcon } from "../images/icons/gatsbyjs.svg"
import { ReactComponent as PostgreSqlIcon } from "../images/icons/postgresql.svg"
import { ReactComponent as GitIcon } from "../images/icons/git.svg"
import { ReactComponent as CircuitIcon } from "../images/icons/circuit.svg"
import { ReactComponent as CppIcon } from "../images/icons/cpp.svg"

const skillsData = {
  icons: [
    {
      title: "Flutter",
      icon: <FlutterIcon fill="white" />,
      content:
        "Using patterns such as Clean Architecture and BLoC I build fast apps and maintainable code",
    },
    {
      title: "Django",
      icon: <DjangoIcon />,
      content:
        "My go to choice for the backend, it allows to build fast, reliable and robust web applications and servers",
      color: "#092E20",
    },
    {
      title: "Linux",
      icon: <LinuxIcon />,
      content:
        "+4 years of experience with Linux, as my daily driver and work OS",
    },
    {
      title: "Docker & Microservices",
      icon: <DockerIcon fill="white" />,
      content:
        "I design all the backends to be scalable, embracing the microservices architecture using docker and docker-compose",
    },
    {
      title: "Tensorflow",
      icon: <TensorflowIcon fill="white" />,
      content:
        "Using TensorFlow and tflite I can integrate AI into apps and real-world products",
    },
    {
      title: "React",
      icon: <ReactIcon />,
      content:
        "I built multiple websites and admin panels using Facebook's framework React.js, including this one!",
    },
    {
      title: "Java",
      icon: <JavaIcon />,
      content:
        "I have 5+ years of experience with Java, on desktop (JavaFX) and mobile (Android development) platforms",
    },
    {
      title: "Firebase",
      icon: <FirebaseIcon />,
      content:
        "I use Firebase for its NoSQL fast database, serverless functions and notifications",
      color: "#039BE5",
    },
    {
      title: "WordPress",
      icon: <WordPressIcon />,
      content:
        "I use WordPress to build simpler websites, also by integrating it with native apps",
      color: "#00749C",
    },
    {
      title: "Unreal Engine 4",
      icon: <UE4Icon />,
      content: "I built a few simulators with UE4, using the C++ API",
      color: "#000",
    },
    {
      title: "Python",
      icon: <PythonIcon />,
      content:
        "Web servers, analytics, ML, web scraping, scripting, bots: I can do it with Python",
    },
    {
      title: "OpenCV",
      icon: <OpenCvIcon />,
      content:
        "I have used OpenCV to do image processing and text recognition in Python",
    },
    {
      title: "Gatsby",
      icon: <GatsbyIcon fill="white" />,
      content:
        "This website is built with gatsby! Check the source code on Github!",
      color: "#663399",
    },
    {
      title: "PostgreSQL",
      icon: <PostgreSqlIcon />,
      content:
        "I use PostgreSQL whenever possible, especially for storing complex and geo data",
    },
    {
      title: "GIT",
      icon: <GitIcon />,
      content:
        "I use git versioning system for every project, private and commercial",
    },
    {
      title: "Embedded",
      icon: <CircuitIcon fill="#f1923b" />,
      content:
        "Me and my team qualified 3rd at the Italian Robotics Olympic Games",
      color: "#008C4A",
    },
    {
      title: "C++",
      icon: <CppIcon fill="white" />,
      content:
        "I love C++, I use it for robotics, embedded programming and competitive programming contests",
      color: "#01426A",
    },
  ],
}

export default skillsData
