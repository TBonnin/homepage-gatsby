import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 64,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 48,
};
const headingAccentStyles = {
  color: "#00AD9F",
};
const listStyles = {
  listStyle: "none",
  marginBottom: 48,
  paddingLeft: 0,
  fontSize: "1.2em",
};
const listItemStyles = {
  fontWeight: 400,
  marginBottom: 18,
};

const linkStyle = {
  color: "#333",
};

const keywordStyles = {
  color: "#999",
  fontWeight: "bold",
};

const moreStyles = {
  fontSize: "1.1em",
  color: "444",
};

const Keyword = ({ name }: { name: string }) => {
  return <span style={keywordStyles}>{name}</span>;
};

const Link = ({ href, name }: { href: string; name: string }) => {
  return (
    <a style={linkStyle} href={href}>
      {name}
    </a>
  );
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Thomas Bonnin - Software engineer</title>
      <h1 style={headingStyles}>
        Hello, my name is <span style={headingAccentStyles}>Thomas Bonnin</span>
        <br />I live near Zurich and I enjoy solving problems.
      </h1>
      <ul style={listStyles}>
        <li style={listItemStyles}>
          I write <Keyword name="code" /> for a living. Currently at{" "}
          <Link href="https://www.netlify.com" name="Netlify" />, previously at{" "}
          <Link href="https://www.gatsbyjs.com" name="Gatsby" />,{" "}
          <Link href="https://www.tamedia.ch" name="Tamedia" /> and{" "}
          <Link href="https://www.theguardian.com" name="The Guardian" />.
        </li>
        <li style={listItemStyles}>
          I made iOS <Keyword name="apps" /> at{" "}
          <Link href="https://www.etsy.com" name="Etsy" /> and{" "}
          <Link href="https://livestream.com" name="Livestream" />.
        </li>
        <li style={listItemStyles}>
          I like <Keyword name="clean" /> and <Keyword name="simple things" />.
        </li>
        <li style={listItemStyles}>
          I like to <Keyword name="learn" />, everyday, about everything.
        </li>
        <li style={listItemStyles}>
          I like to <Keyword name="run" />.
        </li>
        <li style={listItemStyles}>
          I can't resist <Keyword name="dark chocolate" />.
        </li>
        <li style={listItemStyles}>
          I like <Keyword name="chess" /> and <Keyword name="the mountains" />.
        </li>
      </ul>
      <div style={moreStyles}>
        Want to get in touch? Check my{" "}
        <a rel="me" href="https://www.github.com/tbonnin/">
          Github
        </a>
        ,{" "}
        <a rel="me" href="https://www.linkedin.com/in/thomasbonnin/">
          LinkedIn
        </a>
        , or send me an{" "}
        <a rel="me" href="mailto:thomas.bonnin@gmail.com">
          email
        </a>
        .
      </div>
    </main>
  );
};

export default IndexPage;
