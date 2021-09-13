import React from "react";
import logo from "../public/ec.png"
import logo2 from "../public/ectrans.png"
import Link from "next/link";
import Image from "next/image"

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

							<div className="hidden navbar-start md:flex px-2 mx-2" id="toggle">
								<Image src={logo} alt="logo" width={50} height={50} className="darktheme"/>
								<Image src={logo2} alt="logo" width={50} height={50} className="lighttheme"/>
							</div>

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

							<div className="md:hidden navbar-center flex px-2 mx-2" id="toggle">
								<Image src={logo} alt="logo" width={50} height={50} className="darktheme"/>
								<Image src={logo2} alt="logo" width={50} height={50} className="lighttheme"/>
							</div>

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
									<button data-toggle-theme="lighttheme,darktheme" data-act-class="ACTIVECLASS" className="btn btn-square btn-primary-content">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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