import React from "react";

interface ModalProps {
	children?: React.ReactNode
	program: string
}

interface ModalStates {
	loading: boolean;
}

export default class SignInProvider extends React.Component<ModalProps, ModalStates> {

	constructor(props: ModalProps) {
		super(props);

		this.state = {
			loading: true
		}
	}

	componentDidMount() {

	}

	render() {

		return (
			<>
				{
					this.state.loading
					? (
						<>
							<button className="btn btn-wide btn-disabled">Sign In</button>
						</>
					)
					: (
						<>
							<label htmlFor="sign-in" className="btn btn-wide btn-primary-content">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
								</svg>
								Sign In
							</label> 
							<input type="checkbox" id="sign-in" className="modal-toggle" /> 
								<div className="modal">
									<div className="modal-box">
										<div>
											<p>{this.props.program}</p>
											<label htmlFor="sign-in" className="btn">Close</label>
										</div>
									</div>
							</div>
						</>
					)
				}
			</>
		)

	}

}