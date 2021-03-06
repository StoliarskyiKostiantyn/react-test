import PropTypes from "prop-types";
function Painting({
  imageUrl,
  title,
  profileUrl,
  authorName,
  price,
  quantity,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Цена:{price} кредитов</p>
      <p>Доступность: {quantity < 10 ? "заканчивается" : "есть в наличии"}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}
Painting.prototype = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  profileUrl: PropTypes.string,
  authorName: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default Painting;
