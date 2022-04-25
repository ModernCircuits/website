import React from "react";

import asic_dynamic_logo from "../img/asic/asic_dynamic_logo.png";
import asic_filter_logo from "../img/asic/asic_filter_logo.png";
import asic_shape_logo from "../img/asic/asic_shape_logo.png";
import asic_space_logo from "../img/asic/asic_space_logo.png";
import asic_tone_logo from "../img/asic/asic_tone_logo.png";

import pen from "../img/icons/pen.svg";
import xmark from "../img/icons/xmark.svg";

import "./User.css";

interface UserProductListItemProps {
  name: string;
  logo: string;
  experies: string;
  isOpen: boolean;
  setOpen(id: string): void;
}

const UserProductListItem: React.FunctionComponent<
  UserProductListItemProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const selected = props.isOpen ? "user-product-list-item-selected" : "";
  return (
    <div className={"user-product-list-item " + selected}>
      <img src={props.logo} alt={props.name} />
      <h3>{props.name}</h3>
      <p>
        Experies: <b>{`${props.experies}`}</b>
      </p>
      <img
        src={props.isOpen ? xmark : pen}
        alt="Edit"
        onClick={() => props.setOpen(props.isOpen ? "" : props.name)}
      />
    </div>
  );
};

const UserProductList = () => {
  const products = [
    {
      name: "ASIC Dynamic",
      logo: asic_dynamic_logo,
      experies: "2022-12-31",
    },
    {
      name: "ASIC Filter",
      logo: asic_filter_logo,
      experies: "2022-12-31",
    },
    {
      name: "ASIC Shape",
      logo: asic_shape_logo,
      experies: "2022-12-31",
    },
    {
      name: "ASIC Space",
      logo: asic_space_logo,
      experies: "2022-12-31",
    },
    {
      name: "ASIC Tone",
      logo: asic_tone_logo,
      experies: "2022-12-31",
    },
  ];

  const [selected, setSelected] = React.useState("");

  return (
    <div className="user-product-list">
      {products.map((p) => {
        return (
          <UserProductListItem
            name={p.name}
            logo={p.logo}
            experies={p.experies}
            isOpen={selected === p.name}
            setOpen={(id) => setSelected(id)}
          />
        );
      })}
    </div>
  );
};

const UserAccountPropertyList = () => {
  const name = "Lukas Kähler";
  const email = "lukas@modern-circuits.com";

  return (
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
  );
};

export const User = () => {
  return (
    <div className="page-content page-user">
      <div className="card card-primary card-user-info card-user-product-info ">
        <h2 className="card-heading center">Products</h2>
        <hr />
        <UserProductList />
      </div>
      <div className="card card-primary card-user-info card-user-account-info ">
        <h2 className="card-heading center">Account</h2>
        <hr />
        <UserAccountPropertyList />
      </div>
    </div>
  );
};
