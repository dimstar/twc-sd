import React from 'react';
import JoinForm from '../components/JoinForm';
import Main from '../components/Layout';

const Home = () => {
  return (
    <Main>
      <h1 id="join-us">Join us</h1>
      <p>
        Our Slack is governed by the principles and rules in our{' '}
        <a href="https://techworkerscoalition.org/community-guide">
          Community Guide
        </a>
        . By joining, you agree to follow them.{' '}
        <a href="https://news.techworkerscoalition.org">Our newsletter</a>{' '}
        includes news, announcements, and updates from the Tech Workers
        Coalition. You can{' '}
        <a href="https://news.techworkerscoalition.org/subscribe/">
          subscribe here
        </a>
      </p>
      <p>
        For joining the Slack, please keep in mind that you will be manually
        vetted according to our principles above before you are allowed in.
        Sometimes this can take a couple days. Vetting is done by volunteers,
        please be patient with us!
      </p>
      <h3 className="marg-b-3">Please provide the following:</h3>
      <JoinForm />
      <h1 id="dont-qualify-for-the-slack">Don’t qualify for the Slack?</h1>
      <p>
        If you’re a manager or someone not in tech, but you’re a supporter of
        TWC, we recently setup a new ‘Managers &amp; Allies’ slack you may join{' '}
        <a href="https://join.slack.com/t/techworkersco-4fm8079/shared_invite/zt-h3jau11x-PIPDe4OWaGdYNNzv0RQbhQ">
          here
        </a>
        .
      </p>
    </Main>
  );
};

export default Home;
