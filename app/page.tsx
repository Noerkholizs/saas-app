import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
      <main>
        <h1 className="text-2xl underline">Popular Companions</h1>
          <section className="home-section">
              <CompanionCard
                  id="1"
                  name="Neura The Brainy Exproler"
                  topic="Science"
                  subject="Science"
                  duration={50}
                  color="#ffda6e"
              />
              <CompanionCard
                  id="2"
                  name="Countsy The Number Wizard"
                  topic="Derivatives and Integrls"
                  subject="Science"
                  duration={40}
                  color="#e5d0ff"
              />
              <CompanionCard
                  id="3"
                  name="Verba The Vocabulary Builder"
                  topic="Language"
                  subject="Enlish Literature"
                  duration={60}
                  color="#BDE7FF"
              />
          </section>

          <section className="home-section">
              <CompanionList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
              />
              <CTA />
          </section>
      </main>
  )
}

export default Page
