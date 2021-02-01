import React from 'react';

import MastHead from './MastHead';
import MenuButton from './MenuButton';
import Item from './Item';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <MastHead />
            <MenuButton
              open={open}
              handleClick={() => setOpen(state => !state)}
            />
          </div>
          <div className={open ? '' : 'hidden'}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Item href="https://techworkerscoalition.org/">
                TWC International
              </Item>
              <Item href="https://techworkerscoalition.org/community-guide/">
                Community Guide
              </Item>
              <Item href="https://news.techworkerscoalition.org/subscribe/">
                Newsletter
              </Item>
              <Item
                href="https://sites.google.com/view/tech-workers-coalition/learning-club"
                blank
              >
                Learning Clubs
              </Item>
              <Item href="https://medium.com/tech-workers-coalition" blank>
                Medium
              </Item>
              <Item href="https://twitter.com/techworkersco" blank>
                Twitter
              </Item>
              <Item href="https://www.facebook.com/TechWorkersCoalition" blank>
                Facebook
              </Item>
              <Item href="https://collectiveaction.tech/" blank>
                CollectiveActions.Tech
              </Item>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
