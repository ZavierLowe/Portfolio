import React from 'react';
import Link from "next/link";
import Resume from "../assets/documents/Zavier Lowe Resume-Front End Developer & Designer.pdf"
import {Logo, NavItems, NavLink, NavLinks, Navigation} from "./Header.styled";

const Navi = () => {
    return (
			<div>
				<Navigation>
					<Link href={"/"}>
						<NavLink>
							<Logo>Zavier Lowe</Logo>
						</NavLink>
					</Link>

					<NavLinks>
						<Link href={"/"}>
							<NavItems>
								<NavLink>Projects</NavLink>
							</NavItems>
						</Link>
						<Link href={"/about"}>
							<NavItems>About</NavItems>
						</Link>
						<Link href={"/playground"}>
							<NavItems>Playground</NavItems>
						</Link>
						<NavItems>
							<NavLink href={"https://github.com/ZavierLowe"} target="_blank">
								Github
							</NavLink>
						</NavItems>

						<NavItems href={Resume}>Resume</NavItems>
					</NavLinks>
				</Navigation>
			</div>
		);
};

export default Navi;
