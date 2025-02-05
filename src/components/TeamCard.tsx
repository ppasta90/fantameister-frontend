const TeamCard = ({ product}:any) => {
  return (
    <div className="flex flex-col w-[450px] border p-4 rounded-md">
      <img src={product.image} alt="team-card" />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
};


export default TeamCard;