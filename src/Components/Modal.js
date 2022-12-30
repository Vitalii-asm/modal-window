
import React from "react";
import './Modal.css';

export default function Modal({setModalOpen}) {
	return (
		<div className="modalBackground">
			<div className="modelContainer">
				<div className="titleCloseBtn">
					<button
						onClick={() => { 
							setModalOpen(false)
						}}
					>

						X
					</button>

				</div>
				<div className="title">
						<h2>Are you sure want to continue?</h2>
				</div>
				<div className="body">
					<p>The next page looks amazing!</p>
				</div>
				<div className="footer">
					<button
						onClick={() => {
							setModalOpen(false);
						}}
						id = 'cancelBtn'
					> Cancel 

					</button>
					<button>Continue</button>
				</div>
		
			</div>
		</div>
	);
};