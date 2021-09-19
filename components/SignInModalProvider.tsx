import React from "react";

interface ModalProps {
	children?: React.ReactNode
}

interface ModalStates {
	hidden: boolean;
}

export default class SignInModalProvider extends React.Component<ModalProps, ModalStates> {

	constructor(props: ModalProps) {
		super(props);

		this.state = {
			hidden: true
		}
	}

	render() {

		return (
			<>
				<label htmlFor="sign-in" className="btn btn-wide btn-primary-content">Sign In</label> 
				<input type="checkbox" id="sign-in" className="modal-toggle" /> 
					<div className="modal">
						<div className="modal-box">
							<div>
								<label htmlFor="sign-in" className="btn">Close</label>
							</div>
						</div>
				</div>
			</>
		)

	}

}