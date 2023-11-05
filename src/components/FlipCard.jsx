import React, { useEffect, useState } from "react";
import "../styles/FlipCard.css";
import image_q from "../assets/flipcard/q.png";
import image_w from "../assets/flipcard/w.png";
import image_e from "../assets/flipcard/e.png";
import image_r from "../assets/flipcard/r.png";
import image_t from "../assets/flipcard/t.png";
import image_y from "../assets/flipcard/y.png";
import image_u from "../assets/flipcard/u.png";
import image_i from "../assets/flipcard/i.png";
import image_o from "../assets/flipcard/o.png";
import image_p from "../assets/flipcard/p.png";
import image_a from "../assets/flipcard/a.png";
import image_s from "../assets/flipcard/s.png";
import image_d from "../assets/flipcard/d.png";
import image_f from "../assets/flipcard/f.png";
import image_g from "../assets/flipcard/g.png";
import image_h from "../assets/flipcard/h.png";
import image_j from "../assets/flipcard/j.png";
import image_k from "../assets/flipcard/k.png";
import image_l from "../assets/flipcard/l.png";
import image_z from "../assets/flipcard/z.png";
import image_x from "../assets/flipcard/x.png";
import image_c from "../assets/flipcard/c.png";
import image_v from "../assets/flipcard/v.png";
import image_b from "../assets/flipcard/b.png";
import image_n from "../assets/flipcard/n.png";
import image_m from "../assets/flipcard/m.png";

const FlipCard = ({ text }) => {
    return (
        <div className="flip-card h-[85%] w-[300px]">
            <div className="flip-card-inner">
                <div className="flip-card-front bg-primary">
                    <div className="flex flex-col items-center justify-center text-6xl font-medium text-white text-center h-full pb-5 capitalize">{text}</div>
                </div>
                <div className="flip-card-back">
                    <div className="flex flex-col items-center justify-center my-auto">
                        <img src={eval("image_" + text)} alt="Avatar" className="h-[300px]"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
