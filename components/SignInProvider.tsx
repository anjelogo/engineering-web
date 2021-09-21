import React from "react";

interface ModalProps {
	children?: React.ReactNode
	program: string
}

interface ModalStates {
	loading: {
		bool: boolean;
		text: string;
	}
}

export default class SignInProvider extends React.Component<ModalProps, ModalStates> {

	constructor(props: ModalProps) {
		super(props);

		this.state = {
			loading: {
				bool: true,
				text: "SIGN-IN COMING SOON"
			}
		}
	}

	componentDidMount() {
		//this.handleCallback()
	}

	handleSignIn = () => {
		this.setState({
			loading: {
				bool: true,
				text: "Signing In"
			}
		})

		setTimeout(() => this.handleCallback(), 4000)
	}

	handleCallback = () => {
		this.setState({
			loading: {
				bool: false,
				text: ""
			}
		})
	}

	render() {

		return (
			<>
				{
					this.state.loading.bool
					? (
						<>
							<button className="btn btn-wide btn-disabled animate-pulse">{this.state.loading.text}</button>
						</>
					)
					: (
						<>
							<button className="btn btn-wide btn-primary-content" onClick={this.handleSignIn}>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
								</svg>
								Sign In
							</button> 
						</>
					)
				}
			</>
		)

	}

}