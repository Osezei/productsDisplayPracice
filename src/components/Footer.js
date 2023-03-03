import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Section className="bg-[#0f0f0f]">
      <div className="text-center py-5 text-white">
        <p>
          © 2022 <span className="text-green-700">Kicks</span> All rights
          reserved
        </p>
      </div>
    </Section>
  );
};

export default Footer;
const Section = styled.div`
  .page-length {
    position: relative;
    bottom: 0;
  }
`;
