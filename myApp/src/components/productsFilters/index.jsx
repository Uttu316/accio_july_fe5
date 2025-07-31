import styles from "./productsFilter.module.css";

const ProductsFilters = ({ setCategory, category }) => {
  //   const onFilter = (category) => {
  //     if (category === "all") {
  //       setFilteredProducts(mainProducts);
  //       return;
  //     }
  //     setFilteredProducts(
  //       mainProducts.filter((product) => product.category === category)
  //     );
  //   };

  const onFilter = (category) => {
    setCategory(category);
  };
  return (
    <div className={styles.products_filters}>
      <h3>Filters</h3>
      <ul>
        <FilterItem
          onFilter={onFilter}
          category={category}
          label={"All"}
          value={""}
        />
        <FilterItem
          onFilter={onFilter}
          category={category}
          label={"Men's clothing"}
          value={"men's clothing"}
        />
        <FilterItem
          onFilter={onFilter}
          category={category}
          label={"Women's clothing"}
          value={"women's clothing"}
        />
        <FilterItem
          onFilter={onFilter}
          category={category}
          label={"Jewelery"}
          value={"jewelery"}
        />
        <FilterItem
          onFilter={onFilter}
          category={category}
          label={"Electronics"}
          value={"electronics"}
        />
      </ul>
    </div>
  );
};

const FilterItem = ({ label, onFilter, value, category }) => {
  const isSelected = value === category;
  return (
    <li
      className={isSelected ? styles.selected : ""}
      onClick={() => onFilter(value)}
    >
      {label}
    </li>
  );
};
export default ProductsFilters;
