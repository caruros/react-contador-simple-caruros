import React from "react";

const SecondsCounter = (props) => {

	const secondsString = props.seconds.toString().padStart(6, "0");

	return (
		<div className="bg-dark"> 
			<div className="d-flex bg-black">

				<div className="text-white ">
					<i className="fa-solid fa-clock"></i>
				</div>

				{secondsString.split("").map((digit, index) => (
					<div key={index} className="text-white fs-1 mx-2">
						{digit}
					</div>
				))}

			</div>
		</div>
	);
};

export default SecondsCounter;