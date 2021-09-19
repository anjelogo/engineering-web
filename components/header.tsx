import React from "react";
import Link from "next/link";

interface NavbarProps {
	children: React.ReactNode
}

interface NavbarStates {
	prevScrollpos: number;
	visible: boolean;
}

export default class Navbar extends React.Component<NavbarProps, NavbarStates> {

	constructor(props: NavbarProps) {
    super(props);

		this.state = {
			prevScrollpos: 0,
			visible: true
		};
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", this.handleScroll);
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

						<nav className="navbar mb-2 shadow-lg bg-primary-content text-neutral-content rounded-box">
							
							{/* DESKTOP LOGO */}

							<p className="hidden navbar-start md:flex px-2 mx-2 font-abril text-2xl text-primary">EC</p>

							{/* MOBILE MENU */}

							<div className="md:hidden navbar-start flex" id="toggle">
								<div className="dropdown dropdown-hover">
									<div tabIndex={0} className="btn btn-square btn-primary-content">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
										</svg>
									</div>
									<ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-primary rounded-box w-52 text-primary-content">
										<li>
											<Link href="/">Home</Link>
										</li> 
										<li>
											<Link href="/programs">Programs</Link> 
										</li>
										<li>
											<Link href="/contact">Contact Us</Link> 
										</li>
									</ul>
								</div>
							</div>

							{/* MOBILE LOGO */}

							<p className="md:hidden navbar-center px-2 mx-2 font-abril text-2xl text-primary">EC</p>

							{/* DESKTOP LINKS */}

							<div className="hidden px-2 mx-2 navbar-center md:flex">
								<div className="flex items-stretch text-lg">
									<Link href="/" passHref>
										<button className="btn btn-primary-content btn-sm">
											Home
										</button>
									</Link> 
									<Link href="/programs" passHref>
										<button className="btn btn-primary-content btn-sm">
											Programs
										</button></Link>
									<Link href="/contact" passHref>
										<button className="btn btn-primary-content btn-sm">
											Contact Us
										</button>
									</Link>
								</div>
							</div>

							{/* THEME CHANGER */}

							<div className="navbar-end">
								<div className="flex-none" id="toggle">
									<button aria-label="Theme Changer" data-toggle-theme="darktheme,lighttheme" data-act-class="ACTIVECLASS" className="btn btn-square btn-primary-content">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 darktheme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
										</svg>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lighttheme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
										</svg>
									</button>
								</div>
							</div>

						</nav>
					</div>
				</header>
				{this.props.children}
			</>
		)
	}

}