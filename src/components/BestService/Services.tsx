import React from 'react';
import styles from './BestServices.module.css'

interface ServicesProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // this allows SVG or any JSX
}

export const Services: React.FC<ServicesProps> = ({ title, description, icon }) => {
  return (
    <article className={styles.service}>
      <div className={styles.serviceSVG}>{icon}</div>
      <h1 className={styles.serviceTitle}>{title}</h1>
      <p className={styles.serviceDes}>{description}</p>
    </article>
  );
};