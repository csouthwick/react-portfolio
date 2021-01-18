import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  const tabs = ['About', 'Portfolio', 'Contact'];
  return (
    <nav>
      <ul className="nav">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => setCurrentPage(tab)}
              className={
                currentPage === tab ? 'nav-link active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
