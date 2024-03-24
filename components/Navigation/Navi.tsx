import React from "react";
import Link from "next/link";
import { Logo, NavItems, NavLink, NavLinks, Navigation } from "./Header.styled";
import { Container } from "../container.styled";

const Navi = () => {
	return (
		<div>
			<Container>
				<Navigation>
					<Logo>Zavier Lowe</Logo>

					<NavLinks>
						<NavItems>
							<NavLink>Projects</NavLink>
						</NavItems>

						<NavItems>
							<Link href={"/about"}>
							<NavLink>About</NavLink>

							</Link>
						</NavItems>

						<NavItems>
							<NavLink>Blog</NavLink>
						</NavItems>

						<NavItems>
							<NavLink href={"https://github.com/ZavierLowe"} target="_blank">
								Github
							</NavLink>
						</NavItems>

						<NavItems>
							<NavLink href={"http://drive.google.com"}>Resume</NavLink>
						</NavItems>
					</NavLinks>
				</Navigation>
			</Container>
		</div>
	);
};

export default Navi;
