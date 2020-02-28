import React from "react";
import homeBg from "./img/homeBg.jpg";
import aboutUsBg from "./img/aboutUsBg.jpg";
import cooperateBg from "./img/cooperateBg.png";
import requirementsBg from "./img/requirementsBg.png";
import whyUsBg from "./img/whyUsBg.jpg";
import conditionsBg from "./img/conditionsBg.png";
import usegeBg from "./img/usegeBg.png";
import testimonilasBg from "./img/testimonilasBg.jpg";
import teamBg from "./img/teamBg.png";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import WhyUs from "./Component/WhyUs";
import { Element } from 'react-scroll'
import Contacts from "./Component/Contacts";
import Cooperate from "./Component/Сooperate";
import Conditions from "./Component/Сonditions";
import Requirements from "./Component/Requirements";
import Usage from "./Component/Usage";
import Team from "./Component/Team";


export const page = [
    {
        name: "home",
        Component: ({targetScroll, ...rest}) => (
            <Element name={targetScroll}>
                <Home background={homeBg} {...rest} />
            </Element>
        )
    },
    {
        name: "why-us",
        label: "whyUs",
        Component: ({targetScroll, ...rest}) => (
            <Element name={targetScroll} >
                <WhyUs background={whyUsBg} {...rest} />
            </Element>
        )
    },
    {
        name: "about-us",
        label: "aboutUs",
        Component: ({targetScroll, ...rest}) => (
            <Element name={targetScroll} >
                <AboutUs background={aboutUsBg} {...rest} />
            </Element>
        )
    },
    {
        name: "cooperate",
        label: "cooperate",
        Component: ({targetScroll, ...rest}) => (
            <Element name={targetScroll} >
                <Cooperate background={cooperateBg} {...rest} />
            </Element>
        )
    },
    {
        name: "requirements",
        label: "requirements",
        Component: ({targetScroll, ...rest}) => (
            <Element name={targetScroll} >
                <Requirements background={requirementsBg} {...rest} />
            </Element>
        )
    },
        {
            name: "conditions",
            label: "conditions",
            Component: ({targetScroll, ...rest}) => (
                <Element name={targetScroll} >
                    <Conditions background={conditionsBg} {...rest} />
                </Element>
            )
        },
        {
            name: "usage",
            label: "usage",
            Component: ({targetScroll, ...rest}) => (
                <Element name={targetScroll} >
                    <Usage background={usegeBg} {...rest} />
                </Element>
            )
        },
        {
            name: "team",
            label: "team",
            Component: ({targetScroll, ...rest}) => (
                <Element name={targetScroll} >
                    <Team background={teamBg} {...rest} />
                </Element>
            )
        },
       {
           name: "contacts",
           label: "contacts",
           Component: ({targetScroll, ...rest}) => (
               <Element name={targetScroll} >
                   <Contacts background={testimonilasBg} {...rest} />
               </Element>
           )
       }
];
