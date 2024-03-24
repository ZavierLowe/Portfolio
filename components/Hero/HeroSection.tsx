import React from 'react'
import { Container } from '../container.styled'
import { Blob } from '../Blob.styled'
import styles from './hero.module.css'

const HeroSection = () => {
  return (
		<>
			<Container>
				<Blob />
				<div className={styles.hero}>
					<h1 className={styles.heading}>
						Creating & Developing Visual Solutions With Purpose
					</h1>
					<p className={styles.description}>
						Hi, I’m Zavier and I craft visual solutions for brands,
						corporations, startups, and entrepreneurs taking their visual impact
						to elite status. If your looking for your website to have the latest
						modern feel. Let’s create something together that will make heads
						turn!
					</p>
				</div>
			</Container>
		</>
	);
}

export default HeroSection
