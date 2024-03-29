import React from "react";
import Link from "next/link";
import { SessionContextValue, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import AlertConstructor from "./alertConstructor";
import { hasAuthLevel } from "../../lib/functions";
import { wrapSession } from "../../lib/wrapSession";

interface NavbarProps {
	children: React.ReactNode
	session: SessionContextValue
}

class Navbar extends React.Component<NavbarProps> {

	constructor(props: NavbarProps) {
		super(props);
	}

	render(): JSX.Element {
		const badges: {
			[index: number]: JSX.Element
		} = {
			4: (<span className="badge badge-info">Admin</span>),
			3:	(<span className="badge badge-error">Officer</span>),
			2:	(<span className="badge badge-accent">Representative</span>),
			1:	(<></>),
			0:	(<></>)
		};

		return (
			<>
				<header className="pt-5 p-10 bg-transparent fixed left-0 right-0 z-50">

					<nav className="backdrop-blur-lg bg-gray-300/30 navbar mb-2 rounded-box drop-shadow-lg text-secondary-content">
							
						{/* DESKTOP LOGO */}

						<p className="hidden navbar-start md:flex px-2 mx-2 font-extrabold text-2xl">
							EC
						</p>

						{/* MOBILE MENU */}

						<div className="md:hidden navbar-start flex" id="toggle">
							<div className="dropdown dropdown-hover">
								<div tabIndex={0} className="btn btn-ghost btn-square">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
									</svg>
								</div>
								<ul tabIndex={0} className="backdrop-blur-lg bg-gray-300/30 p-2 shadow menu dropdown-content rounded-box w-52">
									<li>
										<Link href="/">Home</Link>
									</li> 
									<li>
										<Link href="/discover">Discover</Link> 
									</li>
									<li>
										<Link href="/programs">Programs</Link> 
									</li>
									<li>
										<Link href="/about">About Us</Link> 
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
							<a className="md:hidden navbar-center px-2 mx-2 font-extrabold text-2xl">EC</a>
						</Link>

						{/* DESKTOP LINKS */}

						<div className="hidden px-2 mx-2 navbar-center md:flex">
							<div className="items-stretch text-lg">
								<Link href="/" passHref>
									<button className="btn btn-ghost btn-sm">
										Home
									</button>
								</Link> 
								<Link href="/discover" passHref>
									<button className="btn btn-ghost btn-sm">
										Discover
									</button>
								</Link>
								<Link href="/programs" passHref>
									<button className="btn btn-ghost btn-sm">
										Programs
									</button>
								</Link>
								<Link href="/about" passHref>
									<button className="btn btn-ghost btn-sm">
										About Us
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
								this.props.session.status == "loading"
									? (
										<button aria-label="Profile" className="btn btn-ghost btn-square animate-spin">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
											</svg>
										</button>
									)
									:
									this.props.session.status == "authenticated"
										? (
											<>{/* 
												<div className="dropdown dropdown-hover dropdown-end">
													<button aria-label="Notifications" className="btn btn-ghost btn-square">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
															<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
														</svg>
													</button>
												</div> */}
											<div className="dropdown dropdown-hover dropdown-end">
												<button aria-label="Profile" className="btn btn-ghost btn-square">
													{
														this.props.session.data.user.image
															? (
																<Image 
																	src={this.props.session.data.user.image}
																	height={30}
																	width={30}
																	alt="profile picture"
																	className="mask mask-squircle"
																/>
															)
															: (
																<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
																	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
																</svg>
															)
													}
												</button>
												<ul tabIndex={0} className="backdrop-blur-lg bg-gray-300/30 p-2 shadow menu dropdown-content rounded-box w-52">
													<li>
														<p className="ml-5 mr-5 mt-5">
															<span className="text-lg">
																<strong>{this.props.session.data.user.name}</strong>
																{
																	badges[this.props.session.data.user.authLevel]
																}
															</span>
															<br />
														</p>
													</li>
													<div className="divider w-30" />
													{
														hasAuthLevel(this.props.session.data.user, 2)
															? 
															<li>
																<Link href="/admin">Dashboard</Link>
															</li>
															: <></>
													}
													<li>
														<a href={`/user?id=${this.props.session.data.user.id}`}>Profile</a>
													</li>
													<li>
														<a onClick={() => signOut()}><span className="text-error">Logout</span></a>
													</li>
												</ul>
											</div>
											</>
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
					<AlertConstructor />
				</header>
				{this.props.children}
			</>
		);
	}

}

export default wrapSession(Navbar);