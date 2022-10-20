import React from "react";

function Footer() {
  const date = new Date();
  // console.log(date.getFullYear());

  return (
    <div className="text-center py-6 font-semibold">
      Copyright &copy; {date.getFullYear()} ADD Trends Inc - All Rights Reserved{" "}
    </div>
  );
}

export default Footer;
