import React from "react";

import asic_dynamic_logo from "../img/asic/asic_dynamic_logo.png";
import asic_filter_logo from "../img/asic/asic_filter_logo.png";
import asic_shape_logo from "../img/asic/asic_shape_logo.png";
import asic_space_logo from "../img/asic/asic_space_logo.png";
import asic_tone_logo from "../img/asic/asic_tone_logo.png";

import "./User.css";

interface UserProductProps {
  name: string;
  logo: string;
}

const UserProduct = (props: UserProductProps) => {
  return (
    <div className="user-product-short">
      <img src={props.logo} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
};

export const User = () => {
  return (
    <div className="page-content page-user">
      <div className="card card-primary card-user-info card-user-product-info ">
        <h2 className="card-heading center">Products</h2>
        <hr />
        <UserProduct name="ASIC Dynamic" logo={asic_dynamic_logo} />
        <UserProduct name="ASIC Filter" logo={asic_filter_logo} />
        <UserProduct name="ASIC Shape" logo={asic_shape_logo} />
        <UserProduct name="ASIC Space" logo={asic_space_logo} />
        <UserProduct name="ASIC Tone" logo={asic_tone_logo} />
      </div>
      <div className="card card-primary card-user-info card-user-account-info ">
        <h2 className="card-heading center">Account</h2>
        <hr />
      </div>
    </div>
  );
};
