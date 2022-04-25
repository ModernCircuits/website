import React from "react";

import asic_dynamic_logo from "../img/asic/asic_dynamic_logo.png";
import asic_filter_logo from "../img/asic/asic_filter_logo.png";
import asic_shape_logo from "../img/asic/asic_shape_logo.png";
import asic_space_logo from "../img/asic/asic_space_logo.png";
import asic_tone_logo from "../img/asic/asic_tone_logo.png";

import pen from "../img/icons/pen.svg";
import xmark from "../img/icons/xmark.svg";

import "./User.css";

interface UserProductProps {
  name: string;
  logo: string;
}

const UserProduct: React.FunctionComponent<
  UserProductProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const [open, setOpen] = React.useState(false);
  const selected = open ? "user-product-list-item-selected" : "";
  return (
    <div className={"user-product-list-item " + selected}>
      <img src={props.logo} alt={props.name} />
      <p>{props.name}</p>
      <img src={open ? xmark : pen} alt="Edit" onClick={() => setOpen(!open)} />
    </div>
  );
};

export const User = () => {
  const name = "Lukas Kähler";
  const email = "lukas@modern-circuits.com";

  return (
    <div className="page-content page-user">
      <div className="card card-primary card-user-info card-user-product-info ">
        <h2 className="card-heading center">Products</h2>
        <hr />
        <div className="user-product-list">
          <UserProduct name="ASIC Dynamic" logo={asic_dynamic_logo} />
          <UserProduct name="ASIC Filter" logo={asic_filter_logo} />
          <UserProduct name="ASIC Shape" logo={asic_shape_logo} />
          <UserProduct name="ASIC Space" logo={asic_space_logo} />
          <UserProduct name="ASIC Tone" logo={asic_tone_logo} />
        </div>
      </div>
      <div className="card card-primary card-user-info card-user-account-info ">
        <h2 className="card-heading center">Account</h2>
        <hr />
        <div className="card-user-account-property-list">
          <div className="card-user-account-property">
            <p>
              Name: <b>{name}</b>
            </p>
            <img src={pen} alt="Edit" />
          </div>
          <div className="card-user-account-property">
            <p>
              Email: <b>{email}</b>
            </p>
            <img src={pen} alt="Edit" />
          </div>
          <div className="card-user-account-property">
            <p>
              Password: <b>*****</b>
            </p>
            <img src={pen} alt="Edit" />
          </div>
        </div>
      </div>
    </div>
  );
};
