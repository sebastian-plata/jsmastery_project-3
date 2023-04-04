import React from "react";
import { clients } from "../constants";
import styles from "../styles";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] cursor-pointer`}
        >
          <img
            src={client.logo}
            alt={client.id}
            className="sm:w-[192px] w-[100px] object-contain opacity-50 hover:scale-110 hover:opacity-100"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
