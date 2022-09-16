import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import data from "./../quotations";
import bg from "./../images/testimonial-bg.svg"
import i1 from "./../images/testimonial-1.png"
import i2 from "./../images/testimonial-2.png"
import i3 from "./../images/testimonial-3.png"
import i4 from "./../images/testimonial-4.png"

const customBg = {
   backgroundImage: `url(${bg})`,
   backgroundSize: "cover"
}

function Quote({ p, name, job }) {
	return (
		<>
			<div className="p-1 d-inline-block animation-come-from-left" style={{width: "calc(100vw - 32px)"}}>
				<div className="clr-primary fs-4">
					<FontAwesomeIcon icon={faQuoteRight} />
				</div>
				<p className="clr-gray m-auto max-60ch pre-wrap">{p}</p>
            <div className="m-t-2">
               <h4 className="fs-125 fw-700 clr-gray-dark">
                  {name}
               </h4>
               <p className="clr-gray">{job}</p>
            </div>
			</div>
		</>
	);
}

export default function Quotation() {
   const [slide, setSlide] = React.useState(0);
   const [item, setItem] = React.useState(data);

   const slideIt = () => {
      slide < data.length - 1 ? setSlide((s) => s + 1) : setSlide(0);
		setItem(data[slide]);
   }

   useEffect(() => {
      setTimeout(() => {
         slideIt();
      }, 2000)
   }, [slide])

	return (
		<section className="relative p-y-4 text-center" style={customBg}>
			<img
				src={i1}
				alt="image"
				style={{ zIndex: -1 }}
				className="phone-hidden circled absolute t-20 l-10"
			/>
			<img
				src={i2}
				alt="image"
				style={{ zIndex: -1 }}
				className="phone-hidden circled absolute b-10 l-20"
			/>
			<img
				src={i3}
				alt="image"
				style={{ zIndex: -1 }}
				className="phone-hidden circled absolute t-10 r-2"
			/>
			<img
				src={i4}
				alt="image"
				style={{ zIndex: -1 }}
				className="phone-hidden circled absolute b-10 r-10"
			/>

			<h2 className="fs-250 clr-gray-dark">What our customers says</h2>
			<div className="text-nowrap overflow-hidden">
				{item && (
					<Quote
						key={item.id}
						p={item.text}
						name={item.name}
						job={item.job}
					/>
				)}
			</div>
			<div className="m-t-1 flex-center gap-3">
				<div className="btn-primary w-3 h-3 circled flex-center fs-150" onClick={() => {
               slide > 0 ? setSlide(p => p - 1) : setSlide(data.length - 1)
            }}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</div>
				<div
					className="btn-primary w-3 h-3 circled flex-center fs-150"
					onClick={() => slideIt()}
				>
					<FontAwesomeIcon icon={faAngleRight} />
				</div>
			</div>
		</section>
	);
}
