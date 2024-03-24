import React from 'react';
import styles from './marquee.module.css'
import { Container } from '../container.styled';

const Marquee = () => {
    return (
        <div>
            <Container>

            <section className="">
                <div
                    className={styles.marqueeSection}
                    role="region"
                    aria-label="Marquee"
                    data-marquee="">
                    <div tabIndex={0} className={styles.marqueeSection__marquee} aria-hidden="true">
                        <div className={styles.marqueeSection__marqueeContent}>
                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>
                        </div>

                        <div className={styles.marqueeSection__marqueeContent}>
                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>

                            <span className={styles.marqueeSection__text }>see my work 🔥</span>
                        </div>
                    </div>
                </div>
            </section>
            </Container>

        </div>
    );
};

export default Marquee;
