import React from 'react'
import styles from './navigation.module.css'

const Navigation = () => {
  return (
		<div className={styles.nav}>
			<h2 className={styles.logo}>Zavier Lowe</h2>
			<div className={styles.links}>
				<ul className={styles.navItems}>
					<li className={styles.navLink}>Projects</li>
					<li className={styles.navLink}>About</li>
					<li className={styles.navLink}>Github</li>
					<li className={styles.navLink}>Resume</li>
				</ul>
			</div>
		</div>
	);
}

export default Navigation
