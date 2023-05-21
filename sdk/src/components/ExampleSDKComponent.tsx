import React, { useEffect } from "react";
import { create } from "zustand";

const useBearStore = create((set) => ({
  bears: 13,
}));

const ExampleSDKComponent = () => {
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  const bears = useBearStore((state) => state.bears);

  return <div>hello world {bears} bears</div>;
};

export default ExampleSDKComponent;
