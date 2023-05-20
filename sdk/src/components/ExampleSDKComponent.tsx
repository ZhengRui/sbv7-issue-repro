import React, { useEffect } from "react";

const ExampleSDKComponent = () => {
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return <div>hello world</div>;
};

export default ExampleSDKComponent;
