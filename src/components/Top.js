import React from "react";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="h-12 bg-border-light-bg">
      <div className="w-full flex content-center flex-wrap">
        <div>
          <Button>
            <Link to="/"> Contact </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Top;
