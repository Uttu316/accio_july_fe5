const ServiceCard = (props) => {
  const { img, heading, subHeading } = props;
  return (
    <li className="service_item">
      <img src={img} alt={heading} className="service_icon" />
      <div className="service_content">
        <h3 className="service_title">{heading}</h3>
        <p className="service_description">{subHeading}</p>
      </div>
    </li>
  );
};

export default ServiceCard;
