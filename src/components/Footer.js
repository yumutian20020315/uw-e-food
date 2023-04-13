import React from 'react';

// footer for all page
export default function Footer(props) {
    return (
    <div>
    <footer className="text-center text-lg-start footer">
        <div className="text-center p-2">
            <p>Created by Emma Cao, Mutian Yu, Zhuohui Wu, Christine Cai</p>
            <span className="footerspan"><a href="mutiay@uw.edu">mutiay@uw.edu</a></span>
            <span className="footerspan"><a href="tel:9095536882">9095536882</a></span>
            <p>&copy; 2022 UW e-Food All Rights Reserved</p>
        </div>
    </footer>
    </div>
    );
}