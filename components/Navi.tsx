import React from 'react';
import Link from "next/link";
// import Resume from "../assets/documents/Zavier Lowe Resume-Front End Developer & Designer.pdf"
import {Logo, NavItems, NavLink, NavLinks, Navigation} from "./Header.styled";

const Navi = () => {
    return (
			<div>
				<Navigation>
					
						
							<Logo>Zavier Lowe</Logo>
						
					

					<NavLinks>
						
							<NavItems>
								<NavLink>Projects</NavLink>
							</NavItems>
						
						
							<NavItems>
								<NavLink>About</NavLink>
							</NavItems>
						
						
							<NavItems>
								<NavLink>Playground</NavLink>
							</NavItems>
						
						

						<NavItems>
							<NavLink href={"https://github.com/ZavierLowe"} target="_blank">
								Github
							</NavLink>
						</NavItems>

						<NavItems>
							<NavLink>Resume</NavLink>
						</NavItems>
					</NavLinks>
				</Navigation>
			</div>
		);
};

export default Navi;
