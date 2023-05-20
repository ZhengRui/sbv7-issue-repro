import React, { useEffect } from "react";

const ExampleSDKComponent = () => {
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return <div className="w-full us-bg-indigo-400">hello world</div>;
};

export default ExampleSDKComponent;
