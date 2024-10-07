function ServiceCard({ children, service, content }) {
  return (
    <article className="self-stretch justify-self-stretch bg-blue-50 p-8 text-center shadow-md transition-all hover:scale-105 hover:bg-blue-100">
      {children}
      <h3>{service}</h3>
      <p className="text-base font-light">{content}</p>
    </article>
  );
}

export default ServiceCard;
