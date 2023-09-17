"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [question, setQuestion] = useState(8);
  const [red, setRed] = useState(0);
  const [yellow, setYellow] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  const [max, setMax] = useState(0);

  const redWords = ["Competitive", "Independent", "Assertive", "Decisive", "Productive", "Respectful", "Fact-Oriented", "Goal-Driven", "Results-Oriented", "Self-Starter", "Supervisor", "Ambitious"];
  const yellowWords = ["Fun-Loving", "Enthusiastic", "Optimistic", "Team-Oriented", "Valued", "Action-Oriented", "Confident", "Creative", "Energetic", "Outspoken", "Innovator", "Inspiring"];
  const blueWords = ["Empathetic", "Inclusive", "Selfless", "Considerate", "Harmonious", "Relationship-Driven", "Integrity", "Collaborative", "Generous", "Diplomatic", "Accommodating", "Cooperative"];
  const greenWords = ["Analytical", "Organized", "Methodical", "Meticulous", "Thoughtful", "Deliberate", "Detail-Oriented", "Practical", "Strategic", "Precise", "Systematic", "Realistic"];

  return (
    <main className={`w-screen h-screen ${question < 12 ? "overflow-hidden" : ""}`}>
      <div className="w-[90%] mx-auto">
        <div className="flex-col">
          <div className="grid place-items-center text-4xl pt-12 pb-2 font-bold">Leadership Styles Quiz</div>
          <div className="grid place-items-center text-2xl pb-2 font-bold">A short quiz developed by Alexander Bonev</div>
          <div className="text-neutral-600 mb-6 pb-6 border-b-2 border-neutral-600">Instructions: Select whichever of the four traits best describes how you behave. Do not focus on what you wish you were or would like to be. Your first impression is usually the best; don't overthink your choices!</div>
          <div className={`${question < 12 ? "flex-col space-y-6" : "scale-0"}`}>
            <div
              onClick={() => setSelected(1)}
              className={`border-2 border-red-500 w-full rounded-sm text-center transition-all duration-200 ${selected === 1 ? "bg-red-200" : ""}`}
            >
              {redWords[question]}
            </div>

            <div
              onClick={() => setSelected(2)}
              
              className={`border-2 border-amber-500 w-full rounded-sm text-center transition-all duration-200 ${selected === 2 ? "bg-amber-200" : ""}`}
            >
              {yellowWords[question]}
            </div>
            
            <div
              onClick={() => setSelected(3)}
              className={`border-2 border-blue-500 w-full rounded-sm text-center transition-all duration-200 ${selected === 3 ? "bg-blue-200" : ""}`}
            >
              {blueWords[question]}
            </div>

            <div
              onClick={() => setSelected(4)}
              className={`border-2 border-green-500 w-full rounded-sm text-center transition-all duration-200 ${selected === 4 ? "bg-green-200" : ""}`}
            >
              {greenWords[question]}
            </div>

            <div 
            onClick={()=>{
              if (selected === 1){
                setRed(red+1);
              }
              else if (selected === 2){
                setYellow(yellow+1);
              }
              else if (selected === 3){
                setBlue(blue+1);
              }
              else if (selected === 4){
                setGreen(green+1);
              }
              setSelected(0)
              if (selected !== 0) {
                setQuestion(question+1)
              }
              console.log(question)
              }}
            className="bg-neutral-800 rounded-sm text-white text-md text-center mt-10">
              Next
            </div>
          </div>
          
          <div className={`${question === 12 ? "scale-1" : "scale-0"} -mt-12`}>
            <div className="text-4xl font-bold">Totals:</div>
            <div className="flex-col space-y-2">
              <div className="text-lg pl-4 mt-2 text-red-700">Red: {red}</div>
              <div className="text-lg pl-4 mt-2 text-amber-700">Yellow: {yellow}</div>
              <div className="text-lg pl-4 mt-2 text-blue-700">Blue: {blue}</div>
              <div className="text-lg pl-4 mt-2 text-green-700">Green: {green}</div>
            </div>

            <div className={`${Math.max(red, yellow, blue, green) === red ? "scale-1" : "scale-0"}`}>
              You are a <span className="font-bold text-red-700">RED</span> leader
            </div>
            <div className={`${Math.max(red, yellow, blue, green) === yellow ? "scale-1" : "scale-0"}`}>
              You are a <span className="font-bold text-amber-700">YELLOW</span> leader
            </div>
            <div className={`${Math.max(red, yellow, blue, green) === blue ? "scale-1" : "scale-0"}`}>
              You are a <span className="font-bold text-blue-700">BLUE</span> leader
            </div>
            <div className={`${Math.max(red, yellow, blue, green) === green ? "scale-1" : "scale-0"} mb-4`}>
              You are a <span className="font-bold text-green-700">GREEN</span> leader
            </div>

            <div className="text-3xl font-bold border-b-2 border-neutral-600 mb-2">What The Styles Mean</div>
            <div className="flex-col space-y-4">
              <div>
                <span className="text-2xl font-bold text-red-700">RED: </span>
                <div>
                  You are a strong, decisive, confident leader that takes the initiative and focuses on achieving goals. You communicate your ideas clearly to your teammates, but aren't afraid to work independently.
                </div>
                <br></br>
                <div className="pb-2 border-b-2 border-b-red-700 mb-2">You may have room to improve by being more open to feedback from others and trusting others to handle important tasks.</div>

                <span className="text-2xl font-bold text-amber-700">YELLOW: </span>
                <div>
                  You are an enthusiastic, charismatic, and outgoing leader filled with creativity and positivity that energizes everyone around you. You're always willing to try new ideas and can adapt well in the face of challenges.
                </div>
                <br></br>
                <div className="pb-2 border-b-2 border-b-amber-700 mb-2">
                You may have room to improve by being more focused on important tasks, working on a more detail-oriented approach, and practicing setting realistic goals and timelines.
                </div>

                <span className="text-2xl font-bold text-blue-700">BLUE: </span>
                <div>
                  You are a naturally empathetic and understanding person, able to create harmonious and inclusive environments with ease. You have a strong sense of integrity and ethics, are able to communicate and build trust with others easily, and are able to navigate conflicts through diplomacy.
                </div>
                <br></br>
                <div className="pb-2 border-b-2 border-b-blue-700 mb-2">
                  You may have room to improve through setting boundaries and prioritizing personal needs, learning to say "no", working on being more assertive and decisive, and developing a more goal-oriented approach.
                </div>

                <span className="text-2xl font-bold text-green-700">GREEN: </span>
                <div>
                  You are a thorough, logical, strategical, and analytical leader. You think everything through and approach stressful situations with a level head. You have strong problem-solving skills, and work well independently.
                </div>
                <br></br>
                <div className="pb-2 border-b-2 border-b-green-700 mb-2">
                  You may have room to improve through working on speaking up when necessary, developing the ability to handle conflict effectively, being more open to change, and practicing stepping outside of your comfort zone to take risks.
                </div>
              </div>
            </div>

            <div className="pt-2 pb-4">
              <div className="rounded-md grid place-items-center bg-neutral-800 text-white text-lg p-2"
              onClick={()=>{
                setQuestion(0);
                setRed(0);
                setYellow(0);
                setGreen(0);
                setBlue(0);
              }}>
                Take the quiz again?
              </div>
            </div>

          </div>
              


        </div>
      </div>
    </main>
  )
}
