import React from 'react'
import Link from 'next/link'
import { BottomNav, BottomNavLinks, BottomNavWrapper } from './MobileNav.styled'

const MobileNav = () => {
  return (
		<div>
			<BottomNav>
				<BottomNavWrapper>
                    <Link href={'/'}>
					<BottomNavLinks>Home</BottomNavLinks>
                    </Link>
                    <Link href={'/'}>

					<BottomNavLinks>Work</BottomNavLinks>
                    </Link>
                    <Link href={'/about'}>
					<BottomNavLinks>About</BottomNavLinks>
                    </Link>
					<BottomNavLinks
						href={"https://github.com/ZavierLowe"}
						target="_blank">
						Github
					</BottomNavLinks>
                    <Link href={'/playground'}>
					<BottomNavLinks>Playground</BottomNavLinks>
                    </Link>
					<BottomNavLinks href={'/'} target="_blank">Resume</BottomNavLinks>
				</BottomNavWrapper>
			</BottomNav>
		</div>
	);
}

export default MobileNav
