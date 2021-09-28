/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Link from "next/link";
import { getSession, signIn, signOut } from "next-auth/client";
import { wrapSession } from "../lib/wrapSession";
import Image from "next/image";
import getIDs from "../lib/getIds";

interface NavbarProps {
	children: React.ReactNode
	session: any;
}

interface NavbarStates {
	prevScrollpos: number;
	visible: boolean;
	focused: boolean;
	session: any;
	loading: boolean;
}

const styles = {
	focused: "backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300",
	unfocused: "backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-600"
};

class Navbar extends React.Component<NavbarProps, NavbarStates> {

	constructor(props: NavbarProps) {
		super(props);

		this.state = {
			prevScrollpos: 0,
			visible: true,
			focused: true,
			session: this.props.session,
			loading: true
		};
	}

	// Adds an event listener when the component is mount.
	async componentDidMount() {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", this.handleScroll);
		}

		const session = await getSession();

		if (!this.props.session.loading && session?.user) {
			this.setState({
				session,
				loading: false
			});
		} else {
			this.setState({
				session: null,
				loading: false
			});
		}
	}

	// Remove the event listener when the component is unmount.
	componentWillUnmount() {
		if (typeof window !== "undefined") {
			window.removeEventListener("scroll", this.handleScroll);
		}
	}

	// Hide or show the menu.
	handleScroll = () => {
		if (typeof window !== "undefined") {
			const { prevScrollpos } = this.state;

			const currentScrollPos = window.pageYOffset;
			const visible = prevScrollpos > currentScrollPos;
	
			this.setState({
				prevScrollpos: currentScrollPos,
				visible
			});
		}
	};

	render() {
		return (
			<>
				<header className="pt-5 p-10 bg-transparent fixed left-0 right-0 z-50">

					{/* Use Navbar fade-in and fade-out if mobile breakpoint */}
					<div className={/* this.state.visible ? "visible" : "invisible md:visible" */ "visible"}>

						<nav className={`${this.state.focused ? styles.focused : styles.unfocused} navbar mb-2 rounded-box text-primary-content`}>
							
							{/* DESKTOP LOGO */}

							<p className="hidden navbar-start md:flex px-2 mx-2 font-abril text-2xl">EC</p>

							{/* MOBILE MENU */}

							<div className="md:hidden navbar-start flex" id="toggle">
								<div className="dropdown dropdown-hover">
									<div tabIndex={0} className="btn btn-ghost btn-square">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
										</svg>
									</div>
									<ul tabIndex={0} className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 p-2 shadow menu dropdown-content rounded-box w-52">
										<li>
											<Link href="/">Home</Link>
										</li> 
										<li>
											<Link href="/programs">Programs</Link> 
										</li>
										<li>
											<Link href="/about">About Us</Link> 
										</li>
										<li>
											<Link href="/contact">Contact Us</Link> 
										</li>
										<div className="flex-none" id="toggle">
											<button aria-label="Theme Changer" data-toggle-theme="darktheme,lighttheme" data-act-class="ACTIVECLASS" className="btn btn-ghost btn-square">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 darktheme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lighttheme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
												</svg>
											</button>
										</div>
									</ul>
								</div>
							</div>

							{/* MOBILE LOGO */}

							<Link href="/" passHref>
								<a className="md:hidden navbar-center px-2 mx-2 font-abril text-2xl">EC</a>
							</Link>

							{/* DESKTOP LINKS */}

							<div className="hidden px-2 mx-2 navbar-center md:flex">
								<div className="flex items-stretch text-lg">
									<Link href="/" passHref>
										<button className="btn btn-ghost btn-sm">
											Home
										</button>
									</Link> 
									<Link href="/programs" passHref>
										<button className="btn btn-ghost btn-sm">
											Programs
										</button></Link>
									<Link href="/about" passHref>
										<button className="btn btn-ghost btn-sm">
											About Us
										</button>
									</Link>
									<Link href="/contact" passHref>
										<button className="btn btn-ghost btn-sm">
											Contact Us
										</button>
									</Link>
								</div>
							</div>

							{/* END NAVBAR */}

							<div className="navbar-end">
								{/* DEKSTOP THEME CHANGER */}
								<div className="hidden md:flex md:flex-none" id="toggle">
									<button aria-label="Theme Changer" data-toggle-theme="darktheme,lighttheme" data-act-class="ACTIVECLASS" className="btn btn-ghost btn-square">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 darktheme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
										</svg>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lighttheme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
										</svg>
									</button>
								</div>

								{
									/* PROFILES - LIMITED */
									this.state.loading
										? (
											<button aria-label="Profile" className="btn btn-ghost btn-square">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
											</button>
										)
										:
										(this.state.session?.id)
											? (
												<div className="dropdown dropdown-hover dropdown-end">
													<button aria-label="Profile" className="btn btn-ghost btn-square">
														{
															this.state.session.user?.image
																? (
																	<Image 
																		src={this.state.session.user.image}
																		height={30}
																		width={30}
																		alt="profile picture"
																		className="rounded-full"
																	/>
																)
																: (
																	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
																		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
																	</svg>
																)
														}
													</button>
													<ul tabIndex={0} className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 p-2 shadow menu dropdown-content rounded-box w-52">
														<li>
															<p className="ml-5 mr-5 mt-5">
																<span className="text-lg">
																	<strong>{this.state.session.name}</strong>
																</span>
																<br />
																<span className="text-sm">
																	{this.state.session.user.email}
																</span>
																<br />
																<span className="text-xs">
																	{this.state.session.id}
																</span>
															</p>
														</li>
														<div className="divider w-30" />
														{
															getIDs().includes(this.state.session.id)
																? 
																<li>
																	<Link href="/admin">Dashboard</Link>
																</li>
																: <></>
														}
														<li>
															<a onClick={() => signOut()}><span className="text-error">Logout</span></a>
														</li>
													</ul>
												</div>
											)
											: (
												<button className="btn btn-ghost btn-square" onClick={() => signIn("google", { callbackUrl: process.env.WEB_URI })}>
													<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
												</button>
											)
								}
							</div>

						</nav>
					</div>
				</header>
				{this.props.children}
			</>
		);
	}

}

export default wrapSession(Navbar);