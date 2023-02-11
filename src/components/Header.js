import React, { useState } from 'react';
import styles from './Header.module.css';
import { useScrollDirection } from '../Assets/useScrollDirection';
import { Waypoint } from 'react-waypoint';
export default function Header() {
	const scroll = useScrollDirection();
	const [isStickyHeader, setIsStickyHeader] = useState(false);
	console.log(scroll);
	const header = `${styles.header} ${
		scroll === 'down' ? styles.hide : styles.show
	}`;
	console.log(header);
	return (
		<Waypoint
			onEnter={() => setIsStickyHeader(false)}
			onLeave={() => setIsStickyHeader(true)}
      bottomOffset='60px'
		>
			<header className={header}>
				<nav className={`${styles.nav} ${isStickyHeader? styles.sticky:''}`}>
					<h5 className={styles.name}>Ajith</h5>
					<div className={styles['main-nav']}>
						<ul className={styles.ul}>
							<li className={styles.li}>
								<a href="/">Home</a>
							</li>
							<li className={styles.li}>
								<a href="#about">About</a>
							</li>
							<li className={styles.li}>
								<a href="#skills">Skills</a>
							</li>
							<li className={styles.li}>
								<a href="#projects">Projects</a>
							</li>
							<li className={styles.li}>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</Waypoint>
	);
}
