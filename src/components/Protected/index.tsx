'use client'
import Navigation from "../Navigation";

const Protected = () => {
  return (
    <>
      <Navigation />
      <div>
        <p>This is protected route</p>
      </div>
    </>
  );
};
export default Protected;
