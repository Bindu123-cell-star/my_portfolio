const projects = [
  {
    title: 'Insurance Management System',
    description: 'Web platform for managing accident data and documents.',
    technologies: 'React, Redux, Spring Boot, AWS S3, PostgreSQL',
    github: 'https://github.com/poojitha-portfolio'
  },
  {
    title: 'Banking Platform',
    description: 'Secure banking platform for transactions and loans.',
    technologies: 'React, Spring Boot, DynamoDB, Kafka',
    github: 'https://github.com/poojitha-portfolio'
  },
  {
    title: 'Airline Management',
    description: 'Cloud-native airline platform with real-time services.',
    technologies: 'React, Kafka, Spring Boot, Azure, Docker',
    github: 'https://github.com/poojitha-portfolio'
  }
];

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p><strong>Technologies:</strong> {p.technologies}</p>
          <a href={p.github} target="_blank">GitHub Link</a>
        </div>
      ))}
    </section>
  );
}
